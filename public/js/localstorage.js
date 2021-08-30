export { saveBookInStorage, setBookInStorage}

function saveBookInStorage(a) {
  localStorage.setItem(a.textContent, a);
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
