import styles from './HomePage.module.scss';
import { useTheme } from '@/shared/config';
import { useEffect } from 'react';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
};

export default HomePage;
