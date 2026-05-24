'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  { bg: '/Banner.jpg', eyebrow: 'Viper Milano — Primavera Verão 2026', title: 'Nascida em Milão.', titleEm: 'Feita para você.', cta: 'Explorar a Coleção', href: '#novidades' },
  { bg: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80', eyebrow: 'Sale — até 50% off', title: 'Luxo ao seu', titleEm: 'alcance', cta: 'Ver Sale', href: '#sale' },
  { bg: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80', eyebrow: 'Lookbook SS26', title: 'A roupa que', titleEm: 'te precede', cta: 'Ver Lookbook', href: '#lookbook' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((n: number) => {
    setCurrent((n + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5500)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.bg}')` }}
        >
          <div className="hero-content">
            <p className="hero-eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}<br /><em>{slide.titleEm}</em></h1>
            <Link href={slide.href} className="btn btn-hero">{slide.cta}</Link>
          </div>
        </div>
      ))}

      <div className="hero-nav">
        <button className="hero-arrow" onClick={() => goTo(current - 1)} aria-label="Anterior">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="hero-arrow" onClick={() => goTo(current + 1)} aria-label="Próximo">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  )
}
