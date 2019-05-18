
// getting the reference here
const form = document.querySelector('#bookApp');
const tableData = document.querySelector('#bookBody');


// Book Class here
class Book {
    constructor(name, author, id, pages) {
        this.name = name;
        this.author = author;
        this.id = id;
        this.pages = pages;
    }
}
var num = 0
// Creating the UI Constructor here
class uiMaterial {

    addBook(book) {
        num++;
        // getting the reference of the thead to insert the elements dynamically
        const thead = document.querySelector('#bookBody');

        // creating table elements
        const tr = document.createElement('tr');
        tr.className = 'text-white'

        // adding the element to the html
        tr.innerHTML =
            `<td>${num}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.id}</td>
            <td><a href=#><i class="fas fa-trash"></i></a></td>`

        // appending the list
        thead.appendChild(tr)

    }



    deleteData(target) {
        // traversing the DOM here
        if (target.className === 'fas fa-trash') {
            target.parentElement.parentElement.parentElement.remove()
        }


    }


    showAlert(msg, cls) {
        // getting the msg div
        const message = document.querySelector('#message');

        // creating div here
        const alertDiv = document.createElement('div');

        // adding class
        alertDiv.className = cls;

        // adding text 
        alertDiv.textContent = msg;

        // appending
        message.appendChild(alertDiv);


        // clearing the alert here
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)


    }

    clearInput() {

        // clearing the form values
        document.querySelector('#bookName').value = '';
        document.querySelector('#bookAuthor').value = '';
        document.querySelector('#bookId').value = '';
        document.querySelector('#bookPages').value = ''
    }
}



// Local Storage Class here
class localStorageData {

    // getting the saved data
    static getData() {


        // getting the saved data from loca;Storage
        let items = localStorage.getItem('books')


        return items !== null ? JSON.parse(items) : [];


    }

    
    // displaying the data
    static displayData() {

        const books = localStorageData.getData();

        books.forEach((item) => {
            const ui = new uiMaterial();

            // adding data to the UI from local storage
            ui.addBook(item)
        })

    }

    // adding the data to local storage
    static addData(book) {

        // getting the return data here
        const books = localStorageData.getData();

        // pushing the entered data
        books.push(book);

        // saving in the local Storage
        localStorage.setItem('books', JSON.stringify(books));

    }

    // removing data from local storage as well
    static removeData(id) {

        const books = localStorageData.getData();

        books.forEach((item, index) => {
            if (item.id === id) {
                books.splice(index, 1);
            }

        })

        localStorage.setItem('books', JSON.stringify(books));

    }


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
    if (name === '' || author === '' || id === '' || pages === '') {

        // showing the alert
        ui.showAlert('Please add all fields..!', 'alert alert-danger');

    }
    else {
        // adding book to the table
        ui.addBook(book);

        // passing the entered data
        localStorageData.addData(book)

        // clearing input fields
        ui.clearInput();

        // showing the successful alert
        ui.showAlert('Book has been added!', 'alert alert-success');


    }


})


// removing the element here
// using event delegation here
tableData.addEventListener('click', (e) => {

    // passing the delete class here
    ui = new uiMaterial();

    // deleting the data
    ui.deleteData(e.target);

    // deleting the data from the localStorage
    // here passing the id num
    localStorageData.removeData(e.target.parentElement.parentElement.previousElementSibling.textContent)


    // showing the alert here
    ui.showAlert('Book Deleted Successfully!', 'alert alert-success');

    // prevent the default behaviour
    e.preventDefault();

})

// DOM Load Event
document.addEventListener('DOMContentLoaded', localStorageData.displayData)