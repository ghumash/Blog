import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          to="/"
          theme={AppLinkTheme.INVERTED}
        >
          {t('Home')}
        </AppLink>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <AppLink to="about" theme={AppLinkTheme.INVERTED}>
          {t('About us')}
        </AppLink>
      </div>
    </div>
  )
}
