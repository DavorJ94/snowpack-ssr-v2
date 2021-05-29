import { h, render } from "preact";
import { html } from "htm/preact";
import Card from "./Card";
import Homepage from "./Column";

render(html`<${Card} />`, document.getElementById("navbar"));

render(html`<${Column} />`, document.getElementById("homepage"));
