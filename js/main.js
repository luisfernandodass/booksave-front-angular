const containerOfBook = document.getElementById("containerOfBook");  // Container branco
const container = document.getElementById("container-booksReadsList"); 
var counter = document.getElementById("counter");  // Conta a quantidade de livros
var targetButton, parentButton, grandParentButton, greatGrandFather;

function increaseQuantityOfBooks(){
  let qntdBook = document.getElementsByTagName('tr').length; // Incrementa a quantidade de livros, conforme o user for adicionando.
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}

function decreaseQuantityOfBooks(){
   let qntdBook = document.getElementsByTagName('tr').length--;  // Decrementa a quantidade de livros, conforme o user for excluindo.
    if(qntdBook === 0){
      counter.textContent =  ""; // Remove a contagem dos livros.
      container.className = ""   // Remove o container branco.
    } else if (qntdBook === 1) {
       counter.textContent =  qntdBook + " livro lido";
    } else {
       counter.textContent =  qntdBook + " livros lidos";
    }   
}

function getRowOfBook(event){
    targetButton = event.target;         // Pega o elemento alvo (delete button or getBook button)
    parentButton = targetButton.parentNode;       // Get the parent of target button (class actions)
    grandParentButton = parentButton.parentNode;  // Get the parent of the class actions (the tag 'tr' || a class 'containerRow') - a linha do livro
}

function addBook(event){
  container.className = "container-booksReadsList" // Faz aparecer o container branco
  let getInput = document.getElementById("inputBook"); // Pega o nome do livro no input.
  
  var b = [];

  let row = document.createElement("tr");    // Cria a linha do livro
  row.className += 'containerRow'; 
  row.innerHTML += '<p class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye" onclick="seeBook(event)"></i><i class="fas fa-pen-square pen" ></i><i class="fas fa-minus-circle delete" onclick="removeBook(event)"></i></div> ';
  
  containerOfBook.appendChild(row); // Adiciona o livro na tabela

  b.push(containerOfBook.appendChild(row).textContent);
  console.log(b);

  increaseQuantityOfBooks();
}


function seeBook(event){
  getRowOfBook(event);
  greatGrandFather = grandParentButton.firstChild.textContent;       // Pega o texto da tag <p> (nome do livro)
  alert(greatGrandFather);
}

function removeBook(event){ 
  getRowOfBook(event);
  greatGrandFather = grandParentButton.parentNode; // Pega o pai do containerRow (containerOfBook)
  greatGrandFather.removeChild(grandParentButton);
  localStorage.removeItem('book');
  decreaseQuantityOfBooks();
}