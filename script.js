const addBtn = document.querySelector("#addBtn");
const submitBtn = document.querySelector("#submitBtn");
const dialogBox = document.querySelector("dialog");

const myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {

}

function displayBooks() {
    myLibrary.forEach((book) => console.log(book));
}

addBtn.addEventListener("click", () => {
    console.log("clicked");
    dialogBox.showModal();
});

submitBtn.addEventListener("click", (e) => {
    console.log("submitted")
    e.preventDefault();
    dialogBox.close();

    const bookArr = document.querySelectorAll(".details");
    let result = "";

    bookArr.forEach((input) => result += input.value + ", ");
    
    if (result.charAt(result.length -2) === ",") {
        let index = result.length - 2;
        result = result.slice(0, index)
    }

    myLibrary.push(result);
    console.log(myLibrary);

});
