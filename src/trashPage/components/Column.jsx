import { h } from "preact";
import { html } from "htm/preact";
import styles from "./Column.module.css";
import Card from "./Card";

export default function Column({ title, items, type, deleteItem }) {
  return html`<div
    className=${styles.column}
    style=${{ backgroundColor: "red" }}
  >
    <div className=${styles.columnTitle}>${title}</div>
    <hr />
    <div className=${styles.cardsContainer}>
      ${items?.map((card, index) => {
        return html`<${Card}
          text=${card.text}
          id=${card.id}
          key=${index}
          deleteItem=${deleteItem}
        />`;
      })}
    </div>
  </div>`;
}
