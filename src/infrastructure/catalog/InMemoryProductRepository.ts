import { Product } from '@/src/domain/catalog/Product'
import type { ProductRepository } from '@/src/domain/catalog/ProductRepository'
import { CATALOG_SEED } from './catalog.seed'
import { ProductFactory } from './ProductFactory'

/**
 * Adapter (driven) — implementação em memória do ProductRepository.
 * Pode ser trocada por uma versão HTTP/Prisma sem afetar domínio nem aplicação.
 */
export class InMemoryProductRepository implements ProductRepository {
  private readonly products: Product[] = ProductFactory.fromRecords(CATALOG_SEED)

  async findAll(): Promise<Product[]> {
    return [...this.products]
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find(p => p.id === id) ?? null
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.products.find(p => p.slug === slug) ?? null
  }

  async findByCollection(collectionSlug: string): Promise<Product[]> {
    return this.products.filter(p => p.belongsTo(collectionSlug))
  }

  async search(query: string): Promise<Product[]> {
    return this.products.filter(p => p.matches(query))
  }
}
