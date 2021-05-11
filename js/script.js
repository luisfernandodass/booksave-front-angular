const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){
   let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("li");
 
  li.className = 'actions';

  li.id = 'aaa';
  li.innerHTML = '<i class="fas fa-eye eye"></i> '
  li.innerHTML += '<i class="fas fa-pen-square pen"></i>'
  li.innerHTML += '<i class="fas fa-minus-circle delete" onclick="exclude()"></i>'
  
 
  li.appendChild(document.createTextNode(getInput.value));

  ul.appendChild(li);


  
})

function exclude(e){
  
  var li = document.getElementById('aaa');

   let ul = document.getElementById("list-ul");

  if(ul){
    ul.removeChild(li);
  }
}