import { h } from "preact";
import { html } from "htm/preact";
import styles from "./Card.module.css";

export default function Card({
  text,
  status,
  deleteItem,
  id,
  handleArrowClick,
}) {
  return html`<div className=${styles.cardComponent}>
    ${status === "todo" &&
    html`<div
      className=${styles.trashCan}
      onClick=${() => {
        deleteItem(id);
      }}
    ></div>`}
    ${(status === "in-progress" || status === "completed") &&
    html`<div
      className=${styles.leftCircle}
      onClick=${() => {
        handleArrowClick(id, "left");
      }}
    ></div>`}
    <p className=${styles.cardText}>${text}</p>
    ${status === "completed" &&
    html`<div
      className=${styles.trashCan}
      onClick=${() => {
        deleteItem(id);
      }}
    ></div>`}
    ${(status === "in-progress" || status === "todo") &&
    html`<div
      className=${styles.rightCircle}
      onClick=${() => {
        handleArrowClick(id, "right");
      }}
    ></div>`}
  </div>`;
}
