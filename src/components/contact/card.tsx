import { Card } from 'primereact/card'

import { ContactLink } from './link'

import { cardPassThrough } from '~/common/card-pass-through'
import { useContact } from '~/hooks/api'

export function ContactCard() {
  const { data } = useContact()

  if (!data) return null

  return (
    <Card
      title="Kontakt"
      pt={{
        ...cardPassThrough,
        content: {
          className: 'flex flex-column gap-3',
        },
      }}
    >
      <ContactLink href={data.facebookLink} icon="pi pi-facebook">
        Facebok
      </ContactLink>

      <ContactLink href={`tel:${data.phone}`} icon="pi pi-phone">
        {data.phone}
      </ContactLink>

      <ContactLink href={`mailto:${data.email}`} icon="pi pi-envelope">
        {data.email}
      </ContactLink>
    </Card>
  )
}
