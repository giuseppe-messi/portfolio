import { render, screen } from "@testing-library/react";
import { ErrorPage, testLocators } from "./ErrorPage";
import userEvent from "@testing-library/user-event";

const renderComponent = (props = {}) => {
  const onClearError = jest.fn();
  render(<ErrorPage onClearError={onClearError} {...props} />);

  return {
    onClearError
  };
};

describe("ErrorPage component", () => {
  it("renders ErrorPage without issues", () => {
    renderComponent();
    expect(screen.getByTestId(testLocators.root)).toBeInTheDocument();
  });

  it("calls prop 'onClearError' on button click", async () => {
    const { onClearError } = renderComponent();

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(onClearError).toHaveBeenCalled();
  });
});
