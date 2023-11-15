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
  unstyled?: boolean;
  disabled?: boolean;
}

export function Button({
  size = ButtonSize.sm,
  color = ButtonColor.primary,
  disabled = false,
  unstyled = false,
  children,
  ...props
}: ButtonProps) {
  const classes = unstyled
    ? classNames(styles.button, props.className)
    : classNames(styles.button, styles[size], styles[color], props.className);

  return (
    <button {...props} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
