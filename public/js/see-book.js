export default function seeBook() {
  const btnSeeBook = document.querySelectorAll(".eye");
  btnSeeBook.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      alert(e.target.parentNode.previousElementSibling.textContent);
    });
  });
}
