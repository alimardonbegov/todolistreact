import React, { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { deleteItem } from "./redux/actions";

function App({ items, deleteItem }) {
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
                onClick={() => deleteItem(index)}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items.listOfItems
});
const mapDispatchToProps = {
  deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
