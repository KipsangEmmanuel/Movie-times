document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#todo-list ul')
    const forms = document.forms;

    const storedItems = JSON.parse(localStorage.getItem('items')) || [];

    function appendItems(itemObject) {
        const li = document.createElement('li');
        li.innerHTML = `
        <span class="name">${itemObject.name}</span>
        <span class="date">${itemObject.date}</span>
        <span class="delete">delete</span>
        `
        list.appendChild(li)
    }

    const addForm = forms['add-item'];

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value
        const itemDate = new Date().toLocaleString();

        const itemObject = {
            name: value,
            date: itemDate
        }


        storedItems.push(itemObject)

        updateLocalStorage();

        appendItems(itemObject);


    })

    function updateLocalStorage() {
        localStorage.setItem('Items', JSON.stringify(storedItems))
    }


})