import styles from "./select.module.scss";
import classNames from "classnames";
import { useState, useRef } from "react";

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

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  options: SelectOption[];
  icon?: React.ReactNode;
  handleChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
  labelText?: string;
  placeholder?: string;
  errorMessage?: string;
  hint?: string;
  disabled?: boolean;
};

export function Select({
  labelText,
  value,
  placeholder,
  disabled,
  handleChange,
  options,
  icon,
  errorMessage,
  className,
  hint,
}: SelectProps) {
  const [showList, setShowList] = useState(false);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const listStyles = {
    height: showList
      ? `${listRef.current?.getBoundingClientRect().height}px`
      : "0px",
  };

  const prefix = icon && <span className={styles.icon}>{icon}</span>;
  const hasError = Boolean(errorMessage);

  const suffix = showList ? (
    <span className={styles.icon}>{chevronUp}</span>
  ) : (
    <span className={styles.icon}>{chevronDown}</span>
  );

  function selectOption(option: SelectOption) {
    handleChange(option);
  }

  function isSelected(option: string) {
    return value?.value === option;
  }

  function validationHint() {
    if (errorMessage || hint) {
      const style = errorMessage ? styles.errorMessage : styles.hint;
      const text = errorMessage ? errorMessage : hint;
      return <span className={style}>{text}</span>;
    }
  }

  return (
    <div className={classNames(styles.parentContainer, className)}>
      <label className={styles.label} htmlFor={labelText}>
        {labelText}
        <div
          className={classNames(
            styles.selectionContainer,
            showList && !hasError && styles.openFocus,
            showList && hasError && styles.openErrorFocus,
            hasError && styles.hasError,
            disabled && styles.disabled,
          )}
          tabIndex={0}
          onBlur={() => setShowList(false)}
          onClick={() => {
            if (!disabled) {
              setShowList((prev) => !prev);
            }
          }}
        >
          {prefix}
          <span
            className={classNames(value ? styles.value : styles.placeholder)}
          >
            {value?.label || placeholder}
          </span>
          {suffix}
        </div>
      </label>
      {!showList && validationHint()}
      <div
        className={styles.listContainer}
        ref={listContainerRef}
        style={listStyles}
      >
        <ul className={styles.items} ref={listRef}>
          {options.map((option) => {
            const selectedOption = isSelected(option.label);
            return (
              <li
                onClick={() => {
                  selectOption(option);
                  setShowList(false);
                }}
                key={option.value}
                className={classNames(
                  styles.listItem,
                  selectedOption ? styles.selected : "",
                )}
              >
                <span>{option.label}</span>
                {selectedOption && (
                  <span className={styles.icon}>
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
                  </span>
                )}
              </li>
            );
          })}

          <li
            className={styles.listItem}
            onClick={() => {
              handleChange(undefined);
              setShowList(false);
            }}
          >
            Clear Option
          </li>
        </ul>
      </div>
    </div>
  );
}
