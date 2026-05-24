export default function AnnouncementBar() {
  const items = [
    <>Nova Coleção — Primavera Verão 2026 &nbsp;·&nbsp;</>,
    <>Entrega gratuita acima de R$299 &nbsp;·&nbsp;</>,
    <>Use <strong>VIPER10</strong> — 10% exclusivo &nbsp;·&nbsp;</>,
    <>Novidades toda sexta-feira &nbsp;·&nbsp;</>,
    <>Parcele em 10× sem juros &nbsp;·&nbsp;</>,
    <>Feito em Milão. Pensado para você. &nbsp;·&nbsp;</>,
  ]

  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
