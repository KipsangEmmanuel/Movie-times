document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#movie-list ul')
    const forms = document.forms;


    list.addEventListener('click', function(e) {
        e.preventDefault()
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();

        //create elements
        const value = addForm.querySelector('input[type="text"]').value;


        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const movieDate = document.createElement('span');
        const deleteBtn = document.createElement('span');

        movieName.textContent = value;
        localStorage.setItem('movies', JSON.stringify(value))

        // const newDate = new Date()

        movieDate.textContent = new Date().toLocaleString()
        deleteBtn.textContent = 'delete';

        movieName.classList.add('name');
        movieDate.classList.add('date');
        deleteBtn.classList.add('delete');


        li.appendChild(movieName);
        li.appendChild(movieDate);
        li.appendChild(deleteBtn);
        list.appendChild(li);


        addForm.querySelector('input[type="text"]').value = '';

    })

})