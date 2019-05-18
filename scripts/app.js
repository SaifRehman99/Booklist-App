// Book Constructor here
function Book(name, author, id, pages) {
    this.name = name;
    this.author = author;
    this.id = id;
    this.pages = pages;
}

// Creating the UI Constructor here
function uiMaterial(){}

// getting the reference here
const form = document.querySelector('#bookApp');

// adding the event listener
form.addEventListener('submit',(e)=> {

    // preventing the default behaviour
    e.preventDefault();

    // getting the form values
    const name = document.querySelector('#bookName').value;
    const author = document.querySelector('#bookAuthor').value;
    const id = document.querySelector('#bookId').value;
    const pages = document.querySelector('#bookPages').value;

    // passing the values to the constructor function
    const book = new Book(name,author,id,pages);
})
