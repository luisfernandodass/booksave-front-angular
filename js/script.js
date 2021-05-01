const button = document.getElementById("toAdd");

const getAllList = document.getElementsByTagName("li");

button.addEventListener("click", function(){

    var getInput = document.getElementById("inputBook").value;

   if ( getInput.length >= 1 ){

   	 for(var i = 0; i < getAllList.length; i){
                getAllList[i].textContent = getInput;
            } 
   } 

})  
       
        /*
 var list = getAllList[0];

     list.textContent = getInput;   
        */

        
       


/*
if(getAllList.length > 0){
           
*/
