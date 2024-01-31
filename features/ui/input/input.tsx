import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

export function Input({
  type,
  name,
  placeholder = "olivia@untitledui.com",
  labelText,
  value,
  onChange,
  ...props
}: InputProps) {
  console.log({ props });

  return (
    <div className={styles.rowWrapper}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          name={name}
          value={value}
          className={styles.input}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
