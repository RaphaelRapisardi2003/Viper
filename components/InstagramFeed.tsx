import Image from 'next/image'
import Link from 'next/link'

const posts = [
  { img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80', likes: '2.4k' },
  { img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=80', likes: '1.8k' },
  { img: 'https://images.unsplash.com/photo-1603189343302-e603f7add05a?auto=format&fit=crop&w=500&q=80', likes: '3.1k' },
  { img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=500&q=80', likes: '2.7k' },
  { img: 'https://images.unsplash.com/photo-1562151270-c7d22ceb586a?auto=format&fit=crop&w=500&q=80', likes: '1.5k' },
  { img: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=500&q=80', likes: '2.2k' },
]

export default function InstagramFeed() {
  return (
    <section className="insta-section">
      <div className="insta-header fade-up">
        <p className="insta-handle">@vipermoda</p>
        <h2>Siga nossa inspiração</h2>
        <p className="insta-sub">Marque suas fotos com <strong>#ViperModa</strong> e apareça aqui</p>
      </div>
      <div className="insta-grid">
        {posts.map((p, i) => (
          <Link key={i} href="#" className="insta-item fade-up" style={{ transitionDelay: `${i * 0.05}s` }}>
            <Image src={p.img} alt="Instagram Viper" fill sizes="16vw" style={{ objectFit: 'cover' }} />
            <div className="insta-overlay">
              <span className="material-symbols-outlined">favorite</span> {p.likes}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
