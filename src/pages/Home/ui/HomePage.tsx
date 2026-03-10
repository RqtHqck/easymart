import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import EnFlagIcon from '@/shared/assets/icons/en_flag.svg?react';

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
      <Button size="md" theme="primary" onClick={toggleTheme}>
        Toggle theme
      </Button>
      <Button size="xs" theme="tertiary" onClick={changeLanguage}>
        <EnFlagIcon />
        {/*{i18n.language}*/}
      </Button>
    </>
  );
};

export default HomePage;
