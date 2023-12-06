import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <BugButton />
      <div>{t('Home')}</div>
    </div>
  )
}
export default MainPage
