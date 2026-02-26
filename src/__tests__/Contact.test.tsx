import { render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";

beforeEach(() => {
  window.IntersectionObserver = jest.fn((callback) => {
    callback([{ isIntersecting: true }] as IntersectionObserverEntry[]);
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn(), root: null, rootMargin: "", thresholds: [] };
  }) as unknown as typeof IntersectionObserver;
});

describe("Contact", () => {
  it("renders section heading", () => {
    render(<Contact />);
    expect(screen.getByText(/build something together/)).toBeInTheDocument();
  });

  it("renders the contact form with all fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("renders form fields with correct types", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
    expect(screen.getByLabelText("Message").tagName).toBe("TEXTAREA");
  });

  it("marks all fields as required", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name")).toBeRequired();
    expect(screen.getByLabelText("Email")).toBeRequired();
    expect(screen.getByLabelText("Message")).toBeRequired();
  });

  it("renders submit button", () => {
    render(<Contact />);
    expect(screen.getByRole("button", { name: "Send Message" })).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Contact />);
    const emailLink = screen.getByText("mangindev@gmail.com");
    expect(emailLink.closest("a")).toHaveAttribute("href", "mailto:mangindev@gmail.com");
  });

  it("renders LinkedIn link", () => {
    render(<Contact />);
    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink.closest("a")).toHaveAttribute("target", "_blank");
  });
});
