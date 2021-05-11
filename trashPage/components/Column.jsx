import React from "react";
import Card from "./Card";
import styles from "./Column.module.css";

export default function Column({ title, items, type, deleteItem }) {
  return (
    <div className={styles.column} style={{ backgroundColor: "red" }}>
      <div className={styles.columnTitle}>{title}</div>
      <hr />
      <div className={styles.cardsContainer}>
        {items?.map((card, index) => {
          return (
            <Card
              text={card.text}
              id={card.id}
              key={index}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}
