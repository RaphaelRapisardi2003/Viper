'use client'
import Link from 'next/link'

function close() {
  document.getElementById('navDrawer')?.classList.remove('open')
  document.getElementById('navOverlay')?.classList.remove('visible')
  document.body.style.overflow = ''
}

export default function MobileDrawer() {
  return (
    <>
      <div className="nav-overlay" id="navOverlay" onClick={close} />
      <aside className="nav-drawer" id="navDrawer">
        <div className="drawer-header">
          <span>Menu</span>
          <button className="drawer-close" onClick={close} aria-label="Fechar">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="drawer-list">
          {[
            { href: '#novidades', label: 'Novidades', cls: 'drawer-new' },
            { href: '#', label: 'Vestidos' },
            { href: '#', label: 'Roupas' },
            { href: '#bolsas', label: 'Bolsas' },
            { href: '#sapatos', label: 'Sapatos' },
            { href: '#', label: 'Joias' },
            { href: '#', label: 'Acessórios' },
            { href: '#marcas', label: 'Marcas' },
          ].map(({ href, label, cls }) => (
            <li key={label}>
              <Link href={href} className={`drawer-link ${cls ?? ''}`} onClick={close}>{label}</Link>
            </li>
          ))}
          <li>
            <Link href="#sale" className="drawer-link drawer-sale" onClick={close}>Sale — 50% off</Link>
          </li>
        </ul>
        <div className="drawer-footer">
          <Link href="#"><span className="material-symbols-outlined">person</span> Minha Conta</Link>
          <Link href="#"><span className="material-symbols-outlined">favorite</span> Lista de Desejos</Link>
        </div>
      </aside>
    </>
  )
}
