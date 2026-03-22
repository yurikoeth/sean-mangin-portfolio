import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";

beforeEach(() => {
  window.IntersectionObserver = jest.fn((callback) => {
    callback([{ isIntersecting: true }] as IntersectionObserverEntry[]);
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn(), root: null, rootMargin: "", thresholds: [] };
  }) as unknown as typeof IntersectionObserver;
});

describe("Projects", () => {
  it("renders section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("renders all three projects", () => {
    render(<Projects />);
    expect(screen.getByText("Appointment Booking System")).toBeInTheDocument();
    expect(screen.getByText("TechForge — AI-Powered E-Commerce Store")).toBeInTheDocument();
    expect(screen.getByText("Coastal Kitchen — Restaurant Landing Page")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(screen.getByText(/Custom scheduling platform/)).toBeInTheDocument();
    expect(screen.getByText(/Claude-powered AI shopping assistant/)).toBeInTheDocument();
    expect(screen.getByText(/Modern seafood restaurant site/)).toBeInTheDocument();
  });

  it("renders tech tags for each project", () => {
    render(<Projects />);
    expect(screen.getAllByText("Next.js").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Claude AI")).toBeInTheDocument();
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("Responsive")).toBeInTheDocument();
  });

  it("renders projects as external links", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
