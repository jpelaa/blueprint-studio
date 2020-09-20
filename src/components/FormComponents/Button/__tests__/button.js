import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import Button from "../index";
import { componentsMeta } from "../../../data/componentMeta";

const item = componentsMeta.find((data) => data.name === "Button");

it("Button render!!! ", () => {
  const { getByText } = render(<Button editMode={false} {...item} />);
  const button = screen.getByRole("button");
  expect(getByText("Button")).toBeInTheDocument();
  fireEvent.dragStart(button);
  fireEvent.dragEnter(button);
  fireEvent.dragOver(button);
});
