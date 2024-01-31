import styles from "./input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  iconSrc?: string;
}

function getIcon(iconSrc: string) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={styles.prefix} src={iconSrc} alt={iconSrc}></img>;
}

export function Input({
  type,
  name,
  placeholder = "olivia@untitledui.com",
  labelText,
  value,
  iconSrc,
  onChange,
  ...props
}: InputProps) {
  const prefix = iconSrc && getIcon(iconSrc);

  return (
    <div className={styles.rowWrapper}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <div className={styles.inputWrapper}>
        {prefix}
        <input
          {...props}
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
