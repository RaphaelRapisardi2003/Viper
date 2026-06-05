'use client'
import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursorDot')
    const ring = document.getElementById('cursorRing')
    if (!dot || !ring) return

    let mx = -100, my = -100, rx = -100, ry = -100

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const tick = () => {
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    tick()

    const hoverEls = document.querySelectorAll('a, button, .cat-tile, .lookbook-item, .product-card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'))
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'))
    })

    const onLeave = () => { mx = -200; my = -200 }
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  id="cursorDot"  />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
