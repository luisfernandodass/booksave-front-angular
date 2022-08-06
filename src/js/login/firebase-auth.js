function initAuth() {
  const btn = document.querySelector(".btnLogin");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector(".inputEmail");
    const password = document.querySelector(".inputPassword");
    const errorMsg = document.querySelector(".errorWarningMsg");

    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(function (result) {
        window.location.replace("./public/save-book.html");
      })
      .catch(function (error) {
        error.code;
        error.message;
        email.classList.add("warningErrorInput");
        password.classList.add("warningErrorInput");
        errorMsg.classList.add("active");
        errorMsg.textContent = "Sua senha ou e-mail está incorreto!";
      });
  });
}

initAuth();
