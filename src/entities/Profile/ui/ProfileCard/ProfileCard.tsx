import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('First name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Last name')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
