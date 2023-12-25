import { index } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
    <div className={index(cls.NotFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  )
})
