import { Card } from 'primereact/card'

import { cardPassThrough } from '.'

import { useContact } from '~/hooks/api'

export function ContactCard() {
  const { data } = useContact()

  if (!data) return null

  return (
    <Card
      title="Contact"
      pt={{
        ...cardPassThrough,
        content: {
          className: 'flex flex-column gap-2',
        },
      }}
      className=""
    >
      <div className="flex gap-2 text-lg">
        <i className="pi pi-facebook text-primary" />
        <a
          href={data.facebookLink}
          target="_blank"
          className="text-white no-underline hover:text-primary transition-colors transition-duration-300"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>

      <div className="flex gap-2 text-lg">
        <i className="pi pi-phone text-primary" />
        <a
          href={`tel:${data.phone}`}
          target="_blank"
          className="text-white no-underline hover:text-primary transition-colors transition-duration-300"
          rel="noreferrer"
        >
          {data.phone}
        </a>
      </div>

      <div className="flex gap-2 text-lg">
        <i className="pi pi-envelope text-primary" />
        <a
          href={`mailto:${data.email}`}
          target="_blank"
          className="text-white no-underline hover:text-primary transition-colors transition-duration-300"
          rel="noreferrer"
        >
          {data.email}
        </a>
      </div>
    </Card>
  )
}
