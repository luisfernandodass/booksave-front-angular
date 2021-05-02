







// Pega o button.
const button = document.getElementById("toAdd");

// Pega o nome do livro no input.
let getInput = document.getElementById("inputBook").value;

let bookList = document.getElementsByClassName("list-js")[0];

// Ativa o button no click
button.addEventListener("click", function(){

   bookList.textContent = getInput;

 


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