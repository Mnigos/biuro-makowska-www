import axios from 'axios'

import { SendEmail } from '../types'

export function postSendEmail(mail: SendEmail) {
  return axios.post('/api/send-mail', mail)
}
