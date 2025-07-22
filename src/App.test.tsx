import { render } from "@testing-library/react";
import App from "./App";
import { axe } from "jest-axe";

it("should render App without a11y violations", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
