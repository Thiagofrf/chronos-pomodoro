import styles from './Menu.module.css';

import { MenuLink } from '../MenuLink/MenuLink';
import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  // MoonIcon,
  HouseIcon,
} from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menuContainer}>
      <MenuLink icon={<HouseIcon />} link='#' />
      <MenuLink icon={<HistoryIcon />} link='#' />
      <MenuLink icon={<SettingsIcon />} link='#' />
      <MenuLink icon={<SunIcon />} link='#' />
      {/* <MenuLink icon={<MoonIcon />} link='#' /> */}
    </nav>
  );
}
