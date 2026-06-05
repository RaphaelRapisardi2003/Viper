import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import AddToCartPanel from '@/components/AddToCartPanel'
import ScrollReveal from '@/components/ScrollReveal'
import { container } from '@/src/infrastructure/container'
import { findCategory } from '@/src/domain/catalog/Category'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await container.getProductBySlug.execute(slug)
  return { title: product ? `${product.name} — Viper Milano` : 'Produto — Viper Milano' }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await container.getProductBySlug.execute(slug)
  if (!product) notFound()

  const related = await container.getRelatedProducts.execute(slug)
  const category = findCategory(product.category)

  return (
    <main>
      <ScrollReveal />
      <section className="pdp">
        <div className="container pdp-grid">
          <div className="pdp-media">
            <Image src={product.image} alt={product.name} fill sizes="(max-width:900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
            {product.badge && (
              <span className={`p-badge ${product.badgeType === 'sale' ? 'p-badge-sale' : ''}`}>{product.badge}</span>
            )}
          </div>

          <div className="pdp-info">
            <nav className="breadcrumb">
              <Link href="/">Início</Link>
              <span className="material-symbols-outlined">chevron_right</span>
              {category && <Link href={`/loja/${category.slug}`}>{category.label}</Link>}
            </nav>

            <p className="pdp-brand">{product.brand}</p>
            <h1 className="pdp-name">{product.name}</h1>

            <div className="pdp-price-row">
              <span className="pdp-price">{product.price}</span>
              {product.oldPrice && <span className="pdp-old">{product.oldPrice}</span>}
              {product.discountPercent > 0 && <span className="pdp-discount">−{product.discountPercent}%</span>}
            </div>

            <p className="pdp-desc">
              {product.description ??
                'Peça da curadoria Viper Milano, confeccionada com materiais selecionados e acabamento artesanal. Caimento pensado para acompanhar você do dia à noite.'}
            </p>

            <AddToCartPanel product={product} />

            <ul className="pdp-benefits">
              <li><span className="material-symbols-outlined">local_shipping</span> Frete grátis acima de R$ 499</li>
              <li><span className="material-symbols-outlined">autorenew</span> Troca fácil em até 30 dias</li>
              <li><span className="material-symbols-outlined">lock</span> Pagamento 100% seguro</li>
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="products-section alt-bg">
          <div className="container">
            <div className="section-title">
              <h2>Você também pode gostar</h2>
              {category && (
                <Link href={`/loja/${category.slug}`} className="link-all">
                  Ver tudo <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              )}
            </div>
            <div className="products-grid">
              {related.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.06} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
