import styles from "./loading.module.scss";

export function Loading() {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        data-cy="loading"
        className={styles.loading}
        src={"/icons/loading-circle.svg"}
        alt="loading-circle"
      />
    </div>
  );
}
