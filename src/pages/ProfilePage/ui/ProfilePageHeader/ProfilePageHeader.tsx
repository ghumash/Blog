import { index } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props

  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const readonly = useSelector(getProfileReadonly)

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
    <div className={index(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
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
  )
}
