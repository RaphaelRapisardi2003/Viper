import Image from 'next/image'
import Link from 'next/link'

export default function PerfumeSection() {
  return (
    <section className="perfume-section" id="perfumes">
      <div className="perfume-inner">
        <div className="perfume-image">
          <Image src="/perfume1.jpg" alt="Viper — Il Profumo" fill sizes="50vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
        <div className="perfume-content fade-up">
          <span className="perfume-eyebrow">Viper — Il Profumo</span>
          <h2>O cheiro<br /><em>que te define.</em></h2>
          <p>
            A primeira fragrância da Viper Milano. Uma composição criada em parceria com os melhores
            perfumistas de Grasse, na França — porque acreditamos que o estilo vai além da roupa.
            Começa na pele. Termina na memória de quem te encontra.
          </p>
          <div className="perfume-notes">
            {[
              { label: 'Nota de Topo',    note: 'Bergamota & Neroli Italiano' },
              { label: 'Nota de Coração', note: 'Rosa Damasco & Íris' },
              { label: 'Nota de Fundo',   note: 'Âmbar Branco & Sândalo' },
            ].map(n => (
              <div key={n.label} className="perfume-note">
                <span>{n.label}</span>
                <p>{n.note}</p>
              </div>
            ))}
          </div>
          <Link href="#" className="btn-perfume">Descobrir a fragrância</Link>
        </div>
      </div>
    </section>
  )
}
