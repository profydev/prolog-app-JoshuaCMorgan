import { useRouter } from "next/router";
import { IssueFilters } from "@api/issues.types";

export const useFilter = () => {
  const router = useRouter();

  const filters = {
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as IssueFilters;

  function removeEmptyFilters(filters: IssueFilters) {
    return Object.fromEntries(
      Object.entries(filters).filter(([, value]) => {
        return Boolean(value) && value !== "";
      }),
    );
  }

  function handleFilterChange(filters: IssueFilters) {
    const query = removeEmptyFilters({ ...router.query, ...filters });
    router.push({ pathname: router.pathname, query });
  }

  return { handleFilterChange, filters };
};
