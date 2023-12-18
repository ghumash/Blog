import { lazy } from 'react'

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // TODO: remove setTimeout for production
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))
