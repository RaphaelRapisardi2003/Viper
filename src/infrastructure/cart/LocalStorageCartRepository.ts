import { Cart } from '@/src/domain/cart/Cart'
import { Money } from '@/src/domain/shared/Money'
import type { CartRepository } from '@/src/domain/cart/CartRepository'
import type { CartItemProps } from '@/src/domain/cart/CartItem'

const STORAGE_KEY = 'viper.cart.v1'

interface PersistedLine {
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  unitPriceCents: number
  quantity: number
  color?: string
}

/**
 * Adapter (driven) — persiste o carrinho no localStorage do browser.
 * Serializa Money para centavos e reidrata o agregado na leitura.
 */
export class LocalStorageCartRepository implements CartRepository {
  load(): Cart {
    if (typeof window === 'undefined') return Cart.empty()
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return Cart.empty()
      const lines: PersistedLine[] = JSON.parse(raw)
      const props: CartItemProps[] = lines.map(l => ({
        productId: l.productId,
        slug: l.slug,
        name: l.name,
        brand: l.brand,
        image: l.image,
        unitPrice: Money.fromCents(l.unitPriceCents),
        quantity: l.quantity,
        color: l.color,
      }))
      return Cart.rehydrate(props)
    } catch {
      return Cart.empty()
    }
  }

  save(cart: Cart): void {
    if (typeof window === 'undefined') return
    const lines: PersistedLine[] = cart.snapshot().map(i => ({
      productId: i.productId,
      slug: i.slug,
      name: i.name,
      brand: i.brand,
      image: i.image,
      unitPriceCents: i.unitPrice.cents,
      quantity: i.quantity,
      color: i.color,
    }))
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }
}
