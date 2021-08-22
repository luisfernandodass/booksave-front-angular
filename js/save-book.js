import { increaseQuantityOfBooks, decreaseQuantityOfBooks } from "./count-books.js";

function initSaveBook() {
  const btnAddBook = document.querySelector(".toAdd");
  let targetButton, parentButton, grandParentButton, greatGrandFather;

  function addRow(e) {
    targetButton = e.target; // Pega o elemento alvo (delete button or getBook button)
    parentButton = targetButton.parentNode; // Get the parent of target button (class actions)
    grandParentButton = parentButton.parentNode; // Get the parent of the class actions (the tag 'tr' || a class 'containerRow') - a linha do livro
  }

  function addBook() {
    const containerOfBook = document.querySelector(".containerOfBook"); // Container branco
    let input = document.querySelector(".inputBook"); // Pega o nome do livro no input.
    let rowOfBook = document.createElement("tr"); // Cria a linha do livro


    rowOfBook.classList.add("containerRow");
    rowOfBook.innerHTML += '<p class="nameBook">' + input.value + "</p>";
    rowOfBook.innerHTML +=
      `<div class="actions">
      <i class="fas fa-eye eye"></i>
      <i class="fas fa-pen-square pen"></i>
      <i class="fas fa-minus-circle delete"></i>
      </div> `;

    containerOfBook.appendChild(rowOfBook); // Adiciona o livro na tabela
    increaseQuantityOfBooks();
    seeBook();
    removeBook();
  }
  btnAddBook.addEventListener("click", addBook);

  function seeBook() {
    const btnSeeBook = document.querySelectorAll(".eye");
    btnSeeBook.forEach(btn => {
      btn.addEventListener("click", (e) => {
        addRow(e);
        greatGrandFather = grandParentButton.firstChild.textContent; // Pega o texto da tag <p> (nome do livro)
        alert(greatGrandFather);
      })
    })
  }

  function removeBook() {
    const btnRemoveBook = document.querySelectorAll(".delete");
    btnRemoveBook.forEach(btn => {
      btn.addEventListener("click", (e) => {
        addRow(e);
        greatGrandFather = grandParentButton.parentNode; // Pega o pai do containerRow (containerOfBook)
        greatGrandFather.removeChild(grandParentButton);
        decreaseQuantityOfBooks();
      })
    })
  }
}
initSaveBook();
