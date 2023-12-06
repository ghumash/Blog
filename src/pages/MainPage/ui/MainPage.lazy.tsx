import { lazy } from 'react'

export const MainPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // TODO: remove setTimeout
  setTimeout(() => resolve(import('pages/MainPage/ui/MainPage')), 1500)
}))
