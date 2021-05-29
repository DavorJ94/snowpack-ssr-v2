import { h } from "preact";
import { html } from "htm/preact";
import emitter from "../../eventEmitter";
import styles from "./navbar.module.css";

window.navigateTo = function navigateTo(input) {
  const newUrlIS =  window.location.origin + input;
  history.pushState({}, null, newUrlIS);
}

function Navbar() {

  function handleClick(e) {
    e.preventDefault()
    console.log(e)
    emitter.emit("routing",{route:e.path})

    console.log({event:"routing",message:{route:e.path}})
  }

  return html`<nav className=${styles.nav}>
    <a href="/" className=${styles.link} onClick=${e => handleClick(e)}> To do app </a>
    <a href="/trash" className=${styles.link} onClick=${e => handleClick(e)}> Trash </a>
  </nav>`;
}

export default Navbar;
