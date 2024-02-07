import { useEffect, useLayoutEffect } from "react";

function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === "undefined") return useEffect(callback, deps);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useLayoutEffect(callback, [callback]);
}

export { useIsomorphicLayoutEffect };
