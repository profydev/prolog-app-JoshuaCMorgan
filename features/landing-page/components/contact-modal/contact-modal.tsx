import Image from "next/image";
import emailIcon from "@icons/email.svg";
import messageIcon from "@icons/message.svg";
import { useState } from "react";
import styles from "./contact-modal.module.scss";
import { Modal, Button, ButtonColor } from "@features/ui";
import Link from "next/link";

export function ContactModal() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal onModalClose={() => setOpen(false)}>
          <div className={styles.content}>
            <Image src={emailIcon} alt="email"></Image>
            <h3 className={styles.title}>contact us via email</h3>
            <p className={styles.subTitle}>
              Any questions? Send us an email at prolog@profy.dev. We usually
              answer within 24 hours.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              className={styles.button}
              color={ButtonColor.gray}
              onClick={() => {
                setOpen(false);
              }}
            >
              cancel
            </Button>
            <Button className={styles.button}>
              <Link
                className={styles.emailLink}
                href="mailto:support@prolog-app.com?subject=Support Request: "
              >
                open email app
              </Link>
            </Button>
          </div>
        </Modal>
      )}
      <button
        className={styles.contactButton}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image src={messageIcon} alt="Contact"></Image>
      </button>
    </>
  );
}
