import cls from "./MainPage.module.scss"
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation()
  return (
    <div className={cls.root}>
      <div>{t('Home')}</div>
    </div>
  )
}
export default MainPage
