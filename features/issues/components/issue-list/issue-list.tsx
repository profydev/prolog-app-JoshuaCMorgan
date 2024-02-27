import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { Loading } from "@features/ui";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import styles from "./issue-list.module.scss";
import { IssueFilter } from "../issue-filter";
import { useFilter } from "../issue-filter/use-filter";

export function IssueList() {
  const router = useRouter();
  const { filters } = useFilter();

  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage, ...filters },
    });

  const issuesPage = useGetIssues(page, filters);
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
              <th className={styles.headerCell}></th>
              <th className={styles.headerCell}>Graph: 14d</th>
              <th className={styles.headerCell}>Level</th>
              <th className={styles.headerCell}>Events</th>
              <th className={styles.headerCell}>Users</th>
            </tr>
          </thead>
          <tbody>
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
          <div>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className={styles.paginationButton}
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
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
