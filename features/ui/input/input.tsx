import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export function Input({
  type,
  name,
  labelText,
  defaultValue,
  onChange,
}: InputProps) {
  return (
    <div className={styles.rowWrapper}>
      <label htmlFor={name} className={styles.label}>
        {labelText || name}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          id={name}
          name={name}
          className={styles.input}
          defaultValue={defaultValue || ""}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}
