const addTodo = document.querySelector(".add-todo");
const ul = document.querySelector("ul");
const head = document.querySelector(".head");
const search = document.querySelector(".head input");


///////////////////////////////////////////////////
// Add Todos

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if(e.length){
  ul.innerHTML +=
  `<li>
  <span>${addTodo.more.value.trim()}</span>
  <ion-icon class="icon" name="trash-outline"></ion-icon>
  </li>`;
  addTodo.reset();
  }

});


///////////////////////////////////////////////////
// Delete Todos

ul.addEventListener("click", (e) => {
  if(e.target.tagName === "ION-ICON"){
    e.target.parentElement.remove();
  }
});


///////////////////////////////////////////////////
// Search Todos

search.addEventListener("keyup", () => { 
  let look = search.value.trim().toLowerCase();
  
  Array.from(ul.children)
  .filter((e) => !e.textContent.toLowerCase().includes(look))
  .forEach((e) => e.classList.add("hide"));

  
  Array.from(ul.children)
  .filter((e) => e.textContent.toLowerCase().includes(look))
  .forEach((e) => e.classList.remove("hide"));
  
});


head.addEventListener("submit", (e) => {
  e.preventDefault();
});