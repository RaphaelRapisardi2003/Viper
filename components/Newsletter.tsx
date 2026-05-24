'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section className="newsletter">
      <div className="newsletter-inner fade-up">
        <span className="nl-tag">Clube Viper</span>
        <h2>Seja a primeira a saber</h2>
        <p className="nl-sub">
          Receba lançamentos, editoriais exclusivos e ofertas antes de todo mundo. Sem spam, apenas o melhor da moda.
        </p>
        <form className="nl-form" onSubmit={e => { e.preventDefault(); setEmail('') }}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            aria-label="E-mail para newsletter"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Assinar</button>
        </form>
        <p className="nl-disclaimer">Sem spam. Cancele quando quiser.</p>
      </div>
    </section>
  )
}
