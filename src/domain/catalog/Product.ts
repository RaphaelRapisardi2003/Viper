import { Money } from '../shared/Money'

export type BadgeType = 'new' | 'sale' | 'default'

export interface ColorOption {
  hex: string
  name: string
}

export interface ProductProps {
  id: string
  slug: string
  brand: string
  name: string
  price: Money
  oldPrice?: Money
  image: string
  category: string
  tags: string[]
  badge?: string
  badgeType?: BadgeType
  colors?: ColorOption[]
  description?: string
}

/**
 * Entity / Aggregate Root — Product.
 * Possui identidade (id) e encapsula as regras de catálogo.
 */
export class Product {
  private constructor(private readonly props: ProductProps) {}

  static create(props: ProductProps): Product {
    if (!props.id) throw new Error('Product exige um id.')
    if (!props.slug) throw new Error('Product exige um slug.')
    return new Product(props)
  }

  get id(): string { return this.props.id }
  get slug(): string { return this.props.slug }
  get brand(): string { return this.props.brand }
  get name(): string { return this.props.name }
  get price(): Money { return this.props.price }
  get oldPrice(): Money | undefined { return this.props.oldPrice }
  get image(): string { return this.props.image }
  get category(): string { return this.props.category }
  get tags(): string[] { return this.props.tags }
  get badge(): string | undefined { return this.props.badge }
  get badgeType(): BadgeType | undefined { return this.props.badgeType }
  get colors(): ColorOption[] | undefined { return this.props.colors }
  get description(): string | undefined { return this.props.description }

  /** Regra de domínio: está em promoção quando há preço anterior maior. */
  isOnSale(): boolean {
    return !!this.props.oldPrice && this.props.oldPrice.cents > this.props.price.cents
  }

  /** Percentual de desconto arredondado, ou 0 quando não há promoção. */
  discountPercent(): number {
    if (!this.isOnSale() || !this.props.oldPrice) return 0
    const diff = this.props.oldPrice.cents - this.props.price.cents
    return Math.round((diff / this.props.oldPrice.cents) * 100)
  }

  belongsTo(collectionSlug: string): boolean {
    return this.props.category === collectionSlug || this.props.tags.includes(collectionSlug)
  }

  matches(query: string): boolean {
    const q = query.trim().toLowerCase()
    if (!q) return false
    return (
      this.props.name.toLowerCase().includes(q) ||
      this.props.brand.toLowerCase().includes(q) ||
      this.props.category.toLowerCase().includes(q) ||
      this.props.tags.some(t => t.includes(q))
    )
  }
}
