import { lazy } from 'react'

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // TODO: remove setTimeout for production
  setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
