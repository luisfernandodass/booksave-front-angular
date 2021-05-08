const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook");

let ul = document.getElementById("list-ul");


// Ativa o button no click
button.addEventListener("click", function(){

 let li = document.createElement("li");
  li.className = 'list';

  li.setAttribute('id', getInput.value);
  li.appendChild(document.createTextNode(getInput.value));
  ul.appendChild(li);

  let element = document.getElementsByTagName("li");
  
  for(var i = 5; i > 0; i++){
  	
    
     let containerQuantityBooks = document.getElementById("container-quantityBooks"); 
   
      containerQuantityBooks.textContent =  "Você já leu " + i + " livros";             
 
  }
 

})

/*
 if(element){
    
     let containerQuantityBooks = document.getElementById("container-quantityBooks"); 
   
      containerQuantityBooks.textContent =  "Você já leu " + i + " livros";             
  }
*/