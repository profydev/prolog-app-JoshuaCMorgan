import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  error = "error",
  warning = "warning",
  success = "success",
  empty = "empty",
  emptyGray = "emptyGray",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
}

export function Button({
  size = ButtonSize.sm,
  color = ButtonColor.primary,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  console.log({ props });

  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        styles[size],
        styles[color],
        props.className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
