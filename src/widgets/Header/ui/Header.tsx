import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LanguageSwitcher } from '@/widgets/Header/ui/LanguageSwitcher/LanguageSwitcher.tsx';
import { ThemeSwitcher } from '@/widgets/Header/ui/ThemeSwitcher/ThemeSwitcher.tsx';

import CartIcon from '@/shared/assets/icons/Cart.svg?react';
import LocationIcon from '@/shared/assets/icons/Location.svg?react';
import LogoIcon from '@/shared/assets/icons/Logo.svg?react';
import SearchIcon from '@/shared/assets/icons/Search.svg?react';
import UserIcon from '@/shared/assets/icons/User.svg?react';
import { routePaths } from '@/shared/config';
import { AppIcon, Button, Input } from '@/shared/ui';



import styles from './Header.module.scss';


export const Header = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleLoginCLick = () => {
    navigate(routePaths.login);
  };

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        {/* Logo */}
        <LogoIcon className={styles.logo} />
        {/* Location */}
        <Button theme="ghost">
          <AppIcon Icon={LocationIcon} />
          <span>10115 New York</span>
        </Button>
      </div>
      {/* Search */}
      <div className={styles.section}>
        <Input
          rounded
          placeholder={t('header.searchBy')}
          Icon={<AppIcon Icon={SearchIcon} theme="background" size={18} />}
        />
      </div>
      <div className={styles.section}>
        {/* Cart */}
        <Button theme="secondary">
          <AppIcon Icon={CartIcon} filled />
          <span>{t('header.cart')}</span>
        </Button>
        {/* Auth */}
        <Button theme="outline" onClick={handleLoginCLick}>
          <AppIcon Icon={UserIcon} />
          <span>{t('header.login')}</span>
        </Button>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
