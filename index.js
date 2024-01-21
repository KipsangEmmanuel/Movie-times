document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];

    storedMovies.forEach((item)=> {
        appendToList(item);
    });

    list.addEventListener('click', function(e) {
        e.preventDefault();
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            const movieName = li.querySelector('.name').textContent;
            removeItemFromLocalStorage(movieName);
        
            updateLocalStorage();
        }
    });

    
    function appendToList(movieObject) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="name">${movieObject.name}</span>
            <span class="date">${movieObject.date}</span>
            <span class="delete">delete</span>
        `;
        list.appendChild(li);
    }

    const addForm = forms['add-movie'];

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        const movieDate = new Date().toLocaleString();

        const movieObject = {
            name: value,
            date: movieDate
        };

        storedMovies.push(movieObject);

        updateLocalStorage();

        appendToList(movieObject);
        });

    function updateLocalStorage() {
        localStorage.setItem('movies', JSON.stringify(storedMovies));
    }
});


