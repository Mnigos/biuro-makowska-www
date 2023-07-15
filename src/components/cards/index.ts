import { CardPassThroughOptions } from 'primereact/card'

export * from './about-company'
export * from './welcome-to-my-page'

export const cardPassThrough: CardPassThroughOptions = {
  title: {
    className: 'uppercase text-2xl font-medium m-0',
  },
  content: {
    className: 'py-1',
  },
  root: {
    className: 'border-round-lg ssurface-section',
  },
}
