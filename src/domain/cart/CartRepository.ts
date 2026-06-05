import { Cart } from './Cart'

/**
 * Port (driven/secondary) — persistência do carrinho.
 * Implementado por adapters (ex.: localStorage no browser).
 */
export interface CartRepository {
  load(): Cart
  save(cart: Cart): void
}
