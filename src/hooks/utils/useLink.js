"use client";

import { useRouter, useSearchParams } from "next/navigation";

const useLink = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (query, remove = []) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        params.set(key, value);
      }
    }

    for (const key of remove) {
      params.delete(key);
    }

    return params;
  };

  const createHrefQuery = ({ query, remove, hash }) => {
    const params = createQueryString(query, remove);
    const hashString = hash ? `#${hash}` : "";

    return `?${params.toString()}${hashString}`;
  };

  const changeLink = (link, scroll = true) => {
    router.push(link, { scroll });
  };

  const changeQuery = ({ query, remove, scroll = false, hash }) => {
    const params = createQueryString(query, remove);
    const hashString = hash ? `#${hash}` : "";

    router.push(`?${params.toString()}${hashString}`, { scroll });
  };

  const cameFromSameDomain = (disabled = []) => {
    const prevUrl = sessionStorage.getItem("prevUrl") ?? "/";

    if (disabled.includes(prevUrl)) {
      return "/";
    }

    return prevUrl;
  };

  return {
    createHrefQuery,
    changeLink,
    changeQuery,
    goBack: router.back,
    cameFromSameDomain,
  };
};

export default useLink;
