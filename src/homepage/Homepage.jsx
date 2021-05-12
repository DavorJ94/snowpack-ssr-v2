import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { html } from "htm/preact";
import styles from "./homepage.module.css";
import Column from "./components/Column";
import emitter from "../eventEmitter";
import idGenerator from "./utils/idGenerator";

function Homepage() {
  const [toDoText, setToDoText] = useState("");
  const [toDoItems, setToDoItems] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", handleSubmit);
    return () => {
      document.removeEventListener("keydown", handleSubmit);
    };
  }, [handleSubmit]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("toDoItems"));
    setToDoItems(() => items);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  function handleChange(e) {
    setWarningMessage("");
    setToDoText(() => e.target.value);
  }

  function handleSubmit(e) {
    if (toDoText === "") {
      if (e.keyCode === 13 || e.target.getAttribute("data-clicked")) {
        setWarningMessage("You cannot add an empty to do item.");
      }
      return;
    }
    if (e.keyCode === 13 || e.target.getAttribute("data-clicked")) {
      const id = idGenerator();
      setToDoItems((prevItems) => [
        ...prevItems,
        { text: toDoText, status: "todo", id: id },
      ]);
      setToDoText(() => "");
    }
  }

  function deleteItem(input) {
    const itemsWithoutDeleted = toDoItems.filter((item) => {
      return item.id !== input;
    });
    const deletedItem = toDoItems.find((item) => {
      return item.id === input;
    });
    setToDoItems(() => itemsWithoutDeleted);

    emitter.emit("itemDeleted", deletedItem);
  }

  function handleArrowClick(id, arrowType) {
    let currentIndex;
    const newItemsState = toDoItems.map((item, index) => {
      if (item.id === id) {
        currentIndex = index;
        if (arrowType === "left") {
          const newStatus =
            item.status === "completed"
              ? (item.status = "in-progress")
              : (item.status = "todo");
          return { ...item, status: newStatus };
        } else {
          const newStatus =
            item.status === "todo"
              ? (item.status = "in-progress")
              : (item.status = "completed");
          return { ...item, status: newStatus };
        }
      } else return item;
    });
    newItemsState.push(newItemsState.splice(currentIndex, 1)[0]);
    setToDoItems(() => newItemsState);
  }

  return html`<div>
      <div className=${styles.addTodo}>
        <input
          value=${toDoText}
          onInput=${handleChange}
          className=${styles.inputTodo}
        ></input>
        <button
          className=${styles.btnAddTodo}
          data-clicked=${true}
          onClick=${handleSubmit}
        >
          Add to do item
        </button>
      </div>
      ${
        warningMessage &&
        html`<div className=${styles.warningMessage}>${warningMessage}</div>`
      }
      <div className=${styles.columnContainer}>
        <${Column}
          title="To do"
          type="todo"
          items=${toDoItems}
          deleteItem=${deleteItem}
          handleArrowClick=${handleArrowClick}
        />
        <${Column}
          title="In progress"
          type="in-progress"
          items=${toDoItems}
          deleteItem=${deleteItem}
          handleArrowClick=${handleArrowClick}
        />
        <${Column}
          title="Completed"
          type="completed"
          items=${toDoItems}
          deleteItem=${deleteItem}
          handleArrowClick=${handleArrowClick}
        />
      </div>
    </div>`;
}

export default Homepage;
