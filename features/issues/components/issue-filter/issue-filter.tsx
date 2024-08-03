import { Select, Input } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useFilter } from "./use-filter";
import { statusOptions, errorOptions } from "utils/options";

export function IssueFilter() {
  const { updateFilter, filters } = useFilter();

  return (
    <div className={styles.filters} data-cy="issue-filters">
      <Select
        className={styles.select}
        options={statusOptions}
        handleChange={(option) => {
          updateFilter({
            status: option?.value as IssueStatus,
          });
        }}
        value={filters.status}
        placeholder="Status"
      />
      <Select
        className={styles.select}
        options={errorOptions}
        handleChange={(option) => {
          updateFilter({
            level: option?.value as IssueLevel,
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
        value={filters.project || ""}
        onChange={(e) => updateFilter({ project: e.target.value })}
      ></Input>
    </div>
  );
}
