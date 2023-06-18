import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Routed from "./routes";

jest.mock("./routes", () => jest.fn());

describe("App", () => {
  it("should render the Routed component", () => {
    render(<App />);
    expect(Routed).toHaveBeenCalledTimes(1);
  });
});
