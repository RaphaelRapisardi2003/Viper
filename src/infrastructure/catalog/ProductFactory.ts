import { Product } from '@/src/domain/catalog/Product'
import { Money } from '@/src/domain/shared/Money'
import type { ProductRecord } from './catalog.seed'

/**
 * Factory — reconstrói a Entity de domínio a partir do registro cru de dados.
 * Concentra a tradução record → modelo rico (incl. Value Objects).
 */
export class ProductFactory {
  static fromRecord(record: ProductRecord): Product {
    return Product.create({
      id: record.id,
      slug: record.slug,
      brand: record.brand,
      name: record.name,
      price: Money.fromReais(record.priceReais),
      oldPrice: record.oldPriceReais ? Money.fromReais(record.oldPriceReais) : undefined,
      image: record.image,
      category: record.category,
      tags: record.tags,
      badge: record.badge,
      badgeType: record.badgeType,
      colors: record.colors,
      description: record.description,
    })
  }

  static fromRecords(records: ProductRecord[]): Product[] {
    return records.map(ProductFactory.fromRecord)
  }
}
