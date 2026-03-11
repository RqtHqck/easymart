import styles from './HomePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { routePaths } from '@/shared/config';
import { Footer, Header } from '@/widgets';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>{t('hello')}</h1>
        <Link to={routePaths.login}>Login page</Link>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
