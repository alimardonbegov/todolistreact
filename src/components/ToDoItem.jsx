import React from "react";

function ToDoItem(props) {
  return (
    <div
      className="listOfItems"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
