
// getting the reference here
const form = document.querySelector('#bookApp');



// Book Constructor here
function Book(name, author, id, pages) {
    this.name = name;
    this.author = author;
    this.id = id;
    this.pages = pages;
}

// Creating the UI Constructor here
function uiMaterial() { }





//=====================================Prototyping The Methods Here======================================//

// adding the book
uiMaterial.prototype.addBook = (book) => {

    // getting the reference of the thead to insert the elements dynamically
    const thead = document.querySelector('#bookBody');

    // creating table elements
    const tr = document.createElement('tr');

    // adding the element to the html
    tr.innerHTML =
        `<td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.id}</td>
    <td>${book.pages}</td>
    <td><a href=# class="del"><i class="fas fa-trash"></i></a></td>`

    // appending the list
    thead.appendChild(tr)

}



// clearing the input method
uiMaterial.prototype.clearInput = () => {

    // clearing the form values
    document.querySelector('#bookName').value = '';
    document.querySelector('#bookAuthor').value = '';
    document.querySelector('#bookId').value = '';
    document.querySelector('#bookPages').value = ''

}


// showing the alert here
uiMaterial.prototype.showAlert = (msg,clas) =>{

    // getting the parent element here
    const parent = document.querySelector('.container');

    // getting the form to insert before
    const form = document.querySelector('#bookApp');


    // creating div here
    const div = document.createElement('div');

    // adding class
    div.className = clas;

    // adding text 
    div.textContent = msg;

    // adding to the DOM
    parent.insertBefore(div,form)


    // clearing the alert here
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000)


} 


// adding the event listener
form.addEventListener('submit', (e) => {

    // getting the form values
    const name = document.querySelector('#bookName').value;
    const author = document.querySelector('#bookAuthor').value;
    const id = document.querySelector('#bookId').value;
    const pages = document.querySelector('#bookPages').value;

    // preventing the default behaviour
    e.preventDefault();

    // passing the values to the constructor function
    // Instantiating the Book
    const book = new Book(name, author, id, pages);

    // Instantiating the Ui material
    const ui = new uiMaterial();

    // validating the inputs
    if (name ==='' || author === '' || id === '' || pages === '') {
        
        // showing the alert
        ui.showAlert('Please add all fields..!','alert alert-danger');

    }
    else {
        // adding book to the table
        ui.addBook(book);

        // clearing input fields
        ui.clearInput();

        // showing the successful alert
        ui.showAlert('Book has been added!','alert alert-success');


    }


})
