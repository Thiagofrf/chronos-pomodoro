import styles from './Input.module.css';

type InputProps = {
  labelText?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, placeholder, labelText }: InputProps) {
  return (
    <label className={styles.formLabel} htmlFor='taskInput'>
      {labelText}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.formInput}
      />
    </label>
  );
}
