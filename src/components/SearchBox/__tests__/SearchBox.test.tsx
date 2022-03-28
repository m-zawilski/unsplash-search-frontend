import { render, screen } from "@testing-library/react";
import SearchBox, { SearchBoxProps } from "../SearchBox";

const defaultProps: SearchBoxProps = {
  query: "",
  setQuery: () => {},
  onSearch: async () => {},
};

describe("Photo", () => {
  test("should display input", () => {
    render(<SearchBox {...defaultProps} />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  test("should display search button", () => {
    render(<SearchBox {...defaultProps} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
