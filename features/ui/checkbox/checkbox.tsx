import classNames from "classnames";
import styles from "./checkbox.module.scss";
import { useRef, useEffect } from "react";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

// type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

type CheckboxProps = {
  children: React.ReactNode;
  size?: CheckboxSize;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({
  children,
  size = CheckboxSize.sm,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      /* toggle values*/
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={classNames(styles[size], styles.checkboxWrapper)}>
      <input {...props} type="checkbox" ref={inputRef} />
      <span>{children}</span>
    </label>
  );
}
