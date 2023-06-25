import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Hello</Button>);
    const buttonElement = getByText("Hello");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("disables button when isLoading is true", () => {
    const { getByText } = render(<Button isLoading>Submit</Button>);
    const buttonElement = getByText("Submit");
    expect(buttonElement).toBeDisabled();
  });

  it("applies the correct variant class based on variant prop", () => {
    const { getByText } = render(<Button variant='primary'>Primary</Button>);
    const buttonElement = getByText("Primary");
    expect(buttonElement).toHaveClass("bg-primary-500");
  });

  it("applies the correct size class based on size prop", () => {
    const { getByText } = render(<Button size='lg'>Large</Button>);
    const buttonElement = getByText("Large");
    expect(buttonElement).toHaveClass("min-h-[2.75rem]");
  });
});
