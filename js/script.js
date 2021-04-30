const button = document.getElementById("toAdd");

const getAllList = document.getElementsByTagName("li");

button.addEventListener("click", function(){
    var getInput = document.getElementById("inputBook").value;

        if(getAllList.length > 0){

            for(var i = 0; i < getAllList.length; 1){
                getAllList[i].textContent = getInput;
            }
        }
        

        
       
})  

/*
var getInput = document.getElementById("inputBook").value;

var list = getAllList[0];

list.textContent = getInput;

list = getAllList[1];

list.textContent = getInput;
*/