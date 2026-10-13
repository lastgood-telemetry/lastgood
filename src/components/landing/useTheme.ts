import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";
const KEY = "lg-theme";

const initial = (): Theme => {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
};

/** Dark is the default. First visit follows the system setting (set in index.html); the choice persists. */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage unavailable: keep the choice for this visit only */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
};
