import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          if (inputText) {
            props.addItem(inputText);
            setInputText("");
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(InputArea);
