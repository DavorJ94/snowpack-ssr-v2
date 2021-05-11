import React, { useState, useEffect } from "react";
import Column from "./components/Column";
import styles from "./App.module.css";

function App() {
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("deletedItems"));
    setDeletedItems(() => [...items, ...window.deletedItems]);
    window.deletedItems = [];
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
  return (
    <div>
      <div className={styles.columnContainer}>
        <Column
          title="Deleted items"
          // items={deletedItems}
          // deleteItem={deleteItem}
        />
      </div>
    </div>
  );
}

export default App;
