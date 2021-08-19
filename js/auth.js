var btn = document.querySelector(".btnLogin");
var inputEmail = document.querySelector(".inputEmail");
var inputPassword = document.querySelector(".inputPassword");
var errorLogin = document.querySelector(".errorLogin");


btn.addEventListener('click', function(){

  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function(result){
      window.location.replace('save-book.html')
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    errorLogin.textContent = "Sua senha ou e-mail está incorreto! Tente novamente!";

  });
});

