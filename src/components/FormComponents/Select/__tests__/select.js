import React from "react";
import { render } from "../../../test-utils";
import Select from "../index";
import { componentsMeta } from "../../../data/componentMeta";

const item = componentsMeta.find((data) => data.name === "Select");

it("Select render!!! ", () => {
  const { getByText } = render(<Select editMode={false} {...item} />);
  expect(getByText(item.attributes.label)).toBeInTheDocument();
});
