export interface CartLineView {
  lineKey: string
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  color?: string
  unitPrice: string
  unitPriceCents: number
  quantity: number
  subtotal: string
}

export interface CartView {
  lines: CartLineView[]
  totalItems: number
  subtotal: string
  subtotalCents: number
  isEmpty: boolean
}

export interface AddToCartInput {
  productId: string
  slug: string
  name: string
  brand: string
  image: string
  unitPriceCents: number
  quantity?: number
  color?: string
}
