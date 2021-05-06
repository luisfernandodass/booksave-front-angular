const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook");

let ul = document.getElementById("list-ul");
/*
function x(){
	for(index = 0; element.length > 0; index++){
  			let containerQuantityBooks = document.getElementById("container-quantityBooks"); 

      containerQuantityBooks.textContent =  "Você já leu " + 10 + " livros";
  }
}
*/

// Ativa o button no click
button.addEventListener("click", function(){

 let li = document.createElement("li");
  li.className = 'list';

  li.setAttribute('id', getInput.value);
  li.appendChild(document.createTextNode(getInput.value));
  ul.appendChild(li);

  let element = document.getElementsByTagName("li");



  if(element){

      let containerQuantityBooks = document.getElementById("container-quantityBooks"); 

      for(element = 1; element > 0; element++){
      	containerQuantityBooks.textContent =  "Você já leu " + element + " livros";
      }

      
  }
})
  /*
  function countItems(arr) {
  const countMap = Object.create(null);

  for (const element of arr) {
    if (!countMap[element]) {
      // Se ainda não existir elemento, definimos como um, já que
      // estamos na primeira ocorrência.
      countMap[element] = 1;
    } else {
      // Caso contrário, incrementamos um no número atual.
      countMap[element] += 1;
    }
  }
  
  return countMap;
}

const arr = ['1', '1', '2', '2', '2'];
console.log(countItems(arr));
let containerQuantityBooks = document.getElementById("container-quantityBooks"); 

      containerQuantityBooks.textContent =  "Você já leu " + (countItems(arr)) + " livros";
      

      /*

      for(const a of arr){
  		if(!element){
  			let containerQuantityBooks = document.getElementById("container-quantityBooks"); 

      containerQuantityBooks.textContent =  "Você já leu " + 10 + " livros";
  		}
  	}else {
  		let containerQuantityBooks = document.getElementById("container-quantityBooks"); 

      containerQuantityBooks.textContent =  "Você já leu " + 77 + " livros";
  	}

  	const arr = ['1', '1', '2', '2', '2'];

  	 return li;
  	 */