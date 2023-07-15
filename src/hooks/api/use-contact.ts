import { useQuery } from '@tanstack/react-query'

import { CONTACT } from '~/api/constants'
import { getContact } from '~/api/fetchers'

export const useContact = () => useQuery([CONTACT], getContact)
