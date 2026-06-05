import { InMemoryProductRepository } from './catalog/InMemoryProductRepository'
import { LocalStorageCartRepository } from './cart/LocalStorageCartRepository'
import {
  ListProductsByCollection,
  GetProductBySlug,
  SearchProducts,
  GetRelatedProducts,
} from '@/src/application/catalog/useCases'
import {
  GetCart,
  AddItemToCart,
  UpdateCartItemQuantity,
  RemoveCartItem,
  ClearCart,
} from '@/src/application/cart/useCases'

/**
 * Composition Root (DI container — Singleton).
 * Único lugar que conhece as implementações concretas dos ports e injeta-as
 * nos use cases. Domínio, aplicação e UI dependem só das abstrações.
 */
class Container {
  // Adapters (driven ports)
  private readonly productRepository = new InMemoryProductRepository()
  private readonly cartRepository = new LocalStorageCartRepository()

  // Catalog use cases
  readonly listProductsByCollection = new ListProductsByCollection(this.productRepository)
  readonly getProductBySlug = new GetProductBySlug(this.productRepository)
  readonly searchProducts = new SearchProducts(this.productRepository)
  readonly getRelatedProducts = new GetRelatedProducts(this.productRepository)

  // Cart use cases
  readonly getCart = new GetCart(this.cartRepository)
  readonly addItemToCart = new AddItemToCart(this.cartRepository)
  readonly updateCartItemQuantity = new UpdateCartItemQuantity(this.cartRepository)
  readonly removeCartItem = new RemoveCartItem(this.cartRepository)
  readonly clearCart = new ClearCart(this.cartRepository)
}

export const container = new Container()
