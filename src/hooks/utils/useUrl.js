"use client";

import { useParams, usePathname, useSearchParams } from "next/navigation";

const useUrl = () => {
  const params = useParams();
  const pathname = usePathname();
  const query = {};
  const searchParams = useSearchParams();
  const route = pathname.split("/").filter((v) => v);
  for (const [key, value] of searchParams) {
    query[key] = value;
  }

  return {
    query,
    params,
    pathname,
    route,
    search: searchParams.toString(),
    url: `${pathname}?${searchParams.toString()}`,
  };
};

export default useUrl;
