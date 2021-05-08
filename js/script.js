function adicionar(e){
  let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("li");

  li.className = 'list';
  li.innerHTML = '<i class="fas fa-eye eye"></i> <i class="fas fa-pen-square pen"></i><i class="fas fa-minus-circle delete"></i>'
  
  li.setAttribute('id', getInput.value);
  li.appendChild(document.createTextNode(getInput.value));
  
  ul.appendChild(li);
 
}
 
const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){
    adicionar(e);
})

function excluir(e){
   
}


const exclude = document.getElementByClassName('delete');
exclude.addEventListener("click", function(e){ 
        excluir(e);
})   
