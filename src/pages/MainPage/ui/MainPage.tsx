import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className={cls.root}>
      <div>{t('Home')}</div>
    </div>
  );
};
export default MainPage;
