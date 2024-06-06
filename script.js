const addBtn = document.querySelector("#addBtn");
const submitBtn = document.querySelector("#submitBtn");
const dialogBox = document.querySelector("dialog");
const bookForm = document.querySelector("#bookForm");
const libraryDiv = document.querySelector("#library");

const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    displayBooks();
    console.log(myLibrary)
}

function displayBooks() {
    const existingBooks = document.querySelectorAll('.card');
    existingBooks.forEach(book => book.remove())

    myLibrary.forEach((book, index) => {
        console.log(`index: ${index}`)
        const ol = document.createElement('ol');
        ol.classList.add('card');
        ol.setAttribute('data', index);
        const titleLi = document.createElement('li');
        titleLi.textContent = book.title;
        ol.append(titleLi);
        const authorLi = document.createElement('li');
        authorLi.textContent = book.author;
        ol.append(authorLi);
        const pagesLi = document.createElement('li');
        pagesLi.textContent = book.pages;
        ol.append(pagesLi);
        const isReadLi = document.createElement('li');
        isReadLi.textContent = book.isRead;
        ol.append(isReadLi);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove"
        deleteBtn.classList.add('delete')
        ol.append(deleteBtn);
        libraryDiv.append(ol);
    });
}

addBtn.addEventListener("click", () => {
    console.log("clicked");
    dialogBox.showModal();
});

submitBtn.addEventListener("click", (e) => {
    console.log("submitted")
    e.preventDefault();

    const formData = new FormData(bookForm);
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const isRead = formData.get("isRead");
    
    const book = new Book(title, author, pages, isRead);
    addBookToLibrary(book);
    bookForm.reset();
    dialogBox.close();
});
