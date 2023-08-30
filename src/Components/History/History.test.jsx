
import { describe, test, expect,vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react"; // Import `screen` here
import History from "./index";

const mockHistory = [
  { method: "GET", url: "https://pokeapi.co/api/v2/pokemon/get" }
];

describe("History", () => {

  test("Clicking 'GO AGAIN !' button dispatches action", () => {
    const mockDispatch = vi.fn();
    const historyEntry = mockHistory[0];

    render(<History history={mockHistory} dispatch={mockDispatch} />);

    const goAgainButton = screen.getByText("GO AGAIN !");
    fireEvent.click(goAgainButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_REQUEST_PARAMS",
      payload: historyEntry
    });
    test("Can render", () => {
        const { container } = render(<History history={mockHistory} />);
        expect(container.querySelectorAll(".item-of-history")).toHaveLength(
          mockHistory.length
        );
        expect(container.querySelector(".history")).not.toBeNull();
      });
    
  });
});
