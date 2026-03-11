// import styles from './HomePage.module.scss';
// import { useTheme } from '@/shared/config';
// import { useTranslation } from 'react-i18next';
// import { AppIcon, Button, Input } from '@/shared/ui';
// import EnFlagIcon from '@/shared/assets/icons/En.svg?react';
// import Search from '@/shared/assets/icons/Search.svg?react';
import { Header } from '@/widgets/Header/ui/Header.tsx';

const HomePage = () => {
  // const { toggleTheme } = useTheme();
  // const { t, i18n } = useTranslation();
  //
  // const changeLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  // };

  return (
    <>
      <Header />
      {/*  <h1 className={styles.title}>{t('hello')}</h1>*/}
      {/*  <h2 className={styles.title}>Home</h2>*/}
      {/*  <Input*/}
      {/*    // type="password"*/}
      {/*    placeholder="Search..."*/}
      {/*    rounded*/}
      {/*    Icon={<AppIcon Icon={Search} size={20} filled={true} />}*/}
      {/*  />*/}
      {/*  <Button size="md" theme="primary" onClick={toggleTheme}>*/}
      {/*    Toggle theme*/}
      {/*  </Button>*/}
      {/*  <Button size="xs" theme="tertiary" onClick={changeLanguage}>*/}
      {/*    <EnFlagIcon />*/}
      {/*    /!*{i18n.language}*!/*/}
      {/*  </Button>*/}
    </>
  );
};

export default HomePage;
