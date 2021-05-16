var containerOfBook = document.getElementById("containerOfBook");
var buttonToAdd  = document.getElementById("toAdd");
 var counter = document.getElementById("counter");
function addBook(e){
  let getInput = document.getElementById("inputBook"); // Get the input book name.
  
  let row = document.createElement("tr");
 
  row.id = 'containerRow'; 
  row.innerHTML = '<p id="nameBook" class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye" onclick="read()"></i><i class="fas fa-pen-square pen" onclick="update()"></i><i class="fas fa-minus-circle delete" onclick="removeBook()"></i></div> ';
  
  containerOfBook.appendChild(row);
}

function counterBook(){
 
  var qntdBook = document.getElementsByTagName('tr').length;
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}

function removeBook(e){
   let row = document.getElementById('containerRow');  

  if(containerOfBook){
    containerOfBook.removeChild(row);
   
    var qntdBook = document.getElementsByTagName('tr').length--;
    counter.textContent =  qntdBook + " livros lidos";
  }
}

buttonToAdd.addEventListener('click', addBook, false);
buttonToAdd.addEventListener('click', counterBook, false);