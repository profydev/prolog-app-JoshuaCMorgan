import styles from "./select.module.scss";
import React from "react";
export interface SelectOption {
  name: string;
  id: number;
}
type SelectProps = {
  labelText?: string;
  name: string;
  options: Array<SelectOption>;
  disabled?: boolean;
};
export function Select({ name, labelText, options }: SelectProps) {
  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectionContainer}>
        <label htmlFor={name} className={styles.label}>
          {labelText}
        </label>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} id={name} />
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.items}>
          {options.map((option, idx) => {
            const { name } = option;
            return (
              <li key={idx} className={styles.listItem}>
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
