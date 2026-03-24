// import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import { LoginForm } from '@/features/login';

import { routePaths } from '@/shared/config';
import { Button } from '@/shared/ui';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  // const { t } = useTranslation('login');

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Sign in</h1>
        <LoginForm />

        <div className={styles.divider}>
          <div className={styles.line} />
          <span className={styles.dividerText}>or</span>
          <div className={styles.line} />
        </div>
        <div className={styles.authServices}>
          <Button size={'md'} fullWidth>
            Auth by google
          </Button>
        </div>
        <span className={styles.footer}>
          No account yet?{' '}
          <Link className={styles.link} to={routePaths.register}>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
