import { test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Results from "./index";

describe("App component", () => {
  test("renders loading state when loading prop is true", () => {
    render(<Results loading={true} />);

    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeTruthy();
  });

  test("renders loading state", () => {
    render(
      <Results
        loading={true}
        selectedMethod=""
        requestParams={{ url: "" }}
        data={{ headers: null, results: null }}
      />
    );

    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeTruthy();
  });

  test("renders results data", () => {
    const mockData = {
      headers: { "Content-Type": "application/json" },
      results: { key: "value" },
    };

    render(
      <Results
        loading={false}
        selectedMethod="GET"
        requestParams={{ url: "https://example.com/api" }}
        data={mockData}
      />
    );

    const requestMethod = screen.getByText(/Request Method: GET/i);
    expect(requestMethod).toBeTruthy();

    const url = screen.getByText(/URL: https:\/\/example.com\/api/i);
    expect(url).toBeTruthy();

    const headers = screen.getByText(/Headers:/i);
    expect(headers).toBeTruthy();

    const results = screen.getByText(/Results:/i);
    expect(results).toBeTruthy();

    // const headersContent = screen.getByText(
    //   /"Content-Type": "application\/json"/i
    // );
    // expect(headersContent).toBeTruthy();

    // const resultsContent = screen.getByText(/"key": "value"/i);
    // expect(resultsContent).toBeTruthy();
  });
});
