import Link from "next/link";
import styles from "./header.module.scss";
import { Routes } from "@config/routes";
import { Button } from "@features/ui";
import { useState } from "react";
import classNames from "classnames";

const navLinks = [
  { text: "home", href: Routes.home },
  { text: "products", href: Routes.products },
  { text: "documentation", href: Routes.documentation },
  { text: "pricing", href: Routes.pricing },
];
export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-large.svg" alt="Prolog logo" />
      <div
        className={classNames(
          styles.menuOverlay,
          isMobileMenuOpen && styles.isMobileMenuOpen,
        )}
      ></div>
      <nav
        className={classNames(
          styles.nav,
          isMobileMenuOpen && styles.isMobileMenuOpen,
        )}
      >
        <ul className={styles.linkList}>
          {navLinks.map((link) => {
            return (
              <li key={link.text}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
        <Link className={styles.dashboardButton} href={Routes.projects}>
          Open Dashboard
        </Link>
      </nav>
      <Button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className={styles.menuButton}
        unstyled={true}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={
            isMobileMenuOpen
              ? "/icons/close-landing.svg"
              : "/icons/menu-landing.svg"
          }
          alt={isMobileMenuOpen ? "close menu" : "open menu"}
          className={styles.menuIcon}
        />
      </Button>
    </header>
  );
}
