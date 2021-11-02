import { counterDecrease } from "./counter-book.js";
import { removeBookInStorage,} from "./localstorage.js"

export default function deleteBook() {
    const table = document.querySelector(".table"); // Container branco
    const btnDeleteBook = document.querySelectorAll(".delete");
    btnDeleteBook.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        table.removeChild(e.target.parentNode.parentNode);
        counterDecrease();
        removeBookInStorage(e.target.parentNode.parentNode);
      });
    });
  }
