import React from "react";
import { render } from "../../../test-utils";
import Input from "../index";
import { componentsMeta } from "../../../data/componentMeta";

const item = componentsMeta.find((data) => data.name === "Input");

it("Input render!!! ", () => {
  const { getByText } = render(<Input editMode={false} {...item} />);
  expect(item.componentType).toBe("InputComponent");
  expect(getByText(item.attributes.label)).toBeInTheDocument();
});
