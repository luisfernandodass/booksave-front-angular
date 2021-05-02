







// Pega o button.
const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook");

let ul = document.getElementById("list-ul");

let li = document.createElement("li");
 li.className = 'list';


// Ativa o button no click
button.addEventListener("click", function(){


  li.setAttribute('id', getInput.value);
  li.appendChild(document.createTextNode(getInput.value));
  ul.appendChild(li);
  
})













/*
const button = document.getElementById("toAdd");

let getAllList = document.getElementsByTagName("li")[0];

if(getAllList > 1){
	getAllList ++;
}


let getInput = document.getElementById("inputBook").value;


button.addEventListener("click", function(){


   getAllList.textContent = getInput;

    

})  
*/
       
  






/*
 if ( getInput.length >= 1 ){

   	 for(var i = 0; i < getAllList.length; i){
                getAllList[i].textContent = getInput;
            } 
   } 
*/