







// Pega o button.
const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook").value;

let getAllList = document.getElementsByClassName("list-js");

// Ativa o button no click
button.addEventListener("click", function(){

   getAllList[3].textContent = getInput;

  document.getElementById("inputBook").value = '';  


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