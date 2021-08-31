export { saveBookInStorage, removeBookInStorage, setBookInStorage }

function saveBookInStorage(row) {
  localStorage.setItem(row.textContent, row);
}

function removeBookInStorage(e) {
  const row = e.target.parentNode.parentNode;
  localStorage.removeItem(row.textContent);
}

function setBookInStorage() {
  const nameBooks = Object.keys(localStorage);
  const saveContainer = nameBooks.filter(
    (container) => container === "Container"
  );

  saveContainer.value = localStorage[saveContainer];
  nameBooks.forEach((nameBook) => {
    btnAddBook.elements[nameBook].value = localStorage[nameBook];
  });
}
