import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface componentRenderOptions {
  route?: string
}

export const ComponentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = RoutePath.main } = options
  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
}
