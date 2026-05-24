import Image from 'next/image'
import Link from 'next/link'

export default function LookbookGrid() {
  return (
    <section className="lookbook-section" id="lookbook">
      <div className="container">
        <div className="section-title">
          <h2>Lookbook — SS26</h2>
          <Link href="#" className="link-all">
            Ver editorial completo <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
      <div className="lookbook-grid">
        <div className="lookbook-item lk-a fade-up">
          <Image src="/model1.jpg" alt="Viper Lookbook SS26" fill sizes="40vw" style={{ objectFit: 'cover' }} />
          <div className="lookbook-caption">
            <span>01 — Milano</span>
            <p>L&apos;essenza di Viper</p>
          </div>
        </div>
        <div className="lookbook-item lk-b fade-up" style={{ transitionDelay: '0.1s' }}>
          <Image src="/model2.jpg" alt="Viper Lookbook" fill sizes="30vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="lookbook-item lk-c fade-up" style={{ transitionDelay: '0.2s' }}>
          <Image src="/model3.jpg" alt="Viper Lookbook" fill sizes="30vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className="lookbook-item lk-d fade-up" style={{ transitionDelay: '0.15s' }}>
          <Image src="/model4.jpg" alt="Viper Lookbook SS26" fill sizes="60vw" style={{ objectFit: 'cover' }} />
          <div className="lookbook-caption">
            <span>02 — Coleção</span>
            <p>Tra eleganza e libertà</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="lookbook-cta-row fade-up">
          <Link href="#" className="btn">Ver Lookbook Completo</Link>
        </div>
      </div>
    </section>
  )
}
