import {lazy} from "react";

export const MainPageLazy = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // todo: remove setTimeout
  setTimeout(() => resolve(import('./')), 1500)
}));