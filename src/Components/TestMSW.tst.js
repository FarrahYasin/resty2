import { render, screen, expect, test, describe, beforeAll, afterEach, afterAll } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Results from "./Results/index";

describe("App component", () => {
  const server = setupServer(
    rest.get("https://example.com/api", (req, res, ctx) => {
      return res(ctx.json({ name: "farah" }));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  // test("renders loading state when loading prop is true", () => {
  //   render(<Results loading={true} />);

  //   const loadingMessage = screen.getByText(/Loading.../i);
  //   expect(loadingMessage).toBeTruthy();
  // });

  test("renders results data", async () => {
    render(
      <Results
        loading={false}
        selectedMethod="GET"
        requestParams={"https://example.com/api" } 
        data={{ headers: null, results: null }}
      />
    );

    const requestMethod = screen.getByText(/Request Method: GET/i);
    expect(requestMethod).toBeTruthy();

    const url = screen.getByText(/URL: https:\/\/example.com\/api/i);
    expect(url).toBeTruthy();

    const headers = screen.getByText(/Headers:/i);
    expect(headers).toBeTruthy();

    const results = await screen.findByText(/Results:/i);
    expect(results).toBeTruthy();

   ;
  });
});
