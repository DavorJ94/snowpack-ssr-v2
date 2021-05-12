import { h, render } from "preact";
import { html } from "htm/preact";
import Navigo from "navigo";
import Navbar from "./navbar/Navbar";
import Homepage from "./homepage/Homepage";
import TrashPage from "./trashPage/TrashPage";

const router = new Navigo("/");

render(html`<${Navbar} />`, document.getElementById("navbar"));
render(html`<${TrashPage} />`, document.getElementById("trash"));
render(html`<${Homepage} />`, document.getElementById("homepage"));

router
  .on("", () => {
    document.getElementById("homepage").style.display = "";
    document.getElementById("trash").style.display = "none";
  })
  .resolve();

router
  .on("trash", () => {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("trash").style.display = "";
  })
  .resolve();

document.querySelectorAll("a").forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    router.navigate(e.pathname);
  });
});
