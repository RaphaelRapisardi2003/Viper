import Image from 'next/image'
import Link from 'next/link'

export default function EditorialHero() {
  return (
    <section className="editorial-hero fade-up" id="editorial">
      <div className="editorial-hero-img">
        <Image
          src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?auto=format&fit=crop&w=1200&q=80"
          alt="Lookbook Viper SS26"
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="editorial-hero-text">
        <p className="editorial-tag">Lookbook &nbsp;/&nbsp; SS26</p>
        <h2>Poder. Graça.<br /><em>Autenticidade.</em></h2>
        <p className="editorial-body">
          A nova coleção Viper celebra a mulher que não pede licença para ocupar espaço. Peças que falam
          por você antes mesmo de você abrir a boca. Cada detalhe foi pensado para a mulher contemporânea
          e segura.
        </p>
        <Link href="#" className="btn btn-editorial">Ver Lookbook Completo</Link>
      </div>
    </section>
  )
}
