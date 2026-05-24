const reviews = [
  { initial: 'A', name: 'Ana Beatriz S.', info: 'São Paulo, SP · Vestido Midi Cetim', text: '"Comprei o vestido de cetim e fiquei apaixonada. A qualidade do tecido é incrível e o caimento é perfeito. Com certeza vou comprar mais peças."', delay: 0 },
  { initial: 'C', name: 'Camila R.',       info: 'Rio de Janeiro, RJ · Blazer Alfaiataria', text: '"Atendimento impecável e entrega super rápida! O blazer chegou exatamente como na foto. Já indiquei para todas as minhas amigas."', delay: 0.1 },
  { initial: 'F', name: 'Fernanda M.',     info: 'Belo Horizonte, MG · Trench Coat', text: '"A Viper tem o melhor custo-benefício em moda premium do Brasil. As peças são de altíssima qualidade e os preços são justos. Minha loja favorita!"', delay: 0.2 },
]

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-title centered-title"><h2>O que nossas clientes dizem</h2></div>
        <div className="reviews-grid">
          {reviews.map(r => (
            <div key={r.name} className="review-card fade-up" style={{ transitionDelay: `${r.delay}s` }}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-info">{r.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
