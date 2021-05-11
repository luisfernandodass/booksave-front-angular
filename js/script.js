const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){
   let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("li");
 
  li.className = 'actions';
  li.innerHTML = '<i class="fas fa-eye eye"></i> '
  li.innerHTML += '<i class="fas fa-pen-square pen"></i>'
  li.innerHTML += '<i id="ex" class="fas fa-minus-circle delete"></i>'
  
 
  li.appendChild(document.createTextNode(getInput.value));

  ul.appendChild(li);
})
