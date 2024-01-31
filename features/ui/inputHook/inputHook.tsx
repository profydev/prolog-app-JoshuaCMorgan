import styles from "./input.module.scss";
import classNames from "classnames";
import React from "react";
import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  name: string;
  email: string;
}

type InputProps = {
  label?: string;
  registerKey: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  type?: string;
  errorMessage?: string;
  hint?: string;
  iconSrc?: string;
  hasError?: boolean;
  placeholder?: string;
};

export const InputHook = ({
  label,
  register,
  errorMessage,
  hasError,
  type,
  registerKey,
  hint,
  iconSrc,
  placeholder,
}: InputProps) => {
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
          type={type}
          {...register(registerKey)}
          className={styles.input}
          placeholder={placeholder}
        />
        {suffix}
      </div>
      {validationHint()}
    </div>
  );
};
