const loading = document.querySelector('#loading');
const cards = document.querySelector('.cards');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const searchResultsDiv = document.querySelector('#searchResults');

let randomDogs = [];

loading.style.display = 'none';

/*searchForm.addEventListener('submit', e => {
    e.preventDefault();

    const searchValue = searchInput.value;

    if (searchValue != '') {
        getSearchResults(searchValue);
    } else {
        //getRandomDogs();

        createCards(randomDogs);
    }
});*/

searchInput.addEventListener('input', async e => {
    const searchValue = e.target.value;

    if (searchValue != '') {
        const data = await getSearchResults(searchValue);

        createSearchResults(data);
    } else {
        //getRandomDogs();

        createCards(randomDogs);
    }
});

async function fetchDogs(url) {
    loading.style.display = '';

    const result = await fetch(url);

    const data = await result.json();

    return data;
}

function createCards(dogs) {
    loading.style.display = 'none';
    cards.innerHTML = '';
    searchResultsDiv.innerHTML = '';

    dogs.forEach(dog => {
        const breed = dog.breeds[0]?.name ? dog.breeds[0].name : 'No details';
        const imgSrc = dog.url || `https://cdn2.thedogapi.com/images/${dog.breeds[0]?.reference_image_id}.jpg`;
        const weight = dog.breeds[0]?.weight.metric ? `${dog.breeds[0].weight.metric} kg` : 'No details';
        const height = dog.breeds[0]?.height.metric ? `${dog.breeds[0].height.metric} cm` : 'No details';
        const bredFor = dog.breeds[0]?.bred_for ? dog.breeds[0].bred_for : 'No details';
        const breedGroup = dog.breeds[0]?.breed_group ? dog.breeds[0].breed_group : 'No details';
        const lifeSpan = dog.breeds[0]?.life_span ? dog.breeds[0].life_span : 'No details';
        const details = dog.breeds[0]?.temperament ? dog.breeds[0].temperament : 'No details';

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${imgSrc}">
                </div>
                <div class="card-back">
                    <h1>${breed}</h1>
                    <ul>
                        <li><strong>Weight:</strong> ${weight}</li>
                        <li><strong>Height:</strong> ${height}</li>
                        <li><strong>Bred for:</strong> ${bredFor}</li>
                        <li><strong>Breed group:</strong> ${breedGroup}</li>
                        <li><strong>Life span:</strong> ${lifeSpan}</li>
                        <li><strong>Details:</strong> ${details}</li>
                    </ul>
                </div>
            </div>
        `;

        cards.appendChild(card);
    });
}

async function getSearchResults(value) {
    const result = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${value}`);

    const data = await result.json();

    return data;
}

function createSearchResults(results) {
    searchResultsDiv.innerHTML = '';

    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('search-result');

        resultDiv.textContent = result.name;

        resultDiv.addEventListener('click', async e => {
            const dog = await fetchDogs(`https://api.thedogapi.com/v1/images/search?breed_id=${result.id}`);

            createCards(dog);
        });

        searchResultsDiv.appendChild(resultDiv);
    });
}

async function getRandomDogs() {
    const dogs = await fetchDogs('https://api.thedogapi.com/v1/images/search?limit=12');

    return dogs;
}

async function main() {
    randomDogs = await getRandomDogs();

    createCards(randomDogs);
}

main();

/*async function getRandomDogs() {
    const dogs = await fetchDogs('https://api.thedogapi.com/v1/images/search?limit=12');

    createCards(dogs);
}*/