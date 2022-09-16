import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/todosReducer";

export default function InputArea() {
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch();

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
                        dispatch(addItem(inputText));
                        setInputText("");
                    }
                }}
            >
                <span>Add</span>
            </button>
        </div>
    );
}
