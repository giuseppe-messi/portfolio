import { fireEvent, render, screen } from "@testing-library/react";
import { AnimatedText, type AnimatedTextProps } from "./AnimatedText";
import userEvent from "@testing-library/user-event";
import styles from "./AnimatedText.module.css";

const defaultProps = {
  text: "Mock Text"
};

const renderComponent = (props: AnimatedTextProps = defaultProps) =>
  render(<AnimatedText {...props} />);

describe("AnimatedText component", () => {
  it("renders AnimatedText without issues", () => {
    renderComponent();
  });

  it("starts the animation on a specific letter", async () => {
    renderComponent();
    const firstLetter = screen.getByText("M");

    await userEvent.hover(firstLetter);

    expect(firstLetter).toHaveClass(styles.animate);

    fireEvent.animationEnd(firstLetter);

    expect(firstLetter).not.toHaveClass(styles.animate);
  });
});
