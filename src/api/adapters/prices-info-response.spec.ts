import { describe, test } from 'vitest'

import { PricesInfo, PricesInfoResponse } from '../types'

import { adaptPricesInfoResponse } from './prices-info-response'

describe('adaptPricesInfoResponse', () => {
  test('should adapt response', () => {
    const response: PricesInfoResponse = {
      data: {
        id: 1,
        attributes: {
          header: 'Welcome to my page',
          warning: 'This is my page',
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
          publishedAt: '2021-01-01T00:00:00.000Z',
        },
      },
      meta: {},
    }

    const adapted: PricesInfo = response.data.attributes

    expect(adaptPricesInfoResponse(response)).toEqual(adapted)
  })
})
