import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import ScrollReveal from '@/components/ScrollReveal'
import { container } from '@/src/infrastructure/container'
import { findCategory, CATEGORIES } from '@/src/domain/catalog/Category'

export function generateStaticParams() {
  return CATEGORIES.map(c => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = findCategory(categoria)
  return { title: cat ? `${cat.label} — Viper Milano` : 'Coleção — Viper Milano' }
}

export default async function CollectionPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const category = findCategory(categoria)
  if (!category) notFound()

  const products = await container.listProductsByCollection.execute(categoria)
  const delays = [0, 0.06, 0.12, 0.18]

  return (
    <main>
      <ScrollReveal />
      <section className="collection-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Início</Link>
            <span className="material-symbols-outlined">chevron_right</span>
            <span>{category.label}</span>
          </nav>
          <h1 className="collection-title">{category.label}</h1>
          <p className="collection-count">{products.length} peças</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          {products.length === 0 ? (
            <p className="empty-state">Nenhuma peça nesta coleção por enquanto.</p>
          ) : (
            <div className="products-grid">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={delays[i % delays.length]} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
