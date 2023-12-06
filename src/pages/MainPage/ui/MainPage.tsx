import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div>{t('Home')}</div>
    </div>
  )
}
export default MainPage
