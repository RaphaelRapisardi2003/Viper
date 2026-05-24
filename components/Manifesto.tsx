import Link from 'next/link'

export default function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="manifesto-inner fade-up">
        <span className="manifesto-eyebrow">Viper — Milano, Italia</span>
        <h2 className="manifesto-heading">
          Uma grife que<br /><em>não pede licença.</em>
        </h2>
        <span className="manifesto-line" />
        <p className="manifesto-body">
          Fundada em Milão com a convicção de que a moda verdadeira não segue tendências — ela as
          transcende. Cada peça Viper é uma declaração silenciosa: sobre quem você é, onde esteve
          e onde vai chegar. Criamos para a mulher que já sabe o que quer — e veste isso com intenção.
        </p>
        <Link href="#quemsomos" className="manifesto-cta">
          Nossa história <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}
