import { axios } from "./axios";
import type { Page } from "./content.types";

const ENDPOINT = "content-page/:slug";

function setAbsoluteUrls<T>(data: T): T {
  if (!data) {
    return data;
  }

  if (typeof data === "string" && data.startsWith("/")) {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${data}` as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map(setAbsoluteUrls) as unknown as T;
  }

  if (typeof data === "object") {
    return Object.keys(data).reduce(
      (acc, key) => {
        const value = (data as Record<string, unknown>)[key];
        return {
          ...acc,
          [key]: setAbsoluteUrls(value),
        };
      },
      {} as unknown as T,
    );
  }
  return data;
}

export async function getContentPage(slug: string) {
  const { data } = await axios.get<Page>(ENDPOINT.replace(":slug", slug));
  return setAbsoluteUrls(data);
}
