const loading = document.querySelector('#loading');
const cards = document.querySelector('.cards');

loading.style.display = 'none';

async function fetchDogs(url) {
    loading.style.display = '';

    const result = await fetch(url);

    const data = await result.json();

    createCards(data);
}

function createCards(dogs) {
    loading.style.display = 'none';
    cards.innerHTML = '';

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

fetchDogs('https://api.thedogapi.com/v1/images/search?limit=12');