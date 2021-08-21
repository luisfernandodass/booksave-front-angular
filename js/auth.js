  const btn = document.querySelector(".btnLogin");
  const inputEmail = document.querySelector(".inputEmail");
  const inputPassword = document.querySelector(".inputPassword");
  const errorLogin = document.querySelector(".errorLogin");

  btn.addEventListener("click", function () {
    firebase
      .auth()
      .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
      .then(function (result) {
        window.location.replace("save-book.html");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        errorLogin.textContent =
          "Sua senha ou e-mail está incorreto! Tente novamente!";
      });
  });