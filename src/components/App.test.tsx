import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("should have header in app", () => {
  render(<App />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
