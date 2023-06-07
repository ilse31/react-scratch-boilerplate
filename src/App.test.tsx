import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders App component", () => {
  render(<App />);

  const learnReactLink = screen.getByText(/Learn Reacts/i);
  expect(learnReactLink).toBeInTheDocument();

  const learnTypescriptLink = screen.getByText(/Learn Typescript/i);
  expect(learnTypescriptLink).toBeInTheDocument();
});
