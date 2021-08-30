import { counterIncrease } from "./counter-book.js";
import seeBook from "./see-book.js"
import deleteBook from "./delete-book.js"

export default function addBook() {
    const btnAddBook = document.querySelector(".toAdd");
    const table = document.querySelector(".table"); 

    btnAddBook.addEventListener("click", () => {
      let input = document.querySelector(".inputBook");
      let row = document.createElement("tr");

      row.classList.add("containerRow");
      row.innerHTML += '<p class="nameBook">' + input.value + "</p>";
      row.innerHTML += `<div class="actions">
      <i class="fas fa-eye eye"></i>
      <i class="fas fa-pen-square pen"></i>
      <i class="fas fa-minus-circle delete"></i>
      </div> `;

      table.appendChild(row);
      counterIncrease();
      seeBook();
      deleteBook()
    });
  }