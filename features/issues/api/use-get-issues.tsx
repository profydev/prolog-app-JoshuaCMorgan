import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIssues } from "@api/issues";
import type { Page } from "@typings/page.types";
import type { Issue, IssueListParams } from "@api/issues.types";

const QUERY_KEY = "issues";

export function getQueryKey(params: IssueListParams) {
  return [QUERY_KEY, ...Object.values(params)];
}

export function useGetIssues(params: IssueListParams) {
  const query = useQuery<Page<Issue>, Error>(
    getQueryKey(params),
    ({ signal }) => getIssues(params, { signal }),
    { keepPreviousData: true },
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  const paramsJson = JSON.stringify(params);

  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      const params: IssueListParams = JSON.parse(paramsJson);
      if (params.page) {
        const nextPageParams = { ...params, page: params.page + 1 };
        queryClient.prefetchQuery(getQueryKey(nextPageParams), ({ signal }) =>
          getIssues(nextPageParams, { signal }),
        );
      }
    }
  }, [query.data, paramsJson, queryClient]);
  return query;
}
