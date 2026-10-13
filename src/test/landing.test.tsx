import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Index from "../pages/Index";
import Product from "../pages/Product";

afterEach(cleanup);

describe("evidence-first landing page", () => {
  it("keeps the original logo artwork in the home wordmark", () => {
    render(<Index />);
    const home = screen.getByRole("link", { name: "LastGood home" });
    const logo = home.querySelector(".brand-mark");
    expect(logo).toHaveAttribute("aria-hidden", "true");
    expect(logo).toHaveStyle({ maskImage: 'url("/logo.png")' });
    expect(logo).not.toHaveTextContent("LG");
  });
  it("has one clear promise and a labeled real-console capture", () => {
    render(<Index />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Production broke.What changed?",
    );
    expect(screen.getByText(/REAL CONSOLE/)).toBeVisible();
    expect(document.body.textContent).not.toMatch(/ILLUSTRATIVE DATA/);
  });
  it("makes the sandbox the primary call to action", () => {
    render(<Index />);
    const primary = document.querySelectorAll(".hero-actions .primary-link");
    expect(primary).toHaveLength(1);
    expect(primary[0]).toHaveAttribute("href", "https://console.lastgood.space/sandbox");
  });
  it("toggles light and dark theme and remembers the choice", () => {
    localStorage.clear();
    document.documentElement.setAttribute("data-theme", "dark");
    render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "Switch to light mode" }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("lg-theme")).toBe("light");
    fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
  it("separates shipped integrations from the roadmap", () => {
    render(<Index />);
    expect(screen.getAllByText("LIVE").length).toBeGreaterThanOrEqual(4);
    expect(screen.getByText("NOT YET")).toBeVisible();
    expect(screen.getByText(/Not available as native connectors/)).toBeVisible();
  });
  it("shows Slack as a live notification destination, not an alert source", () => {
    render(<Index />);
    const section = screen.getByRole("region", { name: /You already have alerting/ });
    expect(within(section).getByText("Live")).toBeVisible();
    expect(within(section).getByText("Not another alert bot.")).toBeVisible();
    expect(within(section).getByText(/at most 5 new threads per 10 minutes/)).toBeVisible();
    expect(within(section).getByText(/No automatic production changes/)).toBeVisible();
    expect(within(section).getByRole("list", { name: "Slack investigation workflow" }).children).toHaveLength(4);
    expect(within(section).getByRole("list", { name: "Ranked suspect changes" }).children).toHaveLength(3);
    expect(within(section).queryByRole("link")).toBeNull();
    expect(within(section).queryByRole("button")).toBeNull();
  });
  it("only offers free beta and no unsupported certification claim", () => {
    render(<Index />);
    expect(screen.getByText(/Free beta for up to 2 services/)).toBeVisible();
    expect(screen.getByText(/No SOC 2 certification claimed/)).toBeVisible();
    expect(document.body.textContent).not.toMatch(
      /85%|100% DETERMINISTIC|Staff SREs|\$49|\$999|3 seconds/,
    );
    expect(document.querySelector("iframe, video")).toBeNull();
  });
  it("uses navigable links for all conversion actions", () => {
    render(<Index />);
    for (const link of screen.getAllByRole("link", {
      name: /Start free beta/,
    })) {
      expect(link).toHaveAttribute(
        "href",
        "https://console.lastgood.space/login",
      );
    }
    for (const link of screen.getAllByRole("link", { name: "Try the sandbox" })) {
      expect(link).toHaveAttribute("href", "https://console.lastgood.space/sandbox");
    }
    expect(
      screen.getByRole("link", { name: /Find us on Product Hunt/ }),
    ).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("supports an accessible, closable mobile navigation", () => {
    render(<Index />);
    const button = screen.getByRole("button", { name: "Open navigation" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(button);
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(
      screen
        .getByRole("navigation", { name: "Mobile navigation" })
        .querySelector('a[href="/#integrations"]')!,
    );
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  });
});

describe("docs and screenshots", () => {
  it("shows labeled sandbox screenshots", () => {
    render(<Product />);
    expect(screen.getAllByRole("img", { name: /sandbox|Ingestion Channels/ }).length).toBe(3);
    expect(screen.getAllByText(/sample data/i).length).toBeGreaterThan(0);
  });
});
