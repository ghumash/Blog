import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const DeveloperPanelPage = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {t('Developer panel')}
    </Page>
  )
}

export default DeveloperPanelPage
