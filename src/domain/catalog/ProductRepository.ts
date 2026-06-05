import { Product } from './Product'

/**
 * Port (driven/secondary) — contrato de persistência do catálogo.
 * O domínio depende desta abstração; os adapters de infraestrutura a implementam.
 */
export interface ProductRepository {
  findAll(): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  findBySlug(slug: string): Promise<Product | null>
  findByCollection(collectionSlug: string): Promise<Product[]>
  search(query: string): Promise<Product[]>
}
