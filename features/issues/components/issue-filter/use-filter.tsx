import { useRouter } from "next/router";
import { IssueListParams } from "@api/issues.types";

export const useFilter = () => {
  const router = useRouter();

  const params = {
    page: Number(router.query.page || 1),
    status: router.query.status,
    level: router.query.level,
    project: router.query.project,
  } as IssueListParams;

  function removeEmptyFilters(filters: IssueListParams) {
    return Object.fromEntries(
      Object.entries(filters).filter(([, value]) => {
        return Boolean(value) && value !== "";
      }),
    );
  }

  function updateFilters(filters: IssueListParams) {
    const query = removeEmptyFilters({ ...params, ...filters });
    router.push({ pathname: router.pathname, query });
  }

  return { updateFilters, filters: params };
};
