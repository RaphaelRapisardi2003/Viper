import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="about-section" id="quemsomos">
      <div className="about-image">
        <Image src="/quemsomos1.jpg" alt="Viper Milano — Quem Somos" fill sizes="50vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="about-content fade-up">
        <span className="about-eyebrow">Milano, Italia — Desde 2019</span>
        <h2>Uma visão.<br /><em>Uma grife.</em></h2>
        <div className="about-divider" />
        <p>
          A Viper nasceu em Milão a partir de uma visão singular: criar peças de alfaiataria que carregam
          alma. Nossa trajetória começou em pequenos ateliês no Brera, onde cada costura era tratada como
          uma obra de arte e cada tecido escolhido como uma declaração de intenção.
        </p>
        <p>
          Hoje, levamos ao Brasil o melhor da tradição italiana com uma identidade completamente
          contemporânea — peças que falam por você antes mesmo de você abrir a boca.
        </p>
        <Link href="#" className="btn-about">Conheça a nossa história</Link>
      </div>
    </section>
  )
}
