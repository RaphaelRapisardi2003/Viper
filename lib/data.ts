/**
 * Fachada de leitura para a camada de apresentação legada (home).
 * Não contém mais dados: deriva tudo do domínio via Factory + Presenter,
 * mantendo a página inicial funcionando sobre a nova arquitetura hexagonal.
 */
import { ProductFactory } from '@/src/infrastructure/catalog/ProductFactory'
import { CATALOG_SEED } from '@/src/infrastructure/catalog/catalog.seed'
import { ProductPresenter } from '@/src/application/catalog/ProductPresenter'
import type { ProductView } from '@/src/application/catalog/dto'

export type Product = ProductView

const entities = ProductFactory.fromRecords(CATALOG_SEED)

function collection(slug: string): ProductView[] {
  return ProductPresenter.toViewList(entities.filter(e => e.belongsTo(slug)))
}

export const novidadesProducts    = collection('novidades')
export const maisVendidosProducts = collection('mais-vendidos')
export const sapatosProducts      = collection('sapatos')
export const bolsasProducts       = collection('bolsas')
export const saleProducts         = collection('sale')
export const casualProducts       = collection('casual')
export const festaProducts        = collection('festa')
export const trabalhoProducts     = collection('trabalho')
export const praiaProducts        = collection('praia')
