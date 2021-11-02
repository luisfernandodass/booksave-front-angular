export { saveBookInStorage, removeBookInStorage };
let arrayStorage = new Array();

function saveBookInStorage(row) {
  arrayStorage.push(row.outerHTML);
  localStorage.setItem("Book", JSON.stringify(arrayStorage));
}

function removeBookInStorage(row) {
  arrayStorage.pop()
  localStorage.setItem("Book", JSON.stringify(arrayStorage));
}

/**
 * 
 * function removeBookInStorage(row) {
  arrayStorage.pop(row);
  localStorage.setItem("Book", JSON.stringify(arrayStorage));
  console.log(arrayStorage);
}
 */

/**
 * 
 * function setBookInStorage() {
  const nameBooks = Object.keys(localStorage);
  const saveContainer = nameBooks.filter(
    (container) => container === "Container"
  );

  saveContainer.value = localStorage[saveContainer];
  nameBooks.forEach((nameBook) => {
    btnAddBook.elements[nameBook].value = localStorage[nameBook];
  });
}

 */
