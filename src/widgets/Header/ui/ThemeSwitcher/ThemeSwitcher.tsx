import { AppIcon, Button } from '@/shared/ui';
import CircleIcon from '@/shared/assets/icons/Circle.svg?react';
import { useTheme } from '@/shared/config';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme="ghost">
      <AppIcon Icon={CircleIcon} theme="background" filled size={24} />
    </Button>
  );
};
