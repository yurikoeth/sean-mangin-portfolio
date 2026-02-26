import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />);
    expect(screen.getByText("Sean Mangin")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/I build fast, modern websites and AI-powered tools/)
    ).toBeInTheDocument();
  });

  it("renders See My Work CTA linking to #projects", () => {
    render(<Hero />);
    const link = screen.getByText("See My Work");
    expect(link.closest("a")).toHaveAttribute("href", "#projects");
  });

  it("renders Let's Talk CTA linking to #contact", () => {
    render(<Hero />);
    const link = screen.getByText(/Let.*s Talk/);
    expect(link.closest("a")).toHaveAttribute("href", "#contact");
  });
});
