import { Select, Input } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useFilter } from "./use-filter";
import { statusOptions, errorOptions } from "utils/options";

export function IssueFilter() {
  const { handleFilterChange, filters } = useFilter();

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
    <div className={styles.filters} data-cy="issue-filters">
      <Select
        className={styles.select}
        options={statusOptions}
        handleChange={(option) => {
          handleFilterChange({
            status: option?.value as IssueStatus | undefined,
          });
        }}
        value={filters.status}
        placeholder="Status"
      />
      <Select
        className={styles.select}
        options={errorOptions}
        handleChange={(option) => {
          handleFilterChange({
            level: option?.value as IssueLevel | undefined,
          });
        }}
        value={filters.level}
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
  );
}
