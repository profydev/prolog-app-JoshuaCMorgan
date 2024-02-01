import styles from "./inputHook.module.scss";
import classNames from "classnames";
import { FormFieldProps } from "./types";

export const InputHook = ({
  label,
  name,
  register,
  validation,

  hasError,
  error,
  type,
  hint,
  iconSrc,
  placeholder,
}: FormFieldProps) => {
  function getIcon(iconSrc: string) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={styles.prefix} src={iconSrc} alt={iconSrc}></img>;
  }

  const prefix = iconSrc && getIcon(iconSrc);
  const suffix = hasError && getIcon("/icons/alert-circle.svg");
  const hasSuffix = Boolean(suffix);

  function validationHint() {
    if (error || hint) {
      const style = error ? styles.errorMessage : styles.hint;
      const text = error ? error.message : hint;
      return <div className={style}>{text}</div>;
    }
  }

  return (
    <div className={styles.rowWrapper}>
      <label className={styles.label}>{label}</label>
      <div
        className={classNames(
          styles.inputWrapper,
          hasSuffix && styles.hasSuffix,
        )}
      >
        {prefix}
        <input
          type={type}
          {...register(name, validation)}
          className={styles.input}
          placeholder={placeholder}
        />
        {suffix}
      </div>
      {validationHint()}
    </div>
  );
};
