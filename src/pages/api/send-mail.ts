import { NextApiRequest, NextApiResponse } from 'next'
import { SendMailOptions, createTransport } from 'nodemailer'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log(request.body)

  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
    secure: true,
  })

  const emailTemplate: SendMailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
    to: process.env.NEXT_PUBLIC_MAILER_RECIPIENT,
    replyTo: request.body.email,
    subject: `Nowa wiadomość od klienta: ${request.body.name}`,
    text: `Nowa wiadomość z formularza kontaktowego od ${request.body.name} (${request.body.email}):\n\n${request.body.message}`,
    html: `
      <p>
        Nowa wiadomość z formularza kontaktowego od
        <strong>${request.body.name}</strong>
        (<a href="mailto:${request.body.email}">${request.body.email}</a>):
      </p>

      <div>${request.body.message}</div>
    `,
  }

  transporter.sendMail(emailTemplate, (error, info) => {
    if (error) console.log(error)
    else console.log(info)
  })

  response.status(200).json({ status: 'OK' })
}
