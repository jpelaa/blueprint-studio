import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

test("Header render !", async () => {
  const { getByText } = render(<Header />);
  expect(getByText("Blueprint")).toBeInTheDocument();
});
