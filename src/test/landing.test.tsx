import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Index from "../pages/Index";

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
  it("has one clear promise and an explicit simulated product scene", () => {
    render(<Index />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Production broke.What changed?",
    );
    expect(screen.getByText(/ILLUSTRATIVE DATA/)).toBeVisible();
    expect(screen.getByText(/Correlation is a lead, not proof/)).toBeVisible();
  });
  it("changes the example without pretending to run a live diagnosis", () => {
    render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: "edge-gateway" }));
    expect(
      screen.getByRole("button", { name: "edge-gateway" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: "checkout-api" }),
    ).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.getByRole("heading", { name: "Response time increased" }),
    ).toBeVisible();
    expect(screen.getByText(/configuration change preceded/)).toBeVisible();
  });
  it("separates shipped integrations from the roadmap", () => {
    render(<Index />);
    expect(screen.getAllByText("LIVE")).toHaveLength(2);
    expect(screen.getByText("COMING SOON")).toBeVisible();
    expect(screen.getByText(/Not available in the beta today/)).toBeVisible();
  });
  it("only offers free beta and no unsupported certification claim", () => {
    render(<Index />);
    expect(screen.getByText(/Free beta for up to 2 projects/)).toBeVisible();
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
    expect(
      screen.getByRole("link", { name: "Try the sandbox" }),
    ).toHaveAttribute("href", "https://console.lastgood.space/sandbox");
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
