import { RouterLink } from '../RouterLink/RouterLink';
import styles from './MenuLink.module.css';

type MenuLinkProps = {
  icon: React.ReactNode;
  link: string;
} & React.ComponentProps<'a'>;

export function MenuLink({ icon, link, ...props }: MenuLinkProps) {
  return (
    <RouterLink className={styles.menuLink} href={link} {...props}>
      {icon}
    </RouterLink>
  );
}
