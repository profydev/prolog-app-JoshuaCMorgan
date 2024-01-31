import styles from "./input.module.scss";
import classNames from "classnames";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
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
  errorMessage,
  hasError,
  hint,
  onChange,
  ...props
}: InputProps) {
  const prefix = iconSrc && getIcon(iconSrc);
  const suffix = hasError && getIcon("/icons/alert-circle.svg");
  const hasSuffix = Boolean(suffix);

  function validationHint() {
    if (errorMessage || hint) {
      const style = errorMessage ? styles.errorMessage : styles.hint;
      const text = errorMessage ? errorMessage : hint;
      return <div className={style}>{text}</div>;
    }
  }

  return (
    <div className={styles.rowWrapper}>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <div
        className={classNames(
          styles.inputWrapper,
          hasSuffix && styles.hasSuffix,
        )}
      >
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
        {suffix}
      </div>
      {validationHint()}
    </div>
  );
}
