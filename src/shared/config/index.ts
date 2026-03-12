import i18n from './i18n/i18n.ts';
import type { SupportedLngsType } from './i18n/LngsIconList.ts';
import { lngsIconList } from './i18n/LngsIconList.ts';
import { routePaths, AppRoutes } from './router/routerPaths';
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from './theme/ThemeContext';
import { useTheme } from './theme/useTheme.ts';

export {
  routePaths,
  AppRoutes,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
  useTheme,
  i18n,
  type SupportedLngsType,
  lngsIconList,
};
