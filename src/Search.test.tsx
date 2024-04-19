import { render  } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  it("renders search input and button", () => {
    const { getByPlaceholderText, getByText } = render(<Search />);
    const searchInput = getByPlaceholderText("Search for something...");
    const searchButton = getByText("Search");
    
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});