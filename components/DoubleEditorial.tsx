import Image from 'next/image'
import Link from 'next/link'

export default function DoubleEditorial() {
  return (
    <section className="double-editorial">
      <Link href="#" className="double-tile fade-up">
        <Image src="https://images.unsplash.com/photo-1562151270-c7d22ceb586a?auto=format&fit=crop&w=1000&q=80" alt="Lookbook Viper" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        <div className="double-tile-text">
          <span>Lookbook SS26</span>
          <h3>Tendências que definem a estação</h3>
        </div>
      </Link>
      <Link href="#sale" className="double-tile fade-up" style={{ transitionDelay: '0.12s' }}>
        <Image src="https://images.unsplash.com/photo-1596993100471-c3905dafa78e?auto=format&fit=crop&w=1000&q=80" alt="Sale Viper" fill sizes="50vw" style={{ objectFit: 'cover' }} />
        <div className="double-tile-text">
          <span>Sale — até 50% off</span>
          <h3>As melhores peças com o melhor preço</h3>
        </div>
      </Link>
    </section>
  )
}
