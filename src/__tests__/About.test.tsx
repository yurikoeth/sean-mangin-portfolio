import { render, screen } from "@testing-library/react";
import About from "@/components/About";

beforeEach(() => {
  window.IntersectionObserver = jest.fn((callback) => {
    callback([{ isIntersecting: true }] as IntersectionObserverEntry[]);
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn(), root: null, rootMargin: "", thresholds: [] };
  }) as unknown as typeof IntersectionObserver;
});

describe("About", () => {
  it("renders section heading", () => {
    render(<About />);
    expect(screen.getByText("A bit about who I am")).toBeInTheDocument();
  });

  it("highlights key stats", () => {
    render(<About />);
    expect(screen.getByText("150+")).toBeInTheDocument();
    expect(screen.getByText("3+")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
  });

  it("mentions IT support background", () => {
    render(<About />);
    expect(screen.getByText("150+ daily support interactions")).toBeInTheDocument();
  });

  it("mentions tech stack", () => {
    render(<About />);
    expect(screen.getByText("Next.js, React, and TypeScript")).toBeInTheDocument();
  });

  it("mentions AI-assisted development", () => {
    render(<About />);
    expect(screen.getByText("AI-assisted development")).toBeInTheDocument();
  });
});
