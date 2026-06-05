'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { ProductView } from '@/src/application/catalog/dto'
import { useCart } from '@/src/presentation/cart/CartProvider'

export default function AddToCartPanel({ product }: { product: ProductView }) {
  const { addItem } = useCart()
  const [color, setColor] = useState(product.colors?.[0]?.name)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      brand: product.brand,
      image: product.image,
      unitPriceCents: product.unitPriceCents,
      quantity,
      color,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <div className="pdp-buy">
      {product.colors && (
        <div className="pdp-colors">
          <span className="pdp-label">Cor: <strong>{color}</strong></span>
          <div className="pdp-color-dots">
            {product.colors.map(c => (
              <button
                key={c.name}
                className={`color-dot ${color === c.name ? 'selected' : ''}`}
                style={{ background: c.hex }}
                title={c.name}
                aria-label={c.name}
                onClick={() => setColor(c.name)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="pdp-qty">
        <span className="pdp-label">Quantidade</span>
        <div className="qty-stepper">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} aria-label="Diminuir">−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} aria-label="Aumentar">+</button>
        </div>
      </div>

      <button className="pdp-add-btn" onClick={handleAdd}>
        <span className="material-symbols-outlined">shopping_bag</span>
        {added ? 'Adicionado!' : 'Adicionar à Sacola'}
      </button>
      <Link href="/carrinho" className="pdp-cart-link">Ver sacola</Link>
    </div>
  )
}
