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