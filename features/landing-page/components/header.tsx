import Link from "next/link";
import styles from "./header.module.scss";
import { Routes } from "@config/routes";

const navLinks = [
  { text: "home", href: Routes.home },
  { text: "products", href: Routes.products },
  { text: "documentation", href: Routes.documentation },
  { text: "pricing", href: Routes.pricing },
];
export function Header() {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-large.svg" alt="Prolog logo" />
      <nav>
        <ul className={styles.linkList}>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link className={styles.dashboardButton} href={Routes.projects}>
        Open Dashboard
      </Link>
    </header>
  );
}
