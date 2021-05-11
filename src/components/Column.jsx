import React from "react";
import Card from "./Card";
import styles from "./Column.module.css";

export default function Column({
  title,
  items,
  type,
  deleteItem,
  handleArrowClick,
}) {
  const backgroundStyle =
    title === "To do" ? "brown" : title === "In progress" ? "orange" : "green";

  return (
    <div className={styles.column} style={{ backgroundColor: backgroundStyle }}>
      <div className={styles.columnTitle}>{title}</div>
      <hr />
      <div className={styles.cardsContainer}>
        {items.map((card) => {
          if (type === card.status) {
            return (
              <Card
                text={card.text}
                id={card.id}
                status={card.status}
                key={card.id}
                deleteItem={deleteItem}
                handleArrowClick={handleArrowClick}
              />
            );
          } else return;
        })}
      </div>
    </div>
  );
}
