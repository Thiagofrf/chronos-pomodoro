import styles from './DefaultButton.module.css';

type DefaultButtonProps = {
  status?: 'start' | 'stop';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  status = 'start',
  children,
  ...props
}: DefaultButtonProps) {
  return (
    <button
      className={`${styles.defaultButton} ${
        status === 'start' ? styles.startButton : styles.stopButton
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
