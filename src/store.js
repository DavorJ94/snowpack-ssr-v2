import emitter from "./eventEmitter";

let deletedItemsStore = []

emitter.addListener("itemDeleted", function (x) {
    deletedItemsStore.push(x)
  });

//   export async function getData() {
//     const data = await fetch(window.location.href.url)
//     console.log(data)
// }
  export default deletedItemsStore



