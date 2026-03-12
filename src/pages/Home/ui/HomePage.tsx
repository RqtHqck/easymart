import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routePaths } from '@/shared/config';
import { Button } from '@/shared/ui';

import styles from './HomePage.module.scss';

import { Footer, Header } from '@/widgets';


export const HomePage = () => {
  const [error, setError] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleErrorButtonClick = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error('Something went wrong!');
    }
  });

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>{t('hello')}</h1>
        <Link to={routePaths.login}>Login page</Link>
        <Button onClick={handleErrorButtonClick}>Click</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
