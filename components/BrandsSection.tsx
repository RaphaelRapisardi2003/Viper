const brands = ['TOTÊME', 'JACQUEMUS', 'COS', 'GANNI', 'A.P.C.', 'STAUD', 'RÉALISATION PAR']

export default function BrandsSection() {
  return (
    <section className="brands-section" id="marcas">
      <div className="container">
        <div className="section-title centered-title"><h2>Marcas em Destaque</h2></div>
        <div className="brands-scroll">
          {brands.map((b, i) => (
            <div key={b} className="brand-item fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
