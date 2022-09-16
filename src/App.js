import React from "react";

import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
import Footer from "./components/Footer";
import { deleteItem } from "./redux/todosReducer";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
    const items = useSelector((state) => state.todos.listOfItems);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <div className="heading">
                    <h1>To-Do List</h1>
                </div>
                <InputArea />
                <div>
                    <ul>
                        {items.map((todoItem, index) => (
                            <ToDoItem
                                key={index}
                                text={todoItem}
                                onClick={() => dispatch(deleteItem(index))}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
