import type { BadgeType, ColorOption } from '@/src/domain/catalog/Product'

/** DTO de leitura consumido pela camada de apresentação (React). */
export interface ProductView {
  id: string
  slug: string
  brand: string
  name: string
  price: string
  oldPrice?: string
  unitPriceCents: number
  category: string
  badge?: string
  badgeType?: BadgeType
  image: string
  colors?: ColorOption[]
  description?: string
  discountPercent: number
}
