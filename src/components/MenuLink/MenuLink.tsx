import styles from './MenuLink.module.css';
import { Link } from 'react-router';

type MenuLinkProps = {
  icon: React.ReactNode;
  link: string;
} & React.ComponentProps<'a'>;

export function MenuLink({ icon, link, ...props }: MenuLinkProps) {
  return (
    <Link className={styles.menuLink} to={link} {...props}>
      {icon}
    </Link>
  );
}
