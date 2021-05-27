var btn = document.getElementById("btn");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var errorLogin = document.getElementById("errorLogin");


btnLogin.addEventListener('click', function(){

  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function(result){
      window.location.replace('main.html')
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    errorLogin.textContent = "Sua senha ou e-mail está incorreto! Tente novamente!";

  });
});

