const button = document.getElementById("toAdd");

button.addEventListener("click", function(){

    var getInput = document.getElementById("inputBook").value;

    var bookOne = document.getElementById("bookOne");

    bookOne.textContent = getInput;


})  