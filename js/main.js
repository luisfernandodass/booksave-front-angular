
var containerOfBook = document.getElementById("containerOfBook");
var container = document.getElementById("container-booksReadsList"); // Container branco
var buttonToAdd  = document.getElementById("toAdd"); // Botão de adicionar
var counter = document.getElementById("counter");  // Conta a quantidade de livros

function addBook(e){
  container.className = "container-booksReadsList"
  let getInput = document.getElementById("inputBook"); // Pega o nome do livro no input.
  
  let row = document.createElement("tr");    // Cria a linha do livro
  row.setAttribute("id", getInput.value);    // Atualizar o valor do ID para o nome do livro.
  row.className += 'containerRow'; 
  row.innerHTML += '<p class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye" onclick="see(event)"></i><i class="fas fa-pen-square pen" ></i><i class="fas fa-minus-circle delete" onclick="removeBook(event)"></i></div> ';
  
  containerOfBook.appendChild(row); // Adiciona o livro na tabela
 
   // Abaixo a parte de contagem dos livros
  let qntdBook = document.getElementsByTagName('tr').length; // Incrementa a quantidade de livros, conforme o user for adicionando.
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}

function nameBook(event){
  return event.target;
}

// Abaixo acesso o elemento navegando pelo DOM
function see(event){
  var deleteButton, parentButton, grandParentButton, greatGrandFather;
  seeButton = nameBook(event);                        // Botão delete
  parentButton = seeButton.parentNode;                // Pega o pai do botão delete (actions)
  grandParentButton = parentButton.parentNode;        // Pega o pai do actions (a tag 'tr' || a class 'containerRow') - a linha do livro
  greatGrandFather = grandParentButton.firstChild.textContent; // Pega o texto da tag <p> (nome do livro)
  alert(greatGrandFather);
}

// Abaixo acesso o elemento navegando pelo DOM
function removeBook(event){
  var deleteButton, parentButton, grandParentButton, greatGrandFather;
  deleteButton = nameBook(event);                       // Botão delete
  parentButton = deleteButton.parentNode;                // Pega o pai do botão delete (actions)
  grandParentButton = parentButton.parentNode;     // Pega o pai do actions (a tag 'tr' || a class 'containerRow') - a linha do livro
  greatGrandFather = grandParentButton.parentNode; // Pega o pai do containerRow (containerOfBook)
  greatGrandFather.removeChild(grandParentButton);

  // Abaixo a parte de contagem dos livros
  let qntdBook = document.getElementsByTagName('tr').length--;  // Decrementa a quantidade de livros, conforme o user for excluindo.
    if(qntdBook === 0){
      counter.textContent =  ""; // Remove a contagem dos livros.
      container.className = ""   // Remove o container branco.
    } else if (qntdBook === 1) {
       counter.textContent =  qntdBook + " livros lido";
    } else {
       counter.textContent =  qntdBook + " livros lidos";
    }   
}

buttonToAdd.addEventListener('click', addBook, false);