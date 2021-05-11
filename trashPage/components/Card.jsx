import React from "react";
import styles from "./Card.module.css";

export default function Card({ text, deleteItem, id }) {
  return (
    <div className={styles.cardComponent}>
      <div
        className={styles.trashCan}
        onClick={() => {
          deleteItem(id);
        }}
      ></div>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}
