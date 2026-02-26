import { render, screen } from "@testing-library/react";
import Services from "@/components/Services";

// Mock IntersectionObserver
const mockObserve = jest.fn();
const mockDisconnect = jest.fn();

beforeEach(() => {
  window.IntersectionObserver = jest.fn((callback) => {
    // Trigger visible immediately
    callback([{ isIntersecting: true }] as IntersectionObserverEntry[]);
    return { observe: mockObserve, disconnect: mockDisconnect, unobserve: jest.fn(), root: null, rootMargin: "", thresholds: [] };
  }) as unknown as typeof IntersectionObserver;
});

describe("Services", () => {
  it("renders section heading", () => {
    render(<Services />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("What I Offer")).toBeInTheDocument();
  });

  it("renders all four service cards", () => {
    render(<Services />);
    expect(screen.getByText("Modern Websites")).toBeInTheDocument();
    expect(screen.getByText("AI Chat Integration")).toBeInTheDocument();
    expect(screen.getByText("Web Applications")).toBeInTheDocument();
    expect(screen.getByText("IT Support")).toBeInTheDocument();
  });

  it("renders prices for each service", () => {
    render(<Services />);
    expect(screen.getByText("$300+")).toBeInTheDocument();
    expect(screen.getByText("$500+")).toBeInTheDocument();
    expect(screen.getByText("$1,500+")).toBeInTheDocument();
    expect(screen.getByText("$45/hr")).toBeInTheDocument();
  });

  it("renders descriptions", () => {
    render(<Services />);
    expect(screen.getByText(/Fast, responsive sites built with Next.js/)).toBeInTheDocument();
    expect(screen.getByText(/intelligent chatbot/)).toBeInTheDocument();
    expect(screen.getByText(/Custom dashboards, booking systems/)).toBeInTheDocument();
    expect(screen.getByText(/Remote tech support/)).toBeInTheDocument();
  });
});
