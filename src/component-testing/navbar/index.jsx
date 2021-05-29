import { h, render } from "preact";
import { html } from "htm/preact";
import Navigo from "navigo";
import emitter from "../../eventEmitter";
import Navbar from "./Navbar";

const router = new Navigo("/");

render(html`<${Navbar} />`, document.getElementById("navbar"));


emitter.addListener("routing", (m) => {
  router.navigate(m.route)
})
