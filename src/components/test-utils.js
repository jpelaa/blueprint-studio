import React from "react";
import { render } from "@testing-library/react";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
const isTouchDevice = !!("ontouchstart" in window || navigator.maxTouchPoints);

const AllTheProviders = ({ children }) => {
  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      {children}
    </DndProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
