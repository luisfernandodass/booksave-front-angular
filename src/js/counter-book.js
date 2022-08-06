export { counterIncrease, counterDecrease };

// I declared counter and howManyBook twice to not make it global.

function counterIncrease() {
  const containerBooks = document.querySelector(".container-books");
  let counter = document.querySelector(".counter");
  let howManyBooks = document.getElementsByTagName("tr").length - 1;

  howManyBooks++;
  if (howManyBooks === 1) {
    containerBooks.style.display = "block"
    counter.innerText = `${howManyBooks} livro lido`;
  } else {
    counter.innerText = `${howManyBooks} livros lidos`;
  }
}

function counterDecrease() {
  const containerBooks = document.querySelector(".container-books");
  let counter = document.querySelector(".counter");
  let howManyBooks = document.getElementsByTagName("tr").length + 1;

  howManyBooks--;
  if (howManyBooks === 0) {
    counter.innerText = "";
    containerBooks.style.display = "none";
  } else if (howManyBooks === 1) {
    counter.innerText = `${howManyBooks} livro lido`;
  } else {
    counter.innerText = `${howManyBooks} livros lidos`;
  }
}