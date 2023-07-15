import { adaptContactResponse } from '../adapters'
import { strapiClient } from '../strapi-client'
import { ContactResponse } from '../types'

export function getContact() {
  return strapiClient
    .get<ContactResponse>('/contact')
    .then(({ data }) => adaptContactResponse(data))
}
