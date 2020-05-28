// const headers = document.getElementsByTagName("h2");

// const list = document.getElementsByClassName('item');

// const button = document.getElementById('submit');

// console.log(button);

// The Query Selector

// The advantage of using the selector is that you can also grab CSS

// const headers = document.querySelector("h2");

// const list = document.querySelectorAll(".item");

// console.log(list);

/* Note: querySelectors: return us a nodelist; can hold node texts and comments
        
         The documents: returns us html collections; can only hold elements
         Types of Node: Element, ex: h1
*/

// const collectionItems = document.getElementsByClassName("item");
// const nodeItems = document.querySelector(".item");

// nodeItems.forEach(function (item) {
//   console.log(item);
// });

// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "item 3";
// //update the ammount of items that we have

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "item 4";

// todoList.appendChild(newItem); // This adds the element into our list items
// todoList.appendChild(anotherItem); // This adds the element into our list items

const todoList = document.querySelector("#todo-list");
const items = todoList.children;

const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem); // This adds the element into our list items
todoList.appendChild(anotherItem);

//update the ammount of items that we have
todoNr.innerText = items.length;

console.log(items);
