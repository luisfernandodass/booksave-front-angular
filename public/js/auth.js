function initAuth(){
  const btn = document.querySelector(".btnLogin");
  const inputEmail = document.querySelector(".inputEmail");
  const inputPassword = document.querySelector(".inputPassword");
  const errorWarningMsg = document.querySelector(".errorWarningMsg");

  btn.addEventListener("click", () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(inputEmail.value, inputPassword.value)
      .then(function (result) {
        window.location.replace("./public/save-book.html");
      })
      .catch(function (error) {
        error.code;
        error.message;
        inputEmail.classList.add("warningErrorInput");
        inputPassword.classList.add("warningErrorInput");
        errorWarningMsg.classList.add("active");
        errorWarningMsg.textContent =
          "Sua senha ou e-mail está incorreto!";
      });
  });
}

initAuth();