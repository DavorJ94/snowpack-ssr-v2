import { h } from "preact";
import { html } from "htm/preact";
import {useEffect} from "preact/hooks"
import styles from "./Column.module.css";
import Card from "../Card/Card"

const comment = "This Column component is used to display set of tasks (contains the tasks), depending on their usecase (wheter those are completed, in progress or just added to do tasks."


export default function Column({
  title,
  items,
  type,
  deleteItem,
  handleArrowClick,
  commentMessage,
  handleEventMessage
}) {

  useEffect(() => {
    commentMessage(comment)
  }, [])


  const backgroundStyle ="orange";

  return html`<div
    className=${styles.column}
    style=${{ backgroundColor: backgroundStyle }}
  >
    <div className=${styles.columnTitle}>${title}</div>
    <hr />
    <div className=${styles.cardsContainer}>
    <${Card} text="Some text" handleEventMessage=${handleEventMessage} />
    </div>
  </div>`;
}
