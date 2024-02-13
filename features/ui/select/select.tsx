import classNames from "classnames";
import styles from "./select.module.scss";
import React, { useState } from "react";

const chevronUp = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 12.5L10 7.5L5 12.5"
      stroke="#667085"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const chevronDown = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#667085"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export interface SelectOption {
  name: string;
  id: number;
}

type SelectProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText?: string;
  icon?: React.ReactNode;
  options: Array<SelectOption>;
  errorMessage?: string;
  hint?: string;
};

export function Select({
  name,
  placeholder,
  labelText,
  options,
  icon,
  errorMessage,
  hint,
  ...props
}: SelectProps) {
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectOption | null>(null);

  const prefix = icon && <span className={styles.icon}>{icon}</span>;
  const hasError = Boolean(errorMessage);

  function handleSelection(selection: SelectOption) {
    setSelectedValue(selection);
    setShowList(false);
  }

  function isSelected(id: number) {
    return id === Number(selectedValue?.id);
  }

  function validationHint() {
    if (errorMessage || hint) {
      const style = errorMessage ? styles.errorMessage : styles.hint;
      const text = errorMessage ? errorMessage : hint;
      return <span className={style}>{text}</span>;
    }
  }

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectionContainer}>
        <label htmlFor={name} className={styles.label}>
          {labelText}
        </label>
        <span
          className={classNames(
            styles.inputContainer,
            hasError && styles.hasError,
          )}
        >
          {prefix}
          <input
            {...props}
            id={name}
            className={classNames(styles.input)}
            defaultValue={selectedValue?.name}
            placeholder={placeholder}
            readOnly
          />
          <button>
            {showList ? (
              <span className={styles.icon}>{chevronUp}</span>
            ) : (
              <span className={styles.icon}>{chevronDown}</span>
            )}
          </button>
        </span>
      </div>
      {!showList && validationHint()}
      <div className={styles.listContainer}>
        <ul className={styles.items}>
          {options.map((option, idx) => {
            const { name, id } = option;
            return (
              <li
                key={idx}
                className={styles.listItem}
                onClick={() => {
                  handleSelection(option);
                }}
              >
                {prefix}
                <input type="text" name={name} id={name} hidden />
                <label htmlFor={name}>{name}</label>
                {isSelected(id) && (
                  <svg
                    className={styles.icon}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="Icon"
                        d="M10 3L4.5 8.5L2 6"
                        stroke="#7F56D9"
                        strokeWidth="1.6666"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
