import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormErrorMessage } from './form-error-message'

import { cardPassThrough } from '~/common/card-pass-through'
import { postSendEmail } from '~/api/fetchers'

interface Inputs {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
  })

  const registerName = register('name', {
    required: {
      value: true,
      message: 'Wprowadź imię i nazwisko',
    },
  })
  const registerEmail = register('email', {
    required: true,
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Wprowadź poprawny adres e-mail',
    },
  })
  const registerMessage = register('message', {
    required: {
      value: true,
      message: 'Wprowadź wiadomość',
    },
  })

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleOnSubmit: SubmitHandler<Inputs> = data => postSendEmail(data)

  return (
    <Card
      title="Formularz kontaktowy"
      className="w-full md:w-5"
      pt={{
        ...cardPassThrough,
        body: {
          className: 'flex flex-column gap-3',
        },
      }}
    >
      <form
        className="flex flex-column gap-2 p-component"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-column gap-2">
          <InputText placeholder="Imię i nazwisko" {...registerName} />

          <FormErrorMessage message={errors.name?.message} />
        </div>

        <div className="flex flex-column gap-2">
          <InputText placeholder="Adres e-mail" {...registerEmail} />

          <FormErrorMessage message={errors.email?.message} />
        </div>

        <div className="flex flex-column gap-2">
          <InputTextarea
            placeholder="Treść wiadomości"
            className="w-full"
            rows={5}
            {...registerMessage}
          />

          <FormErrorMessage message={errors.message?.message} />
        </div>

        <Button label="Wyślij" className="mt-4" />
      </form>
    </Card>
  )
}
