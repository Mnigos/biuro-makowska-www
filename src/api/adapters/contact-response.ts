import { Contact, ContactResponse } from '../types/contact'

export const adaptContactResponse = ({
  data: { attributes },
}: ContactResponse): Contact => ({
  ...attributes,
})
