import {lazy} from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // TODO: remove setTimeout
  setTimeout(() => resolve(import('pages/AboutPage/ui/AboutPage')), 1500)
}));