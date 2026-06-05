'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/src/presentation/cart/CartProvider'

export default function CartPage() {
  const { cart, updateQuantity, removeItem, clear } = useCart()

  return (
    <main className="cart-page">
      <div className="container">
        <h1 className="cart-title">Sua Sacola</h1>

        {cart.isEmpty ? (
          <div className="cart-empty">
            <span className="material-symbols-outlined">shopping_bag</span>
            <p>Sua sacola está vazia.</p>
            <Link href="/loja/novidades" className="cart-cta">Explorar novidades</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-lines">
              {cart.lines.map(line => (
                <article key={line.lineKey} className="cart-line">
                  <Link href={`/produto/${line.slug}`} className="cart-line-media">
                    <Image src={line.image} alt={line.name} fill sizes="120px" style={{ objectFit: 'cover' }} />
                  </Link>
                  <div className="cart-line-info">
                    <p className="cart-line-brand">{line.brand}</p>
                    <h3 className="cart-line-name">
                      <Link href={`/produto/${line.slug}`}>{line.name}</Link>
                    </h3>
                    {line.color && <p className="cart-line-color">Cor: {line.color}</p>}
                    <p className="cart-line-unit">{line.unitPrice}</p>
                  </div>
                  <div className="cart-line-actions">
                    <div className="qty-stepper">
                      <button onClick={() => updateQuantity(line.lineKey, line.quantity - 1)} aria-label="Diminuir">−</button>
                      <span>{line.quantity}</span>
                      <button onClick={() => updateQuantity(line.lineKey, line.quantity + 1)} aria-label="Aumentar">+</button>
                    </div>
                    <p className="cart-line-subtotal">{line.subtotal}</p>
                    <button className="cart-line-remove" onClick={() => removeItem(line.lineKey)} aria-label="Remover">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </article>
              ))}
              <button className="cart-clear" onClick={clear}>Esvaziar sacola</button>
            </div>

            <aside className="cart-summary">
              <h2>Resumo</h2>
              <div className="cart-summary-row">
                <span>Subtotal ({cart.totalItems} {cart.totalItems === 1 ? 'item' : 'itens'})</span>
                <strong>{cart.subtotal}</strong>
              </div>
              <div className="cart-summary-row muted">
                <span>Frete</span>
                <span>{cart.subtotalCents >= 49900 ? 'Grátis' : 'Calculado no checkout'}</span>
              </div>
              <div className="cart-summary-total">
                <span>Total</span>
                <strong>{cart.subtotal}</strong>
              </div>
              <button className="cart-checkout">Finalizar Compra</button>
              <Link href="/loja/novidades" className="cart-continue">Continuar comprando</Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
