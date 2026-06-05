'use client'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { container } from '@/src/infrastructure/container'
import type { CartView, AddToCartInput } from '@/src/application/cart/dto'

interface CartContextValue {
  cart: CartView
  addItem: (input: AddToCartInput) => void
  updateQuantity: (lineKey: string, quantity: number) => void
  removeItem: (lineKey: string) => void
  clear: () => void
}

const EMPTY: CartView = { lines: [], totalItems: 0, subtotal: 'R$ 0', subtotalCents: 0, isEmpty: true }

const CartContext = createContext<CartContextValue | null>(null)

/**
 * Driving adapter (primary port) — expõe os use cases de carrinho ao React.
 * A UI nunca toca repositório nem domínio diretamente: fala só com os use cases.
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartView>(EMPTY)

  // Reidrata do localStorage somente no cliente (evita mismatch de hidratação).
  useEffect(() => {
    setCart(container.getCart.execute())
  }, [])

  const addItem = useCallback((input: AddToCartInput) => {
    setCart(container.addItemToCart.execute(input))
  }, [])

  const updateQuantity = useCallback((lineKey: string, quantity: number) => {
    setCart(container.updateCartItemQuantity.execute(lineKey, quantity))
  }, [])

  const removeItem = useCallback((lineKey: string) => {
    setCart(container.removeCartItem.execute(lineKey))
  }, [])

  const clear = useCallback(() => {
    setCart(container.clearCart.execute())
  }, [])

  return (
    <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart deve ser usado dentro de <CartProvider>.')
  return ctx
}
