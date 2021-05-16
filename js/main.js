var containerOfBook = document.getElementById("containerOfBook");
var buttonToAdd  = document.getElementById("toAdd");
var counter = document.getElementById("counter");

function addBook(e){
  let getInput = document.getElementById("inputBook"); // Get the input book name.
  
  let row = document.createElement("tr");
 
  row.id = 'containerRow'; 
  row.innerHTML = '<p id="nameBook" class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye"></i><i id="update" class="fas fa-pen-square pen"></i><i class="fas fa-minus-circle delete" onclick="removeBook()"></i></div> ';
  
  containerOfBook.appendChild(row);
}

function counterBook(){
 
  let qntdBook = document.getElementsByTagName('tr').length;
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}

function updateBook(){
  var update  = document.getElementById("update");
  prompt("opaaaaaa");
}

function removeBook(e){
   let row = document.getElementById('containerRow');  

  if(containerOfBook){
    containerOfBook.removeChild(row);
   
    let qntdBook = document.getElementsByTagName('tr').length--;
    counter.textContent =  qntdBook + " livros lidos";
    if(qntdBook === 0){
      counter.textContent =  "";
    }
  }
}

buttonToAdd.addEventListener('click', addBook, false);
buttonToAdd.addEventListener('click', counterBook, false);
update.addEventListener('click', updateBook, false);