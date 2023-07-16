import { describe, expect, test } from 'vitest'

import { PricesCard, PricesCardsResponse } from '../types'

import { adaptPricesCardsResponse } from './prices-cards-response'

describe('adaptPricesCardsResponse', () => {
  test('should adapt response', () => {
    const response: PricesCardsResponse = {
      data: [
        {
          id: 1,
          attributes: {
            header: 'Header 1',
            tables: [
              {
                id: 1,
                header: 'Table 1',
                rows: [
                  {
                    id: 1,
                    cells: [
                      {
                        id: 1,
                        data: 'Cell 1',
                      },
                      {
                        id: 2,
                        data: 'Cell 2',
                      },
                    ],
                  },
                ],
              },
            ],
            createdAt: '2021-01-01T00:00:00.000Z',
            updatedAt: '2021-01-01T00:00:00.000Z',
            publishedAt: '2021-01-01T00:00:00.000Z',
          },
        },
      ],
      meta: {},
    }

    const adapted: PricesCard[] = [
      {
        header: 'Header 1',
        tables: [
          {
            id: 1,
            header: 'Table 1',
            rows: [
              {
                0: 'Cell 1',
                1: 'Cell 2',
              },
            ],
          },
        ],
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
        publishedAt: '2021-01-01T00:00:00.000Z',
      },
    ]

    expect(adaptPricesCardsResponse(response)).toEqual(adapted)
  })
})
