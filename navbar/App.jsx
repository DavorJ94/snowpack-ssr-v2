import React from "react";
import styles from "./App.module.css";

export default function App() {
  return (
      <nav className={styles.nav}>
        <a href="/" className={styles.link}>
          To do app
        </a>
        <a href="/trash" className={styles.link}>
          Trash
        </a>
      </nav>
  );
}
