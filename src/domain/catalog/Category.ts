/**
 * Value Object — Category.
 * Representa uma coleção navegável (por tipo de peça ou por ocasião).
 */
export class Category {
  private constructor(
    readonly slug: string,
    readonly label: string,
    readonly kind: 'tipo' | 'ocasiao' | 'curadoria',
  ) {}

  static of(slug: string, label: string, kind: 'tipo' | 'ocasiao' | 'curadoria'): Category {
    return new Category(slug, label, kind)
  }

  equals(other: Category): boolean {
    return this.slug === other.slug
  }
}

/** Catálogo fechado de coleções suportadas pela loja. */
export const CATEGORIES: Category[] = [
  Category.of('vestidos', 'Vestidos', 'tipo'),
  Category.of('roupas', 'Roupas', 'tipo'),
  Category.of('sapatos', 'Sapatos', 'tipo'),
  Category.of('bolsas', 'Bolsas', 'tipo'),
  Category.of('novidades', 'Novidades', 'curadoria'),
  Category.of('mais-vendidos', 'Mais Vendidos', 'curadoria'),
  Category.of('sale', 'Sale', 'curadoria'),
  Category.of('casual', 'Casual', 'ocasiao'),
  Category.of('festa', 'Festa & Eventos', 'ocasiao'),
  Category.of('trabalho', 'Trabalho', 'ocasiao'),
  Category.of('praia', 'Praia & Verão', 'ocasiao'),
]

export function findCategory(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug)
}
