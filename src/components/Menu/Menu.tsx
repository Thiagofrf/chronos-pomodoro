import styles from './Menu.module.css';
import { useState, useEffect } from 'react';

import { MenuLink } from '../MenuLink/MenuLink';
import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
  HouseIcon,
} from 'lucide-react';

export function Menu() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  const nextThemeIcon = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  function handleThemeChange(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
        icon={nextThemeIcon[theme]}
        link='#'
        aria-label='Change theme'
        title='Change theme'
        onClick={handleThemeChange}
      />
    </nav>
  );
}
