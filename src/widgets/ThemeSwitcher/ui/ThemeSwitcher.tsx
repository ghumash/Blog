import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { memo } from 'react'
import { Icon } from 'shared/ui/Icon'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const {
    theme,
    toggleTheme,
  } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {/* TODO: change icons to shared icon component */}
      {theme === Theme.DARK ? <Icon Svg={DarkIcon} /> : <Icon Svg={LightIcon} />}
    </Button>
  )
})
