import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
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
  it("has one clear promise and a labeled console illustration", () => {
    render(<Index />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Production broke.What changed?",
    );
    expect(screen.getByText(/SIMPLIFIED VIEW/)).toBeVisible();
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
    expect(within(section).getByText(/Nothing changes in\s+production automatically/)).toBeVisible();
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

describe("signal flow and how-it-thinks", () => {
  it("shows sources, engine and ranked suspects as the hero visual", () => {
    render(<Index />);
    const flow = screen.getByRole("group", { name: /How LastGood works/ });
    expect(within(flow).getByText("GitHub")).toBeVisible();
    expect(within(flow).getByText("Jenkins, CI")).toBeVisible();
    expect(within(flow).getByText("2 / THE LASTGOOD ENGINE")).toBeVisible();
    expect(within(flow).getByText(/RULED OUT/)).toBeVisible();
    expect(screen.getByText(/ILLUSTRATIVE EXAMPLE/)).toBeVisible();
  });
  it("explains the engine honestly, without unbackable claims", () => {
    render(<Index />);
    const section = screen.getByRole("region", { name: /Not every change/ });
    expect(within(section).getByText(/Suspects, not a verdict/)).toBeVisible();
    expect(within(section).getByText(/does not\s+prove causation/)).toBeVisible();
    expect(document.body.textContent).not.toMatch(/SOC 2 (certified|compliant)|MTTR|Trusted by/i);
  });
});

describe("consolidated page", () => {
  it("numbers sections in order and has a call to action after how-it-thinks", () => {
    render(<Index />);
    const eyebrows = Array.from(document.querySelectorAll(".eyebrow")).map((e) => e.textContent ?? "");
    const nums = eyebrows.map((t) => t.match(/^(\d\d) \//)?.[1]).filter(Boolean);
    expect(nums).toEqual(["01", "02", "03", "04"]);
    const cta = screen.getByRole("heading", { name: "See the ranking for yourself." });
    const thinking = screen.getByRole("heading", { name: /Not every change/ });
    expect(thinking.compareDocumentPosition(cta) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
  it("keeps the Rewind mock free of numeric scores", () => {
    render(<Index />);
    const svg = document.querySelector(".rw-ill")!;
    expect(svg.textContent).not.toMatch(/\d+\/100/);
    expect(svg.textContent).toMatch(/HIGH RISK/);
  });
});
