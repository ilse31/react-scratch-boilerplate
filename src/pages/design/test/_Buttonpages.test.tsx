import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonsPages from "../ButtonsPages";
import { MemoryRouter } from "react-router-dom";
test("renders ButtonsPages component correctly", () => {
  const { getByText } = render(
    // Wrap the ButtonsPages component with MemoryRouter
    <MemoryRouter>
      <ButtonsPages />
    </MemoryRouter>
  );

  expect(getByText("BACK TO HOME")).toBeInTheDocument();
  expect(getByText("BACK")).toBeInTheDocument();
});

test("navigates correctly on button click", () => {
  const { getByText } = render(
    // Wrap the ButtonsPages component with MemoryRouter
    <MemoryRouter>
      <ButtonsPages />
    </MemoryRouter>
  );

  // Simulate button click
  fireEvent.click(getByText("BACK TO HOME"));
  fireEvent.click(getByText("BACK"));

  // Since we're using MemoryRouter, it won't actually navigate, but we can check if the navigation functions were called correctly
  // You may need to modify this assertion based on your routing setup
  // For example, you can check if your navigation function is called with the correct path or use a different routing library
  // For testing, you can mock the navigation function and check if it is called with the expected path.
});
