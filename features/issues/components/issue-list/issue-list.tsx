import { ProjectLanguage } from "@api/projects.types";
import { Loading } from "@features/ui";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import styles from "./issue-list.module.scss";
import { IssueFilter } from "../issue-filter";
import { useFilter } from "../issue-filter/use-filter";
import { useThrottle } from "@uidotdev/usehooks";
export function IssueList() {
  const { updateFilter, filters } = useFilter();

  const throttledProjectFilter = useThrottle(filters.project, 500);
  const issuesPage = useGetIssues({
    ...filters,
    project: throttledProjectFilter,
  });
  const projects = useGetProjects();

  if (projects.isLoading || issuesPage.isLoading) {
    return <Loading />;
  }

  if (projects.isError) {
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>,
  );
  const { items, meta } = issuesPage.data || {};

  return (
    <div className={styles.issueContainer}>
      <IssueFilter />
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}>Issues</th>
              <th className={styles.headerCell}>Level</th>
              <th className={styles.headerCell}>Events</th>
              <th className={styles.headerCell}>Users</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </table>
        <div className={styles.paginationContainer}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.paginationButton}
              onClick={() => updateFilter({ page: filters.page - 1 })}
              disabled={filters.page === 1}
            >
              Previous
            </button>
            <button
              className={styles.paginationButton}
              onClick={() => updateFilter({ page: filters.page + 1 })}
              disabled={filters.page === meta?.totalPages}
            >
              Next
            </button>
          </div>
          <div className={styles.pageInfo}>
            Page <span className={styles.pageNumber}>{meta?.currentPage}</span>{" "}
            of <span className={styles.pageNumber}>{meta?.totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
