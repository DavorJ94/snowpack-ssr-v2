function IdGenerator() {
  const deletedItems = JSON.parse(localStorage.getItem("deletedItems"));
  const toDoItems = JSON.parse(localStorage.getItem("toDoItems"));

  const allItemsInLocalStorage = [...deletedItems, ...toDoItems];

  const parsedArray = allItemsInLocalStorage.map((x) => +x.id);

  let i = 1;
  while (true) {
    if (parsedArray.includes(i)) i++;
    else break;
  }
  return i;
}

export default IdGenerator;
