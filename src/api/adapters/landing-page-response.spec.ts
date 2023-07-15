import { describe, test } from 'vitest'

import { LandingPageResponse } from '../types'

import { adaptLandingPageResponse } from './landing-page-response'

describe('adaptLandingPageResponse', () => {
  test('should adapt response', () => {
    const response: LandingPageResponse = {
      data: {
        id: 1,
        attributes: {
          data: {
            id: 2,
            header: 'Welcome to my page',
            content: 'This is my page',
          },
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
          publishedAt: '2021-01-01T00:00:00.000Z',
        },
      },
      meta: {},
    }

    const adapted = {
      id: 2,
      header: 'Welcome to my page',
      content: 'This is my page',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      publishedAt: '2021-01-01T00:00:00.000Z',
    }

    expect(adaptLandingPageResponse(response)).toEqual(adapted)
  })
})
