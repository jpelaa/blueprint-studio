import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { getStyles } from "../dragStyles";

const Select = ({ editMode, id, attributes, removeComponent, ...data }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id, attributes, ...data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  return (
    <>
      <div
        ref={drag}
        className="form-group bg-white shadow-sm p-2 border pointer component"
        {...(editMode
          ? {
              style: {
                width: "20rem",
                ...getStyles(
                  attributes.styleObj.left ? attributes.styleObj.left : 0,
                  attributes.styleObj.top ? attributes.styleObj.top : 0,
                  isDragging,
                  attributes.styleObj.position
                ),
              },
            }
          : {
              style: {
                width: "20rem",
              },
            })}
      >
        {editMode && (
          <i
            className="fa fa-trash float-right"
            onClick={() => removeComponent(id)}
          ></i>
        )}
        <label htmlFor="">{attributes.label}</label>
        <select className="form-control" name="" id="">
          {attributes.options.map((o) => {
            return (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Select;
