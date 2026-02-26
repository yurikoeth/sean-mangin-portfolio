import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the logo", () => {
    render(<Navbar />);
    expect(screen.getByText("TM")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders Get In Touch CTA linking to #contact", () => {
    render(<Navbar />);
    const ctas = screen.getAllByText("Get In Touch");
    expect(ctas[0].closest("a")).toHaveAttribute("href", "#contact");
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");

    // Mobile menu not visible initially
    expect(screen.queryByText("Services")?.closest(".md\\:hidden .px-6")).toBeNull;

    // Open menu
    fireEvent.click(toggle);
    // After click, there should be mobile links rendered
    const serviceLinks = screen.getAllByText("Services");
    expect(serviceLinks.length).toBeGreaterThanOrEqual(2); // desktop + mobile

    // Close menu
    fireEvent.click(toggle);
  });

  it("applies scrolled styles when window is scrolled", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");

    expect(nav.className).toContain("bg-transparent");

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);

    expect(nav.className).toContain("backdrop-blur-md");
  });
});
