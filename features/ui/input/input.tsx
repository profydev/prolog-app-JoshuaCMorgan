import styles from "./input.module.scss";
import classNames from "classnames";
import React, { forwardRef } from "react";
import { InputProps } from "./types";

function getIcon(iconSrc: string) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={styles.prefix} src={iconSrc} alt={iconSrc}></img>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { labelText, errorMessage, hasError, hint, iconSrc, name, ...props },
  ref,
) {
  const prefix = iconSrc && getIcon(iconSrc);
  /* designs say error icon and error message are independent (i.e., you can have error icon without error message*/
  const suffix = hasError && getIcon("/icons/alert-circle.svg");
  const hasSuffix = Boolean(suffix);

  function validationHint() {
    if (errorMessage || hint) {
      const style = errorMessage ? styles.errorMessage : styles.hint;
      const text = errorMessage ? errorMessage : hint;
      return <span className={style}>{text}</span>;
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
        <input {...props} id={name} ref={ref} className={styles.input} />
        {suffix}
      </div>
      {validationHint()}
    </div>
  );
});
