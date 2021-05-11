/*
const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){
   let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("li");
 
  li.className = 'actions';

  li.id = 'act';
  li.innerHTML = '<i class="fas fa-eye eye"></i> '
  li.innerHTML += '<i class="fas fa-pen-square pen"></i>'
  li.innerHTML += '<i id="exclude" class="fas fa-minus-circle delete" onclick="exclude()"></i>'
  
 
  li.appendChild(document.createTextNode(getInput.value));

  ul.appendChild(li);

})
*/

const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){

  let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("li");
 
  li.className = 'actions';

  li.id += 'act';
  li.textContent = getInput.value;
  li.innerHTML += '<i class="fas fa-eye eye"></i> '
  li.innerHTML += '<i class="fas fa-pen-square pen"></i>'
  li.innerHTML += '<i id="exclude" class="fas fa-minus-circle delete" onclick="exclude()"></i>'
  
  ul.appendChild(li);
})

function exclude(e){
  
   let li = document.getElementById('act');

   let ul = document.getElementById("list-ul");

  if(ul){
    ul.removeChild(li);
  }
}

