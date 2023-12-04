import { BaseApiAttributes } from './base-api-attributes'
import { StrapiResponse } from './strapi-response'

export interface Contact extends BaseApiAttributes {
  facebookLink: string
  email: string
  phone: string
  siedziba_1: string
  siedziba_2: string
}

export type ContactResponse = StrapiResponse<Contact>
