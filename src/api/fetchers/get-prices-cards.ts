import { adaptPricesCardsResponse } from '../adapters'
import { strapiClient } from '../strapi-client'
import { PricesCardsResponse } from '../types'

export function getPricesCards() {
  return strapiClient
    .get<PricesCardsResponse>('/prices-cards', {
      params: {
        populate: 'tables.rows.cells',
      },
    })
    .then(({ data }) => adaptPricesCardsResponse(data))
}
