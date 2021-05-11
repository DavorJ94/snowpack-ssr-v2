import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import router from "./router.js"



ReactDOM.render(
  <React.StrictMode>
    <Navigacija />
  </React.StrictMode>,
  document.getElementById("navbar")
);
ReactDOM.render(
  <React.StrictMode>
    <Kartice />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(
  <React.StrictMode>
    <Thrash />
  </React.StrictMode>,
  document.getElementById("root-2")
);

const router = new Navigo('/');

const toDoAppItem = document.getElementById("root")
const trashItem = document.getElementById("root-2")

router.on('trash', function () {
    toDoAppItem.style.display = "none"
  });

  router.on('', function () {
    trashItem.style.display = "none"
  });

  router.resolve();


  document.querySelectorAll("a").forEach(e => {
    
    e.addEventListener("click", event => {
         
      event.preventDefault();
      router.navigate(e.pathname);
    })
  })