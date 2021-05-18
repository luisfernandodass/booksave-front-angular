var containerOfBook = document.getElementById("containerOfBook");
var container = document.getElementById("container-booksReadsList");
var buttonToAdd  = document.getElementById("toAdd");
var counter = document.getElementById("counter");


function addBook(e){
  container.className = "container-booksReadsList"
  let getInput = document.getElementById("inputBook"); // Get the input book name.
  
  let row = document.createElement("tr");
  row[getInput];
  row.setAttribute("id", getInput.value);
  row.className += 'containerRow'; 
  row.innerHTML += '<p id="nameBook" class="nameBook">' + getInput.value + '</p>';
  row.innerHTML += '<div class="actions"><i class="fas fa-eye eye" onclick="see()"></i><i class="fas fa-pen-square pen" ></i><i class="fas fa-minus-circle delete" onclick="removeBook()"></i></div> ';
  
  containerOfBook.appendChild(row);
  console.log(row);
  
  let qntdBook = document.getElementsByTagName('tr').length;
  if (qntdBook === 1){
    counter.textContent =  qntdBook + " livro lido";
  } else {
    counter.textContent =  qntdBook + " livros lidos";
  }
}


function see(e){

    let row = document.querySelector('.containerRow').textContent;  
  
    alert(row);
  }


function removeBook(e){
  let row = document.querySelector('.containerRow');  

  if(containerOfBook){
    containerOfBook.removeChild(row);
   
    let qntdBook = document.getElementsByTagName('tr').length--;  
    if(qntdBook === 0){
      counter.textContent =  "";
      container.className = ""
    } else if (qntdBook === 1) {
       counter.textContent =  qntdBook + " livros lido";
    } else {
       counter.textContent =  qntdBook + " livros lidos";
    }   
  }
}

buttonToAdd.addEventListener('click', addBook, false);

