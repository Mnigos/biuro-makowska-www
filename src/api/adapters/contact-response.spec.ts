import { describe, test } from 'vitest'

import { Contact, ContactResponse } from '../types'

import { adaptContactResponse } from './contact-response'

describe('adaptContactResponse', () => {
  test('should adapt response', () => {
    const response: ContactResponse = {
      data: {
        id: 1,
        attributes: {
          facebookLink: 'https://facebook.com/test',
          email: 'example@text.com',
          phone: '+48 123 456 789',
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
          publishedAt: '2021-01-01T00:00:00.000Z',
        },
      },
      meta: {},
    }

    const adapted: Contact = {
      facebookLink: 'https://facebook.com/test',
      email: 'example@text.com',
      phone: '+48 123 456 789',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      publishedAt: '2021-01-01T00:00:00.000Z',
    }

    expect(adaptContactResponse(response)).toEqual(adapted)
  })
})
