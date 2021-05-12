import { h } from "preact";
import { html } from "htm/preact";
import styles from "./Card.module.css";

export default function Card({ text, deleteItem, id }) {
  return html`<div className=${styles.cardComponent}>
    <div
      className=${styles.trashCan}
      onClick=${() => {
        deleteItem(id);
      }}
    ></div>
    <p className=${styles.cardText}>${text}</p>
  </div>`;
}
