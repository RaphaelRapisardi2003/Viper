import type { ProductRepository } from '@/src/domain/catalog/ProductRepository'
import { ProductPresenter } from './ProductPresenter'
import type { ProductView } from './dto'

/**
 * Use Cases do catálogo (application services).
 * Cada classe orquestra o domínio para um objetivo específico e devolve DTOs.
 */

export class ListProductsByCollection {
  constructor(private readonly repo: ProductRepository) {}

  async execute(collectionSlug: string): Promise<ProductView[]> {
    const products = await this.repo.findByCollection(collectionSlug)
    return ProductPresenter.toViewList(products)
  }
}

export class GetProductBySlug {
  constructor(private readonly repo: ProductRepository) {}

  async execute(slug: string): Promise<ProductView | null> {
    const product = await this.repo.findBySlug(slug)
    return product ? ProductPresenter.toView(product) : null
  }
}

export class SearchProducts {
  constructor(private readonly repo: ProductRepository) {}

  async execute(query: string): Promise<ProductView[]> {
    const products = await this.repo.search(query)
    return ProductPresenter.toViewList(products)
  }
}

export class GetRelatedProducts {
  constructor(private readonly repo: ProductRepository) {}

  async execute(slug: string, limit = 4): Promise<ProductView[]> {
    const product = await this.repo.findBySlug(slug)
    if (!product) return []
    const sameCategory = await this.repo.findByCollection(product.category)
    return ProductPresenter.toViewList(
      sameCategory.filter(p => p.id !== product.id).slice(0, limit),
    )
  }
}
