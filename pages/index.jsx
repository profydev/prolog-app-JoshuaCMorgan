import { Routes } from "@config/routes";
import styles from "./index.module.scss";
import Link from "next/link";
import { Button } from "@features/ui";

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <nav className={styles.navbar}>
          <Button>
            <Link className={styles.buttonNavbar} href={"/"}>
              Home
            </Link>
          </Button>
          <Button>
            <Link className={styles.buttonNavbar} href={"/documentation"}>
              documentation
            </Link>
          </Button>
          <Button>
            <Link className={styles.buttonNavbar} href={"/pricing"}>
              pricing
            </Link>
          </Button>
          <Button>
            <Link className={styles.buttonNavbar} href={"/products"}>
              products
            </Link>
          </Button>
        </nav>
        <a href={Routes.projects}>Dashboard</a>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
