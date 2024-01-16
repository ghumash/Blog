import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames'
import { RoutePath } from '@/shared/config/routeConfig'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import {
  getUserAuthData, isUserAdmin, isUserDeveloper, isUserManager, userActions,
} from '@/entities/User'

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isDeveloper = useSelector(isUserDeveloper)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      direction="bottom left"
      className={classNames('', {}, [className])}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Admin panel'),
          href: RoutePath.admin_panel,
        }] : []),
        ...(isDeveloper ? [{
          content: t('Developer panel'),
          href: RoutePath.developer_panel,
        }] : []),
        {
          content: t('Profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('Logout'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  )
})
