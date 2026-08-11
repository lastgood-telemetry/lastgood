import { describe, it, expect, beforeEach, vi } from "vitest";
import { initGA, trackPageView, trackEvent, resetGAForTesting } from "../util/analytics";

describe("analytics utility", () => {
  beforeEach(() => {
    resetGAForTesting();
    document.head.innerHTML = "";
    delete (window as any).dataLayer;
    delete (window as any).gtag;
    vi.unstubAllEnvs();
  });

  it("should not initialize GA when VITE_GA_MEASUREMENT_ID is missing", () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "");
    initGA();
    expect(document.querySelector("script[src*='googletagmanager']")).toBeNull();
    expect(window.gtag).toBeUndefined();
  });

  it("should initialize GA script and gtag when VITE_GA_MEASUREMENT_ID is provided", () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST12345");
    initGA();

    const script = document.querySelector("script[src*='G-TEST12345']");
    expect(script).not.toBeNull();
    expect(window.gtag).toBeTypeOf("function");
    expect(window.dataLayer).toBeDefined();
  });

  it("should track page views when initialized", () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST12345");
    initGA();

    const gtagSpy = vi.spyOn(window, "gtag");
    trackPageView("/terms");

    expect(gtagSpy).toHaveBeenCalledWith("config", "G-TEST12345", {
      page_path: "/terms",
    });
  });

  it("should track events when initialized", () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST12345");
    initGA();

    const gtagSpy = vi.spyOn(window, "gtag");
    trackEvent("click_access_beta", "conversion", "Hero");

    expect(gtagSpy).toHaveBeenCalledWith("event", "click_access_beta", {
      event_category: "conversion",
      event_label: "Hero",
      value: null,
    });
  });

  it("should safely no-op trackPageView and trackEvent if not initialized or ID missing", () => {
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "");
    expect(() => trackPageView("/terms")).not.toThrow();
    expect(() => trackEvent("test_action")).not.toThrow();
  });
});
