import React from "react";
import styles from "./Card.module.css";

export default function Card({
  text,
  status,
  deleteItem,
  id,
  handleArrowClick,
}) {
  return (
    <div className={styles.cardComponent}>
      {status === "todo" && (
        <div
          className={styles.trashCan}
          onClick={() => {
            deleteItem(id);
          }}
        ></div>
      )}
      {(status === "in-progress" || status === "completed") && (
        <i
          className={styles.leftCircle}
          onClick={() => {
            handleArrowClick(id, "left");
          }}
        ></i>
      )}
      <p className={styles.cardText}>{text}</p>
      {status === "completed" && (
        <div
          className={styles.trashCan}
          onClick={() => {
            deleteItem(id);
          }}
        ></div>
      )}
      {(status === "in-progress" || status === "todo") && (
        <div
          className={styles.rightCircle}
          onClick={() => {
            handleArrowClick(id, "right");
          }}
        ></div>
      )}
    </div>
  );
}
