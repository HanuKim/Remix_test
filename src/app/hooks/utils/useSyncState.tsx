import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

const SYNC_STORAGE_KEY = "__SYNC_STORAGE__";

declare global {
  interface Window {
    __SYNC_STORAGE__: Record<string, string>;
  }
}

export function useSyncState<T>(value: T, key: string) {
  const isServer = typeof window === "undefined";

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
                if (Object.hasOwn(window, '${SYNC_STORAGE_KEY}')) {
                    window.${SYNC_STORAGE_KEY}.${key} =  ${JSON.stringify(value)};
                } else {
                    window.${SYNC_STORAGE_KEY} = { ${key}: ${JSON.stringify(value)} };
                }
            `,
        }}
      />
    );
  });

  return useState<T>(() => {
    return isServer || !Object.hasOwn(window, SYNC_STORAGE_KEY)
      ? value
      : (window.__SYNC_STORAGE__[key] as T);
  });
}
