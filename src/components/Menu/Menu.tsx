import styles from './Menu.module.css';
import { useState } from 'react';

import { MenuLink } from '../MenuLink/MenuLink';
import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  HouseIcon,
} from 'lucide-react';

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menuContainer}>
      <MenuLink icon={<HouseIcon />} link='#' aria-label='Home' title='Home' />
      <MenuLink
        icon={<HistoryIcon />}
        link='#'
        aria-label='History'
        title='History'
      />
      <MenuLink
        icon={<SettingsIcon />}
        link='#'
        aria-label='Settings'
        title='Settings'
      />
      <MenuLink
        icon={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        link='#'
        aria-label='Change theme'
        title='Change theme'
        onClick={handleThemeChange}
      />
    </nav>
  );
}
