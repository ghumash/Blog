import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'
import { isUserDeveloper } from 'entities/User/model/selectors/roleSelectors'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isDeveloper = useSelector(isUserDeveloper)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Blog')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('New article')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
            ...(isAdminPanelAvailable ? [{
              content: t('Admin panel'),
              href: RoutePath.admin_panel,
            }] : []),
            ...(isDeveloper ? [{
              content: t('Developer panel'),
              href: RoutePath.developer_panel,
            }] : []),
            {
              content: t('Logout'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Login')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  )
})
