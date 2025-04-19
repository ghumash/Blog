import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const MainPage = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <Page data-testid="MainPage">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <p>login as admin</p>
          <p>login: admin</p>
          <p>password: 123</p>
        </div>
        <div>
          <p>login as user</p>
          <p>login: user</p>
          <p>password: 123</p>
        </div>
      </div>
      {/*{t('Главная страница')}*/}
    </Page>
  )
}

export default MainPage
