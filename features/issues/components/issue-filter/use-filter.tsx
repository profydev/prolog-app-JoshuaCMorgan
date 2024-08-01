import { NextRouter, useRouter } from "next/router";
import { IssueLevel, IssueStatus, IssueListParams } from "@api/issues.types";
import { z } from "zod";

const QueryParamsSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((str) => Number(str) || 1),
  status: z.nativeEnum(IssueStatus).optional(),
  level: z.nativeEnum(IssueLevel).optional(),
  project: z.string().optional(),
});

function parseQueryParams(query: NextRouter["query"]) {
  const parsed = QueryParamsSchema.safeParse(query);

  if (!parsed.success) {
    return { page: 1 };
  }
  return parsed.data;
}

export const useFilter = () => {
  const router = useRouter();
  const queryParams = parseQueryParams(router.query);

  function removeEmptyFilters(filters: IssueListParams) {
    return Object.fromEntries(
      Object.entries(filters).filter(([, value]) => {
        return Boolean(value) && value !== "";
      }),
    );
  }

  function updateFilter(filters: Partial<IssueListParams>) {
    const updatedFilter = { ...queryParams, ...filters };
    const query = removeEmptyFilters(updatedFilter);
    router.push({ pathname: router.pathname, query });
  }

  return { updateFilter, filters: queryParams };
};
