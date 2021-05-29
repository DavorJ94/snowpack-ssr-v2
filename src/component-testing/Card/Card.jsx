import { h } from "preact";
import { html } from "htm/preact";
import {useEffect} from "preact/hooks"
import styles from "./Card.module.css";

const comment = "This Card/Task component is used to display tasks, with options to be deleted (sent to trash) and moved to different sections (in progress, completed, to do)."

export default function Card({ text, handleEventMessage, commentMessage = "" }) {
  useEffect(() => {
    if (commentMessage !== "")
    commentMessage(comment)
  }, [])
  

  return (<div className={styles.cardComponent}>
    <div
      className={styles.trashCan}
      onClick={(e) => {
        handleEventMessage(`event: { type: ${e.type}, function: deleteItem(id), emitter: emit("itemDeleted") }, data: {id: 1}`)
      }}
    ></div>
    <p className={styles.cardText}>{text}</p>
  <div
  className={styles.rightCircle}
  onClick={(e) => {
    handleEventMessage(`event: { type: ${e.type}, function: handleArrowClick() }, data: {id: 1, status: 'to do'}`)
  }}
></div>
</div>)
  
}
