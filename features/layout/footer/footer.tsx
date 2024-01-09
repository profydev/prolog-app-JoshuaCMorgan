import styles from "./footer.module.scss";
import { FooterLink } from "./footer-link";

const footerItems = [
  { text: "Docs" },
  { text: "API" },
  { text: "Help" },
  { text: "Community" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.version}>Version: {process.env.appVersion}</p>
      {/* <p className={styles.version}>Version: 14.5.1</p> */}
      <nav>
        <ul data-cy={"nav-links"} className={styles.footerLinks}>
          {footerItems.map((item, index) => (
            <FooterLink key={index} {...item} />
          ))}
        </ul>
      </nav>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img
        className={styles.smallLogo}
        src={"/icons/logo-small.svg"}
        alt="logo"
      /> */}

      <div data-cy={"small-logo"} className={styles.smallLogo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/icons/logo-small.svg"} alt="logo" />
      </div>
    </footer>
  );
}
