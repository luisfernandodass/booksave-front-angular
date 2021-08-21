  let counter = document.querySelector(".counter"); // Conta a quantidade de livros
  let howManyBooks = document.getElementsByTagName("tr").length;

  export function increaseQuantityOfBooks() {
    howManyBooks++;
    howManyBooks === 1
      ? (counter.innerText = `${howManyBooks} livro lido`)
      : (counter.innerText = `${howManyBooks} livros lidos`);
  }

  export function decreaseQuantityOfBooks(event) {
    howManyBooks--;
    if (howManyBooks === 0) {
      counter.innerText = ""; // Remove a contagem dos livros.
      container.classList.remove("container-booksReadsList"); // Remove o container branco.
    } else if (howManyBooks === 1) {
      counter.innerText = `${howManyBooks} livro lido`;
    } else {
      counter.innerText = `${howManyBooks} livros lidos`;
    }
  }