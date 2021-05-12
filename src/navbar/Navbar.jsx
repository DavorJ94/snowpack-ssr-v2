import { h } from "preact";
import { html } from "htm/preact";
import styles from "./navbar.module.css";

function Navbar() {
  return html`<nav className=${styles.nav}>
    <a href="/" className=${styles.link}> To do app </a>
    <a href="/trash" className=${styles.link}> Trash </a>
  </nav>`;
}

export default Navbar;
