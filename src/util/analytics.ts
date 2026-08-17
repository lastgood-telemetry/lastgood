/**
 * Lightweight, optional Google Analytics 4 (GA4) integration.
 * Activates automatically when VITE_GA_MEASUREMENT_ID environment variable is provided.
 * Gracefully no-ops when measurement ID is missing.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const getGAMeasurementId = (): string | undefined => {
  try {
    return import.meta.env.VITE_GA_MEASUREMENT_ID;
  } catch {
    return undefined;
  }
};

let isInitialized = false;

export const initGA = (): void => {
  const measurementId = getGAMeasurementId();
  if (!measurementId || isInitialized) {
    return;
  }

  try {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(..._args: any[]) {
      window.dataLayer?.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", measurementId, {
      send_page_view: false, // Pageviews sent manually on route changes
    });

    isInitialized = true;
  } catch (e) {
    // Silent fail if script fails to load
  }
};

export const trackPageView = (path: string): void => {
  const measurementId = getGAMeasurementId();
  if (!measurementId || !window.gtag) return;
  try {
    window.gtag("config", measurementId, {
      page_path: path,
    });
  } catch (e) {
    // Ignore tracking error
  }
};

export const trackEvent = (
  action: string,
  category = "general",
  label = "",
  value: number | null = null
): void => {
  const measurementId = getGAMeasurementId();
  if (!measurementId || !window.gtag) return;
  try {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (e) {
    // Ignore tracking error
  }
};

export const resetGAForTesting = (): void => {
  isInitialized = false;
};
