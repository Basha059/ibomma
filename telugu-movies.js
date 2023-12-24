document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const movieContainer = document.getElementById('movieContainer');

    // Sample movie data
    const movies = [
        { title: 'Animal', image: 'img20.jpg' },
        // Add more movie objects as needed
    ];

    // Initial render
    renderMovies(movies);

    // Add event listener for the search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        renderMovies(filteredMovies);
    });

    // Function to render movies
    function renderMovies(movieList) {
        movieContainer.innerHTML = ''; // Clear previous content

        movieList.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie1');

            const image = document.createElement('img');
            image.src = movie.image;
            image.alt = movie.title;

            const paragraph = document.createElement('p');
            paragraph.textContent = movie.title;
            paragraph.style.color = '#fff';

            movieDiv.appendChild(image);
            movieDiv.appendChild(paragraph);

            movieContainer.appendChild(movieDiv);
        });
    }
});
