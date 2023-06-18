import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButtonsPages from "../ButtonsPages";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/design-system/buttons",
  }),
}));

describe("ButtonsPages", () => {
  it("should render buttons with correct text and links", () => {
    render(
      <MemoryRouter>
        <ButtonsPages />
      </MemoryRouter>
    );

    const backButtonHome = screen.getByRole("link", { name: "BACK TO HOME" });
    expect(backButtonHome).toHaveAttribute("href", "/design-system");

    const backButton = screen.getByRole("link", { name: "BACK" });
    expect(backButton).toHaveAttribute("href", "/");

    const saveButton = screen.getByRole("button", { name: "Save" });
    expect(saveButton).toBeInTheDocument();
  });
});
