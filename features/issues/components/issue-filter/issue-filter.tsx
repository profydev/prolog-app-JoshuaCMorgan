import { Select, Button, ButtonSize, Input } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useFilter } from "./use-filter";
import { useState } from "react";
import { statusOptions, errorOptions } from "utils/options";

export function IssueFilter() {
  const [statusValue, setStatusValue] = useState<
    (typeof statusOptions)[0] | undefined
  >(undefined);
  const [errorValue, setErrorValue] = useState<
    (typeof errorOptions)[0] | undefined
  >(undefined);

  const { handleFilterChange } = useFilter();

  function debounce(callback: { (value: string | undefined): void }) {
    let timeout: NodeJS.Timeout | undefined;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(e.target.value);
      }, 500);
    };
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContent}>
        <Button size={ButtonSize.lg} className={styles.resolveBtn}>
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
              handleFilterChange({
                status: option?.value as IssueStatus | undefined,
              });
            }}
            value={statusValue?.value.length === 0 ? undefined : statusValue}
            placeholder="Status"
          />
          <Select
            className={styles.select}
            options={errorOptions}
            handleChange={(option) => {
              setErrorValue(option);
              handleFilterChange({
                level: option?.value as IssueLevel | undefined,
              });
            }}
            value={errorValue?.value.length === 0 ? undefined : errorValue}
            placeholder="Level"
          />
          <Input
            type="search"
            className={styles.input}
            placeholder="Project Name"
            iconSrc={"/icons/hour-glass.svg"}
            onChange={debounce((value: string | undefined) => {
              handleFilterChange({ project: value });
            })}
          ></Input>
        </div>
      </div>
    </div>
  );
}
