import styles from './Input.module.css';

type InputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, labelText, ...props }: InputProps) {
  return (
    <label className={styles.formLabel} htmlFor={id}>
      {labelText}
      <input id={id} className={styles.formInput} {...props} />
    </label>
  );
}
