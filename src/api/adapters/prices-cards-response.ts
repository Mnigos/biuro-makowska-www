import { PricesCard, PricesCardsResponse } from '../types'

export const adaptPricesCardsResponse = ({
  data,
}: PricesCardsResponse): PricesCard[] => {
  return data.map(({ attributes: { tables, header, ...rest } }) => ({
    tables: tables.map(({ rows, ...rest }) => ({
      rows: rows.map(({ cells }) =>
        Object.fromEntries(cells.map(({ data }, index) => [index, data]))
      ),
      ...rest,
    })),
    header,
    ...rest,
  }))
}
