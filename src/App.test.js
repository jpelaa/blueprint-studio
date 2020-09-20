import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("app renders stuff!", async () => {
  render(<App />);
  const lazyElement = await screen.findByText("Blueprint");
  expect(lazyElement).toBeInTheDocument();
});
