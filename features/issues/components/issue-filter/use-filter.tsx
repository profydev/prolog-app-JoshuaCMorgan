import { useRouter } from "next/router";
import { IssueFilters } from "@api/issues.types";

export const useFilter = () => {
  const router = useRouter();

  const filters = {
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as IssueFilters;

  function handleFilterChange(filters: IssueFilters) {
    const query = { ...router.query, ...filters };
    router.push({ query });
  }

  return { handleFilterChange, filters };
};
