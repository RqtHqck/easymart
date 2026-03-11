import { supportedLngs } from '@/shared/config/i18n/i18n.ts';
import type { FunctionComponent, SVGProps } from 'react';
import EnFlagIcon from '@/shared/assets/icons/En.svg?react';
import RuFlagIcon from '@/shared/assets/icons/Ru.svg?react';

export type SupportedLngsType = (typeof supportedLngs)[number];

type LngsIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const lngsIconList: LngsIconListType = {
  ru: RuFlagIcon,
  en: EnFlagIcon,
} as const;
