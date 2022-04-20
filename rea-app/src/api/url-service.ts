import queryString from "query-string";

const build = (
  url: string,
  queryParams: { [key: string]: any } = {}
): string => {
  const urlQueryParams = new URLSearchParams(queryParams);
  if (urlQueryParams) {
    return `${url}?${urlQueryParams}`;
  }

  return url;
};

const parse = (query: string) => {
  return queryString.parse(query);
};

export const urlService = {
  build,
  parse,
};
