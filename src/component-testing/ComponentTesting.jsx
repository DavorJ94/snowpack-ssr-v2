import { h } from "preact";
import { html } from "htm/preact";
import { useState } from "preact/hooks";
import styles from "./componentTesting.module.css";
import Card from "./Card/Card";
import Column from "./Column/Column"


function ComponentTesting() {
  const [eventMessage, setEventMessage] = useState("")
  const [commentMessage, setCommentMessage] = useState("")
  const [currentElement, setCurrentElement] = useState("")

  function handleEventMessage(input) {
    setEventMessage(input)
  }

  function handleCommentMessage(input) {
    setCommentMessage(input)
  }

  function handleChangeComponent(e) {
    const navText = e.target.innerText
    if (navText === "Card") setCurrentElement(<Card text="Some text" handleEventMessage={handleEventMessage} commentMessage={handleCommentMessage} />)
    if (navText === "Column") setCurrentElement(<Column handleEventMessage={handleEventMessage} commentMessage={handleCommentMessage} />)
  }



  return (
    <div className={styles.outerDiv}>
      <div className={styles.subNavbar}>
        <div onClick={e => handleChangeComponent(e)} className={styles.subNavItem}>Card</div>
        <div onClick={e => handleChangeComponent(e)} className={styles.subNavItem}>Column</div>

      </div>
      <div className={styles.componentSpace}>
        {currentElement}
      </div>
      <div className={styles.eventCommentContainer}>
        <div className={styles.commentWindow}>{commentMessage}</div>
        <div className={styles.eventWindow}>{eventMessage}</div>
      </div>
    </div>
  )
}

export default ComponentTesting;
