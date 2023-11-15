import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";
import { ButtonIcon } from "@features/ui";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick} unstyled={true}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ButtonIcon
          src={iconSrc}
          alt={`${text} icon`}
          className={isCollapsed ? styles.iconCollapse : styles.icon}
          width={24}
          height={24}
        />
        {!isCollapsed && text}{" "}
        {/* <img
          className={isCollapsed ? styles.iconCollapse : styles.icon}
          src={iconSrc}
          alt={`${text} icon`}
        />{" "} */}
      </Button>
    </li>
  );
}
