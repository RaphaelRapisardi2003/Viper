'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCart } from '@/src/presentation/cart/CartProvider'

export default function Header() {
  const { cart } = useCart()
  const headerRef  = useRef<HTMLElement>(null)
  const searchRef  = useRef<HTMLDivElement>(null)
  const inputRef   = useRef<HTMLInputElement>(null)

  // Sticky scroll
  useEffect(() => {
    const onScroll = () => headerRef.current?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Search toggle
  const openSearch = () => {
    searchRef.current?.classList.add('open')
    setTimeout(() => inputRef.current?.focus(), 150)
  }
  const closeSearch = () => searchRef.current?.classList.remove('open')

  // Mobile drawer
  const openDrawer = () => {
    document.getElementById('navDrawer')?.classList.add('open')
    document.getElementById('navOverlay')?.classList.add('visible')
    document.body.style.overflow = 'hidden'
  }

  // Close search on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header id="siteHeader" ref={headerRef}>
      <div className="header-inner">
        {/* Left */}
        <div className="header-left">
          <button className="hamburger" onClick={openDrawer} aria-label="Menu">
            <span /><span /><span />
          </button>
          <button className="icon-btn search-trigger" onClick={openSearch} aria-label="Pesquisar">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="site-logo">
          VIPER
          <span className="logo-sub">MILANO</span>
        </Link>

        {/* Right */}
        <div className="header-right">
          <Link href="#" className="icon-btn" aria-label="Lista de desejos">
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link href="#" className="icon-btn" aria-label="Minha conta">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link href="/carrinho" className="icon-btn cart-icon" aria-label="Sacola">
            <span className="material-symbols-outlined">shopping_bag</span>
            {cart.totalItems > 0 && <span className="cart-badge">{cart.totalItems}</span>}
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="search-bar-wrap" ref={searchRef}>
        <div className="search-inner">
          <span className="material-symbols-outlined">search</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Pesquisar peças, marcas, tendências..."
            className="search-input"
            aria-label="Pesquisar"
          />
          <button className="search-close" onClick={closeSearch} aria-label="Fechar">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="main-nav">
        <ul className="nav-list">
          <li><Link href="#novidades" className="nav-link nav-new">Novidades</Link></li>
          <li className="nav-item-drop">
            <Link href="#" className="nav-link">Roupas</Link>
            <div className="mega-menu">
              <div className="mega-col">
                <h6>Por Tipo</h6>
                {['Vestidos','Blusas & Tops','Calças & Jeans','Saias','Macacões','Casacos & Jaquetas','Conjuntos'].map(i => <Link href="#" key={i}>{i}</Link>)}
              </div>
              <div className="mega-col">
                <h6>Por Ocasião</h6>
                {['Casual','Festa & Eventos','Trabalho','Praia & Verão','Esporte & Lazer'].map(i => <Link href="#" key={i}>{i}</Link>)}
              </div>
              <div className="mega-col">
                <h6>Destaques</h6>
                <Link href="#" className="mega-highlight">Tendências SS26</Link>
                <Link href="#" className="mega-highlight">Mais Vendidos</Link>
                <Link href="#" className="mega-highlight">Coleção Linho</Link>
                <Link href="#sale" className="mega-highlight sale-link">Sale até 50%</Link>
              </div>
            </div>
          </li>
          <li><Link href="#vestidos" className="nav-link">Vestidos</Link></li>
          <li><Link href="#bolsas" className="nav-link">Bolsas</Link></li>
          <li><Link href="#sapatos" className="nav-link">Sapatos</Link></li>
          <li><Link href="#" className="nav-link">Joias</Link></li>
          <li><Link href="#" className="nav-link">Acessórios</Link></li>
          <li><Link href="#perfumes" className="nav-link">Perfumes</Link></li>
          <li><Link href="#marcas" className="nav-link">Marcas</Link></li>
          <li><Link href="#sale" className="nav-link nav-sale">Sale</Link></li>
        </ul>
      </nav>
    </header>
  )
}
