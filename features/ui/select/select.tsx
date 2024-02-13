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
  disabled?: boolean;
};

export function Select({
  name,
  placeholder,
  labelText,
  options,
  icon,
  ...props
}: SelectProps) {
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SelectOption | null>(null);

  const prefix = icon && <span className={styles.icon}>{icon}</span>;

  function handleSelection(selection: SelectOption) {
    setSelectedValue(selection);
    setShowList(false);
  }

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectionContainer}>
        <label htmlFor={name} className={styles.label}>
          {labelText}
        </label>
        <span className={styles.inputContainer}>
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
      <div className={styles.listContainer}>
        <ul className={styles.items}>
          {options.map((option, idx) => {
            const { name } = option;
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
