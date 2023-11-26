import classNames from "classnames";
import styles from "./alert.module.scss";
import React from "react";
import { Button, ButtonIcon } from "@features/ui";

type AlertProps = {
  type: string;
  message?: string;
  action: () => void;
};

export function Alert({ type, message, action }: AlertProps) {
  return (
    <div
      data-cy={`alert-${type}`}
      className={classNames(styles.alert, styles[type])}
    >
      <ButtonIcon
        src="/icons/alert-circle.svg"
        alt={`${type} alert`}
      ></ButtonIcon>
      <div className={styles.alertMessage}>
        <span>{message}</span>
      </div>
      <div>
        <Button className={styles.alertButton} unstyled={true} onClick={action}>
          Try Again
          <ButtonIcon
            src="/icons/arrow-right.svg"
            alt="arrow-left"
          ></ButtonIcon>
        </Button>
      </div>
    </div>
  );
}
