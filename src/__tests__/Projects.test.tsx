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
    expect(screen.getByText("AI-Powered E-Commerce Store")).toBeInTheDocument();
    expect(screen.getByText("Business Landing Page")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(screen.getByText(/Custom scheduling platform/)).toBeInTheDocument();
    expect(screen.getByText(/AI assistant that helps customers/)).toBeInTheDocument();
    expect(screen.getByText(/conversion-focused site/)).toBeInTheDocument();
  });

  it("renders tech tags for each project", () => {
    render(<Projects />);
    expect(screen.getAllByText("Next.js").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("AI/ML")).toBeInTheDocument();
    expect(screen.getByText("Stripe")).toBeInTheDocument();
    expect(screen.getByText("SEO")).toBeInTheDocument();
  });

  it("renders projects as links", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(3);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });
});
