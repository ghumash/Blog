import { classNames } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
            >
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button
                className={cls.cancelBtn}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancel}
              >
                {t('Cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
              >
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
