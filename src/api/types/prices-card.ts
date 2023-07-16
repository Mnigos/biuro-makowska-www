import { BaseApiAttributes } from './base-api-attributes'
import { StrapiResponse } from './strapi-response'

export interface Cell {
  id: number
  data: string
}

export interface Row {
  id: number
  cells: Cell[]
}

export interface Table {
  id: number
  header: string
  rows: Row[]
}

export interface PricesCardRaw extends BaseApiAttributes {
  header: string
  tables: Table[]
}

export type PricesCardsResponse = StrapiResponse<PricesCardRaw, true>

export interface PricesCard extends BaseApiAttributes {
  header: string
  tables: {
    id: number
    header: string
    rows: Record<number, string>[]
  }[]
}
