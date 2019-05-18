
// getting the reference here
const form = document.querySelector('#bookApp');
const tableData = document.querySelector('#bookBody');



// Book Constructor here
function Book(name, author, id, pages) {
    this.name = name;
    this.author = author;
    this.id = id;
    this.pages = pages;
}

// Creating the UI Constructor here
function uiMaterial() { }


// Creating localstorage constructor

function localStorageData() { }


// Creating the localStorage methods here



// getting the data from the local storage
localStorageData.prototype.getData = () => {


    // getting the saved data from loca;Storage
    let items = localStorage.getItem('books')


    return items !== null ? JSON.parse(items) : [];


}


// display the data from the local storage
localStorageData.prototype.displayData = () => {


    const LS = new localStorageData()

    const data = LS.getData();

    data.forEach((item) => {
        const ui = new uiMaterial();

        // adding data to the UI from local storage
        ui.addBook(item);

    })


}


// add the data from the local storage
localStorageData.prototype.addData = (book) => {


    const LS = new localStorageData()

    const data = LS.getData();
    data.push(book);

    localStorage.setItem('books', JSON.stringify(data))

}


// remove the data from the local storage
localStorageData.prototype.removeData = (id) => {

    const LS = new localStorageData()

    const data = LS.getData();

    data.forEach((item,index)=>{
        if(item.id === id){
            data.splice(index,1);
        }
    })
    localStorage.setItem('books',JSON.stringify(data));

    console.log(id)

}



//=====================================Prototyping The Methods Here======================================//

var id = 0;

// adding the book
uiMaterial.prototype.addBook = (book) => {

    id++;
    // getting the reference of the thead to insert the elements dynamically
    const thead = document.querySelector('#bookBody');

    // creating table elements
    const tr = document.createElement('tr');
    tr.className = 'text-white'

    // adding the element to the html
    tr.innerHTML =
        `<td>${id}</td>
        <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.id}</td>
    <td><a href=#><i class="fas fa-trash"></i></a></td>`

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


// deleting the elements
uiMaterial.prototype.deleteData = (target) => {

    // traversing the DOM here
    if (target.className === 'fas fa-trash') {
        target.parentElement.parentElement.parentElement.remove()
    }

}

// showing the alert here
uiMaterial.prototype.showAlert = (msg, cls) => {

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

        // adding data in localStorage

        const LS = new localStorageData()
        LS.addData(book)


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

    ui.deleteData(e.target);

    const LS = new localStorageData();

    LS.removeData(e.target.parentElement.parentElement.previousElementSibling.textContent)

    // showing the alert here
    ui.showAlert('Book Deleted Successfully!', 'alert alert-success');

    // prevent the default behaviour
    e.preventDefault();

})


// DOM Load Event
const LS = new localStorageData()
document.addEventListener('DOMContentLoaded', LS.displayData)
