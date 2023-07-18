import { Card } from 'primereact/card'
import Image from 'next/image'

import { ContactLink } from './link'

import { cardPassThrough } from '~/common/card-pass-through'
import { useContact } from '~/hooks/api'
import { joannaMakowskaPhoto } from '~/assets/images'

export function ContactCard() {
  const { data } = useContact()

  if (!data) return null

  return (
    <Card
      title="Kontakt"
      header={
        <Image
          src={joannaMakowskaPhoto}
          alt="Joanna Makowska's photo"
          style={{
            height: '20%',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          }}
          className="h-5"
        />
      }
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
