
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
var id = 0
// Creating the UI Constructor here
class uiMaterial {

    addBook(book) {
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
    <td>${book.id}</td>
    <td>${book.pages}</td>
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