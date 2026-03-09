import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <>
      <h1 className={styles.title}>{t('hello')}</h1>
      <h2 className={styles.title}>Home</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
      <button onClick={changeLanguage}>{i18n.language}</button>
    </>
  );
};

export default HomePage;
