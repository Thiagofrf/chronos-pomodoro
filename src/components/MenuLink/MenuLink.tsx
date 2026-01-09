import styles from './MenuLink.module.css';

type MenuLinkProps = {
  icon: React.ReactNode;
  link: string;
};

export function MenuLink({ icon, link }: MenuLinkProps) {
  return (
    <a className={styles.menuLink} href={link}>
      {icon}
    </a>
  );
}
