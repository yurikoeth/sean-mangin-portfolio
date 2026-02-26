import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the name", () => {
    render(<Footer />);
    expect(screen.getByText(/Sean Mangin/)).toBeInTheDocument();
  });

  it("renders built-with credit", () => {
    render(<Footer />);
    expect(screen.getByText(/Next\.js \+ Tailwind CSS/)).toBeInTheDocument();
  });
});
