import { Money } from '@/src/domain/shared/Money'
import { CartItem } from '@/src/domain/cart/CartItem'
import type { CartRepository } from '@/src/domain/cart/CartRepository'
import { CartPresenter } from './CartPresenter'
import type { AddToCartInput, CartView } from './dto'

/**
 * Use Cases do carrinho. Cada um carrega o agregado, aplica a regra e persiste.
 * Devolvem sempre a CartView atualizada para a UI re-renderizar.
 */

export class GetCart {
  constructor(private readonly repo: CartRepository) {}
  execute(): CartView {
    return CartPresenter.toView(this.repo.load())
  }
}

export class AddItemToCart {
  constructor(private readonly repo: CartRepository) {}
  execute(input: AddToCartInput): CartView {
    const cart = this.repo.load()
    cart.addItem(
      CartItem.create({
        productId: input.productId,
        slug: input.slug,
        name: input.name,
        brand: input.brand,
        image: input.image,
        unitPrice: Money.fromCents(input.unitPriceCents),
        quantity: input.quantity ?? 1,
        color: input.color,
      }),
    )
    this.repo.save(cart)
    return CartPresenter.toView(cart)
  }
}

export class UpdateCartItemQuantity {
  constructor(private readonly repo: CartRepository) {}
  execute(lineKey: string, quantity: number): CartView {
    const cart = this.repo.load()
    cart.updateQuantity(lineKey, quantity)
    this.repo.save(cart)
    return CartPresenter.toView(cart)
  }
}

export class RemoveCartItem {
  constructor(private readonly repo: CartRepository) {}
  execute(lineKey: string): CartView {
    const cart = this.repo.load()
    cart.removeLine(lineKey)
    this.repo.save(cart)
    return CartPresenter.toView(cart)
  }
}

export class ClearCart {
  constructor(private readonly repo: CartRepository) {}
  execute(): CartView {
    const cart = this.repo.load()
    cart.clear()
    this.repo.save(cart)
    return CartPresenter.toView(cart)
  }
}
