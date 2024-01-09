import Link from "next/link";
import React from "react";
import styles from "./footer.module.scss";

type FooterLinkProps = {
  text: string;
};

export function FooterLink({ text }: FooterLinkProps) {
  return (
    <li>
      <Link className={styles.link} href="#">
        {text}
      </Link>
    </li>
  );
}
