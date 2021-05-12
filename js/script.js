const add = document.getElementById("toAdd");
add.addEventListener("click", function(e){

  let getInput = document.getElementById("inputBook"); // Get the input book name.

  let ul = document.getElementById("list-ul"); // Get the biggest parentNode: ul
    
  let li = document.createElement("tr");
 
  

  li.id = 'act';
  li.innerHTML = '<p id="nameBook" class="nameBook">' + getInput.value + '</p>';
  li.innerHTML += '<div class="actions"><i class="fas fa-eye eye" onclick="read()"></i><i class="fas fa-pen-square pen" onclick="update()"></i><i id="exclude" class="fas fa-minus-circle delete" onclick="exclude()"></i></div> ';
  
  ul.appendChild(li);
})


function exclude(e){
  
   let li = document.getElementById('act');

   let ul = document.getElementById("list-ul");

  if(ul){
    ul.removeChild(li);
  }
}


function update(e){

  /*
  let li = document.getElementById('nameBook');

  li.textContent = "fffff";
  */

  let li = document.getElementById('act');

   let ul = document.getElementById("list-ul");

  if(ul){
    ul.replace(li, "kkkk");
  }
}


function read(e){
  let li = document.getElementById('nameBook');
  alert(li.textContent);
}