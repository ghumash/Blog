import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation'
import { ComponentRender } from 'shared/config/tests/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('with only first param', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
