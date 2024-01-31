import styles from "./inputRef.module.scss";
import classNames from "classnames";
import { forwardRef, useRef, useImperativeHandle } from "react";

type InputProps = {
  label?: string;
  type?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
  placeholder?: string;
};

export const InputHookRef = forwardRef<HTMLInputElement, InputProps>(
  function InputHookRef(
    { label, errorMessage, hasError, type, hint, iconSrc, placeholder },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current,
      [],
    );

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
          <input
            ref={inputRef}
            type={type}
            className={styles.input}
            placeholder={placeholder}
          />
          {suffix}
        </div>
        {validationHint()}
      </div>
    );
  },
);
