import axios from 'axios'

export const strapiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
})
