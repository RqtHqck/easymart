import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  const { t } = useTranslation('login');
  return (
    <>
      <h1>Login</h1>
      <h2>
        <Link to={'/'}>Home Page</Link>
      </h2>
      <h3>{t('login')}</h3>
    </>
  );
};

export default LoginPage;
