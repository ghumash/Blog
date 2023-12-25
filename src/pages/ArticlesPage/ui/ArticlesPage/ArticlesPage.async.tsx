import { lazy } from 'react'

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // TODO: remove setTimeout for production
  setTimeout(() => resolve(import('./ArticlesPage')), 1500)
}))
