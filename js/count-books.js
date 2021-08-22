let counter = document.querySelector(".counter");
let howManyBooks = document.getElementsByTagName("tr").length;
const container = document.querySelector(".container-booksReadsList");

export function increaseQuantityOfBooks() {
  howManyBooks++;
  if (howManyBooks === 1) {
    counter.innerText = `${howManyBooks} livro lido`;
    container.style.display = "block";
  } else {
    counter.innerText = `${howManyBooks} livros lidos`;
  }
}

export function decreaseQuantityOfBooks() {
  howManyBooks--;
  if (howManyBooks === 0) {
    counter.innerText = "";
    container.style.display = "none";
  } else if (howManyBooks === 1) {
    counter.innerText = `${howManyBooks} livro lido`;
  } else {
    counter.innerText = `${howManyBooks} livros lidos`;
  }
}
