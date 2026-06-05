'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/data'
import { useCart } from '@/src/presentation/cart/CartProvider'

export default function ProductCard({ product, delay }: { product: Product; delay?: number }) {
  const [saved, setSaved] = useState(false)
  const { addItem } = useCart()
  const href = `/produto/${product.slug}`

  const handleAdd = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      image: product.image,
      unitPriceCents: product.unitPriceCents,
      color: product.colors?.[0]?.name,
    })
  }

  return (
    <article className="product-card fade-up" style={delay ? { transitionDelay: `${delay}s` } : {}}>
      <div className="product-media">
        <Link href={href}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
        </Link>
        <div className="product-actions">
          <button className="quick-add-btn" onClick={handleAdd}>
            <span className="material-symbols-outlined">shopping_bag</span>Adicionar à Sacola
          </button>
        </div>
        <button className={`fav-btn ${saved ? 'saved' : ''}`} onClick={() => setSaved(!saved)}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
        {product.badge && (
          <span className={`p-badge ${product.badgeType === 'sale' ? 'p-badge-sale' : ''}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="product-meta">
        <div className="product-top-row">
          <p className="p-brand">{product.brand}</p>
          {product.oldPrice ? (
            <div className="price-group">
              <p className="p-price">{product.price}</p>
              <p className="p-price-old">{product.oldPrice}</p>
            </div>
          ) : (
            <p className="p-price">{product.price}</p>
          )}
        </div>
        <h3 className="p-name"><Link href={href}>{product.name}</Link></h3>
        {product.colors && (
          <div className="p-colors">
            {product.colors.map(c => (
              <span key={c.name} className="color-dot" style={{ background: c.hex }} title={c.name} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
