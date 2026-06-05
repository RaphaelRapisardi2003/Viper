import { Money } from '../shared/Money'

export interface CartItemProps {
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  unitPrice: Money
  quantity: number
  color?: string
}

/**
 * Entity dentro do agregado Cart.
 * Identificada por productId + color (mesma peça em cores distintas são linhas separadas).
 */
export class CartItem {
  private constructor(private props: CartItemProps) {}

  static create(props: CartItemProps): CartItem {
    if (props.quantity < 1) throw new Error('Quantidade mínima é 1.')
    return new CartItem(props)
  }

  get productId(): string { return this.props.productId }
  get slug(): string { return this.props.slug }
  get name(): string { return this.props.name }
  get brand(): string { return this.props.brand }
  get image(): string { return this.props.image }
  get unitPrice(): Money { return this.props.unitPrice }
  get quantity(): number { return this.props.quantity }
  get color(): string | undefined { return this.props.color }

  /** Chave de linha: distingue a mesma peça em cores diferentes. */
  get lineKey(): string {
    return `${this.props.productId}::${this.props.color ?? 'default'}`
  }

  subtotal(): Money {
    return this.props.unitPrice.multiply(this.props.quantity)
  }

  increaseBy(amount: number): void {
    this.props.quantity += amount
  }

  setQuantity(quantity: number): void {
    if (quantity < 1) throw new Error('Quantidade mínima é 1.')
    this.props.quantity = quantity
  }

  snapshot(): CartItemProps {
    return { ...this.props }
  }
}
