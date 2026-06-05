'use client'
import { useState } from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { casualProducts, festaProducts, trabalhoProducts, praiaProducts } from '@/lib/data'

const tabs = [
  { id: 'casual',   label: 'Casual',        products: casualProducts },
  { id: 'festa',    label: 'Festa',          products: festaProducts },
  { id: 'trabalho', label: 'Trabalho',       products: trabalhoProducts },
  { id: 'praia',    label: 'Praia & Verão',  products: praiaProducts },
]

export default function StyleTabs() {
  const [active, setActive] = useState('casual')
  const delays = [0, 0.07, 0.14, 0.21]

  return (
    <section className="products-section" id="tendencias">
      <div className="container">
        <div className="section-title">
          <h2>Tendências por Estilo</h2>
          <Link href={`/loja/${active}`} className="link-all">Ver tudo <span className="material-symbols-outlined">arrow_forward</span></Link>
        </div>
        <div className="style-tabs">
          {tabs.map(t => (
            <button key={t.id} className={`style-tab ${active === t.id ? 'active' : ''}`} onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        {tabs.map(t => (
          <div key={t.id} className={`tab-panel ${active === t.id ? 'active' : ''}`}>
            <div className="products-grid">
              {t.products.map((p, i) => <ProductCard key={p.id} product={p} delay={delays[i]} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
