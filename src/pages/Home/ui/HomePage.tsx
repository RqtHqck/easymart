import styles from './HomePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Header } from '@/widgets/Header/ui/Header.tsx';
import { Footer } from '@/widgets/Footer/ui/Footer.tsx';
import { Link } from 'react-router-dom';
import { routePaths } from '@/shared/config';

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
