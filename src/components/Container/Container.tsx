type ContainerProps = {
  children: React.ReactNode;
};

import styles from './Container.module.css';

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
