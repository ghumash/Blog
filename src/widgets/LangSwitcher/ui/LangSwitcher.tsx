import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({
  className,
  short,
}: LangSwitcherProps) => {
  const {
    t,
    i18n,
  } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'am' : 'en')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={toggle}
    >
      {t(short ? 'Short language' : 'Language')}
    </Button>
  )
})
