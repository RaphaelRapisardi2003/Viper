import { Product } from '@/src/domain/catalog/Product'
import type { ProductView } from './dto'

/**
 * Mapper (Data Mapper pattern) — converte a Entity de domínio em DTO de leitura.
 * Mantém a apresentação isolada do modelo rico.
 */
export class ProductPresenter {
  static toView(product: Product): ProductView {
    return {
      id: product.id,
      slug: product.slug,
      brand: product.brand,
      name: product.name,
      price: product.price.format(),
      oldPrice: product.oldPrice?.format(),
      unitPriceCents: product.price.cents,
      category: product.category,
      badge: product.badge,
      badgeType: product.badgeType,
      image: product.image,
      colors: product.colors,
      description: product.description,
      discountPercent: product.discountPercent(),
    }
  }

  static toViewList(products: Product[]): ProductView[] {
    return products.map(ProductPresenter.toView)
  }
}
