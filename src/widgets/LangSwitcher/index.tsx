import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'am' ? 'en' : 'am')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      {t('Language')}
    </Button>
  )
}
