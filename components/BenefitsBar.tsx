const benefits = [
  { icon: 'local_shipping', title: 'Frete Grátis',      desc: 'Acima de R$299' },
  { icon: 'autorenew',      title: 'Troca em 30 dias',  desc: 'Sem complicações' },
  { icon: 'lock',           title: 'Compra Segura',     desc: 'SSL 256-bit' },
  { icon: 'support_agent',  title: 'Atendimento 24h',   desc: 'Chat, e-mail e WhatsApp' },
]

export default function BenefitsBar() {
  return (
    <section className="benefits-bar">
      {benefits.map((b, i) => (
        <div key={b.title} className="benefit-item fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
          <span className="material-symbols-outlined">{b.icon}</span>
          <div><h5>{b.title}</h5><p>{b.desc}</p></div>
        </div>
      ))}
    </section>
  )
}
