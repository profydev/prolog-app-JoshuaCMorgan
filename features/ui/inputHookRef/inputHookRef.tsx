import styles from "./inputHookRef.module.scss";
import classNames from "classnames";
import { forwardRef } from "react";
import { FormFieldProps } from "./types";

export const InputHookRef = forwardRef<HTMLInputElement, FormFieldProps>(
  function InputHookRef(
    { label, errorMessage, hasError, hint, iconSrc, ...props },
    ref,
  ) {
    function getIcon(iconSrc: string) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img className={styles.prefix} src={iconSrc} alt={iconSrc}></img>;
    }

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
        <label className={styles.label}>{label}</label>
        <div
          className={classNames(
            styles.inputWrapper,
            hasSuffix && styles.hasSuffix,
          )}
        >
          {prefix}
          <input {...props} ref={ref} className={styles.input} />
          {suffix}
        </div>
        {validationHint()}
      </div>
    );
  },
);
