import { Cart } from '@/src/domain/cart/Cart'
import type { CartView } from './dto'

/** Mapper — converte o agregado Cart em DTO de leitura para a UI. */
export class CartPresenter {
  static toView(cart: Cart): CartView {
    return {
      lines: cart.lines.map(line => ({
        lineKey: line.lineKey,
        productId: line.productId,
        slug: line.slug,
        name: line.name,
        brand: line.brand,
        image: line.image,
        color: line.color,
        unitPrice: line.unitPrice.format(),
        unitPriceCents: line.unitPrice.cents,
        quantity: line.quantity,
        subtotal: line.subtotal().format(),
      })),
      totalItems: cart.totalItems,
      subtotal: cart.subtotal().format(),
      subtotalCents: cart.subtotal().cents,
      isEmpty: cart.isEmpty(),
    }
  }
}
