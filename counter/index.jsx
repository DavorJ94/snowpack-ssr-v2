import { h, hydrate } from "preact";
import Counter from "./Counter";

hydrate(<Counter />, document.getElementById("homepage"));
