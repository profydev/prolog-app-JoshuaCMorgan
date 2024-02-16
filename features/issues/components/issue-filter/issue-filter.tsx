import { Select, Button, ButtonSize, Input } from "@features/ui";
import styles from "./issue-filter.module.scss";
// import { useFilters } from "./use-filters";
// import { useRouter } from "next/router";
import { useState } from "react";

const statusOptions = [
  { value: "Unresolved", label: "Unresolved" },
  { value: "Resolved", label: "Resolved" },
];

const errorOptions = [
  { value: "Error", label: "Error" },
  { value: "Warning", label: "Warning" },
  { value: "Info", label: "Info" },
];

export function IssueFilter() {
  const [statusValue, setStatusValue] = useState<
    (typeof statusOptions)[0] | undefined
  >(undefined);
  const [errorValue, setErrorValue] = useState<
    (typeof errorOptions)[0] | undefined
  >(undefined);

  return (
    <div
      className={styles.filterContainer}
      //   onSubmit={handleSubmit(onSubmit)}
      // className={styles.formGroup}
      //   noValidate
    >
      <Button size={ButtonSize.lg} className={styles.btn}>
        <span className={styles.icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6667 5L7.50001 14.1667L3.33334 10"
              stroke="white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        Resolve selected issues
      </Button>
      <div className={styles.filters}>
        <Select
          className={styles.select}
          options={statusOptions}
          handleChange={(option) => {
            setStatusValue(option);
          }}
          value={statusValue}
          placeholder="Status"
        />
        <Select
          className={styles.select}
          options={errorOptions}
          handleChange={(option) => {
            setErrorValue(option);
          }}
          value={errorValue}
          placeholder="Level"
        />
        <Input iconSrc={"/icons/hour-glass.svg"}></Input>
      </div>
    </div>
  );
}
