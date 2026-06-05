/**
 * Value Object — Money.
 * Imutável, sem identidade própria, comparado por valor.
 * Armazena o montante em centavos para evitar erros de ponto flutuante.
 */
export class Money {
  private constructor(
    private readonly amountInCents: number,
    private readonly currency: string,
  ) {
    if (!Number.isInteger(amountInCents)) {
      throw new Error('Money deve ser criado a partir de um valor inteiro em centavos.')
    }
    if (amountInCents < 0) {
      throw new Error('Money não pode ser negativo.')
    }
  }

  static fromCents(cents: number, currency = 'BRL'): Money {
    return new Money(Math.round(cents), currency)
  }

  static fromReais(reais: number, currency = 'BRL'): Money {
    return new Money(Math.round(reais * 100), currency)
  }

  static zero(currency = 'BRL'): Money {
    return new Money(0, currency)
  }

  get cents(): number {
    return this.amountInCents
  }

  add(other: Money): Money {
    this.assertSameCurrency(other)
    return new Money(this.amountInCents + other.amountInCents, this.currency)
  }

  multiply(factor: number): Money {
    return new Money(Math.round(this.amountInCents * factor), this.currency)
  }

  equals(other: Money): boolean {
    return this.amountInCents === other.amountInCents && this.currency === other.currency
  }

  /** Formata no padrão brasileiro: R$ 1.290 (sem centavos quando inteiros). */
  format(): string {
    const reais = this.amountInCents / 100
    const hasCents = this.amountInCents % 100 !== 0
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: hasCents ? 2 : 0,
      maximumFractionDigits: hasCents ? 2 : 0,
    }).format(reais)
  }

  private assertSameCurrency(other: Money): void {
    if (this.currency !== other.currency) {
      throw new Error(`Moedas incompatíveis: ${this.currency} vs ${other.currency}.`)
    }
  }
}
