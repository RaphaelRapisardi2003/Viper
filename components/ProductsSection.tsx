import Link from 'next/link'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/data'

interface Props {
  title: string
  id?: string
  products: Product[]
  columns?: 4 | 5
  altBg?: boolean
  isSale?: boolean
  collection?: string
}

export default function ProductsSection({ title, id, products, columns = 4, altBg, isSale, collection }: Props) {
  const gridClass = columns === 5 ? 'products-grid products-grid-5' : 'products-grid'
  const delays = [0, 0.06, 0.12, 0.18, 0.24, 0.30]
  const seeAllHref = collection ? `/loja/${collection}` : '#'

  return (
    <section className={`products-section${altBg ? ' alt-bg' : ''}${isSale ? ' sale-section' : ''}`} id={id}>
      <div className="container">
        <div className="section-title">
          <h2 className={isSale ? 'sale-title' : ''}>{title}</h2>
          <Link href={seeAllHref} className={`link-all${isSale ? ' link-all-sale' : ''}`}>
            Ver tudo <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className={gridClass}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={delays[i] ?? 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
