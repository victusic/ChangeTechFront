import { useCallback, useEffect, useMemo, useState } from "react";
import { breakpoints } from "@/theme/breakpoints";

type BreakpointFlags = Record<keyof typeof breakpoints, boolean>;

const bpEntries = (
  Object.entries(breakpoints) as [keyof typeof breakpoints, string][]
).map(([key, val]) => [key, parseInt(val, 10)] as const);

const defaultFlags = bpEntries.reduce((acc, [key]) => {
  acc[key] = false;
  return acc;
}, {} as BreakpointFlags);

export const useBreakpoints = (): BreakpointFlags => {
  const [flags, setFlags] = useState<BreakpointFlags>(defaultFlags);

  const calcFlags = useCallback(
    (): BreakpointFlags =>
      bpEntries.reduce((acc, [key, px]) => {
        acc[key] = window.matchMedia(`(min-width: ${px}px)`).matches;
        return acc;
      }, {} as BreakpointFlags),
    [],
  );

  const queries = useMemo(
    () =>
      bpEntries.map(([key, px]) => ({
        mql: typeof window !== "undefined"
          ? window.matchMedia(`(min-width: ${px}px)`)
          : null,
        key,
      })),
    [],
  );

  useEffect(() => {
    const handler = () => setFlags(calcFlags());

    queries.forEach(({ mql }) => mql?.addEventListener("change", handler));
    setFlags(calcFlags());

    return () =>
      queries.forEach(({ mql }) => mql?.removeEventListener("change", handler));
  }, [calcFlags, queries]);

  return flags;
};
