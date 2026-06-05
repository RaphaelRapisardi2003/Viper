import { Money } from '../shared/Money'
import { CartItem, CartItemProps } from './CartItem'

/**
 * Aggregate Root — Cart.
 * Garante as invariantes do carrinho: ele é o único ponto de mutação das linhas.
 */
export class Cart {
  private constructor(private items: CartItem[]) {}

  static empty(): Cart {
    return new Cart([])
  }

  static rehydrate(items: CartItemProps[]): Cart {
    return new Cart(items.map(CartItem.create))
  }

  addItem(item: CartItem): void {
    const existing = this.items.find(i => i.lineKey === item.lineKey)
    if (existing) {
      existing.increaseBy(item.quantity)
      return
    }
    this.items.push(item)
  }

  removeLine(lineKey: string): void {
    this.items = this.items.filter(i => i.lineKey !== lineKey)
  }

  updateQuantity(lineKey: string, quantity: number): void {
    if (quantity < 1) {
      this.removeLine(lineKey)
      return
    }
    this.items.find(i => i.lineKey === lineKey)?.setQuantity(quantity)
  }

  clear(): void {
    this.items = []
  }

  get lines(): readonly CartItem[] {
    return this.items
  }

  get totalItems(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0)
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  subtotal(): Money {
    return this.items.reduce((acc, i) => acc.add(i.subtotal()), Money.zero())
  }

  snapshot(): CartItemProps[] {
    return this.items.map(i => i.snapshot())
  }
}
