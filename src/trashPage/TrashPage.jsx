import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { html } from "htm/preact";
import styles from "./trashpage.module.css";
import emitter from "../eventEmitter";
import Column from "./components/Column";

function TrashPage() {
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("deletedItems"));
    if (items) setDeletedItems(() => [...items]);
    emitter.addListener("itemDeleted", function (x) {
      setDeletedItems((prevItems) => [...prevItems, x]);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
  }, [deletedItems]);

  function deleteItem(input) {
    const itemsWithoutDeleted = deletedItems.filter((item) => {
      return item.id !== input;
    });
    setDeletedItems(() => itemsWithoutDeleted);
  }
  return html`<div>
    <div className=${styles.columnContainer}>
      <${Column}
        title="Deleted items"
        items=${deletedItems}
        deleteItem=${deleteItem}
      />
    </div>
  </div>`;
}

export default TrashPage;
