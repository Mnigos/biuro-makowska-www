import Image from 'next/image'
import { Fieldset } from 'primereact/fieldset'

import {
  biuroMakowskaOfficeInside,
  biuroMakowskaOfficeOutside,
} from '~/assets/images'
import { ContactCard } from '~/components/contact'
import { ContactForm } from '~/components/contact/form'

export default function Kontakt() {
  return (
    <>
      <header>
        <h1 className="p-component text-5xl font-bold">Kontakt</h1>
      </header>

      <section className="flex flex-column md:flex-row gap-4 md:gap-8">
        <div className="w-12">
          <Image
            src={biuroMakowskaOfficeOutside}
            alt="Biuro Makowska's office outside"
            className="w-full h-auto border-round-lg shadow-6"
          />
        </div>

        <div className="flex flex-column justify-content-between gap-4">
          <Fieldset
            legend={<h3 className="text-2xl font-bold m-0">Siedziba</h3>}
          >
            <p className="m-0 py-2">Biuro Rachunkowe Joanna Makowska</p>
            <p className="m-0 py-2">ul. Leśna 4</p>
            <p className="m-0 py-2">86-005 Łochowo</p>
          </Fieldset>

          <Image
            src={biuroMakowskaOfficeInside}
            alt="Biuro Makowska's office inside"
            className="w-full h-auto border-round-lg shadow-6"
          />
        </div>
      </section>

      <section className="flex flex-column md:flex-row justify-content-between align-items-stretch md:align-items-center md:flex-row gap-4 md:gap-8">
        <ContactCard />

        <ContactForm />
      </section>
    </>
  )
}
