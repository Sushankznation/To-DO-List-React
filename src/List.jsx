import React from "react";
import "./styles.css";
export default function List(props) {
  const clicked = () => {
    console.log("Hello");
  };
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
}
