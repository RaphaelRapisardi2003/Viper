import Link from 'next/link'
import Image from 'next/image'

const largeTiles = [
  { href: '#vestidos', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80', label: 'Vestidos' },
  { href: '#bolsas',   img: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=800&q=80', label: 'Bolsas' },
]
const stackTiles = [
  { href: '#', img: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=800&q=80', label: 'Casacos' },
  { href: '#', img: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=800&q=80', label: 'Calças & Saias' },
]
const chips = [
  { href: '#', icon: 'diamond',   label: 'Joias' },
  { href: '#sapatos', icon: 'steps',    label: 'Sapatos' },
  { href: '#', icon: 'checkroom', label: 'Acessórios' },
  { href: '#', icon: 'spa',       label: 'Beleza' },
]

export default function ShopCategory() {
  return (
    <section className="shop-category">
      <div className="container">
        <div className="section-title"><h2>Comprar por Categoria</h2></div>
        <div className="cat-grid">
          {/* Large left */}
          <Link href={largeTiles[0].href} className="cat-tile cat-large fade-up">
            <Image src={largeTiles[0].img} alt={largeTiles[0].label} fill sizes="33vw" style={{ objectFit: 'cover' }} />
            <div className="cat-info"><h3>{largeTiles[0].label}</h3><span>Ver coleção</span></div>
          </Link>
          {/* Stack center */}
          <div className="cat-stack">
            {stackTiles.map((t, i) => (
              <Link key={t.label} href={t.href} className="cat-tile fade-up" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <Image src={t.img} alt={t.label} fill sizes="33vw" style={{ objectFit: 'cover' }} />
                <div className="cat-info"><h3>{t.label}</h3><span>Ver coleção</span></div>
              </Link>
            ))}
          </div>
          {/* Large right */}
          <Link href={largeTiles[1].href} className="cat-tile cat-large fade-up" style={{ transitionDelay: '0.15s' }}>
            <Image src={largeTiles[1].img} alt={largeTiles[1].label} fill sizes="33vw" style={{ objectFit: 'cover' }} />
            <div className="cat-info"><h3>{largeTiles[1].label}</h3><span>Ver coleção</span></div>
          </Link>
        </div>
        <div className="cat-row">
          {chips.map((c, i) => (
            <Link key={c.label} href={c.href} className="cat-chip fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="material-symbols-outlined">{c.icon}</span>{c.label}
            </Link>
          ))}
          <Link href="#sale" className="cat-chip cat-chip-sale fade-up" style={{ transitionDelay: '0.28s' }}>
            <span className="material-symbols-outlined">sell</span>Sale — 50% off
          </Link>
        </div>
      </div>
    </section>
  )
}
