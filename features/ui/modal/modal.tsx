"use client";
import { createPortal } from "react-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./modal.module.scss";

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

type ModalProps = {
  children: (props: { close: () => void }) => React.ReactNode;
  triggerModal: (props: { open: () => void }) => React.ReactNode;
};

export function Modal({ children, triggerModal }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null as HTMLDivElement | null);
  const mounted = useMounted();

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      const listener = keyListenersMap.get(event.keyCode);
      console.log(listener);
      console.log(event);

      return listener && listener(event);
    };

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const handleTabKey = (event: KeyboardEvent) => {
    const focusableModalElements =
      modalRef?.current?.querySelectorAll(" button");
    let firstElement;
    let lastElement;
    if (focusableModalElements) {
      firstElement = focusableModalElements[0];
      lastElement = focusableModalElements[focusableModalElements.length - 1];
    }

    if (!event.shiftKey && document.activeElement !== firstElement) {
      (firstElement as HTMLElement).focus();
      return event.preventDefault();
    }

    if (event.shiftKey && document.activeElement !== lastElement) {
      (lastElement as HTMLElement).focus();
      event.preventDefault();
    }
  };

  const keyListenersMap = new Map([
    [27, () => setIsOpen(false)],
    [9, handleTabKey],
  ]);

  const modalControls = {
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {isOpen && (
        <div
          ref={modalRef}
          className={styles.modalContainer}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContent}>{children(modalControls)}</div>
        </div>
      )}
      {triggerModal(modalControls)}
    </>,
    document.body,
  );
}

export default Modal;
