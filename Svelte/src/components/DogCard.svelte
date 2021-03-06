<script>
    export let dog;

    const breed = dog.breeds[0]?.name ? dog.breeds[0].name : 'No details';
    const imgSrc = dog.url || `https://cdn2.thedogapi.com/images/${dog.breeds[0]?.reference_image_id}.jpg`;
    const weight = dog.breeds[0]?.weight.metric ? `${dog.breeds[0].weight.metric} kg` : 'No details';
    const height = dog.breeds[0]?.height.metric ? `${dog.breeds[0].height.metric} cm` : 'No details';
    const bredFor = dog.breeds[0]?.bred_for ? dog.breeds[0].bred_for : 'No details';
    const breedGroup = dog.breeds[0]?.breed_group ? dog.breeds[0].breed_group : 'No details';
    const lifeSpan = dog.breeds[0]?.life_span ? dog.breeds[0].life_span : 'No details';
    const details = dog.breeds[0]?.temperament ? dog.breeds[0].temperament : 'No details';
</script>

<div class="card">
    <div class="card-inner">
        <div class="card-front">
            <img src={imgSrc} alt="Dog" />
        </div>

        <div class="card-back">
            <h1>{breed}</h1>
            <ul>
                <li><strong>Weight:</strong> {weight}</li>
                <li><strong>Height:</strong> {height}</li>
                <li><strong>Bred for:</strong> {bredFor}</li>
                <li><strong>Breed group:</strong> {breedGroup}</li>
                <li><strong>Life span:</strong> {lifeSpan}</li>
                <li><strong>Details:</strong> {details}</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .card {
        background-color: transparent;
        height: 400px;
        cursor: pointer;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
    }

    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        backface-visibility: hidden;
    }

    .card-front {
        overflow: hidden;
    }

    .card-back {
        background-color: #333;
        color: white;
        transform: rotateY(180deg);
    }

    .card-back h1{
        text-align: center;
        font-size: 25px;
        border-bottom: 2px solid white;
        margin: 10px auto;
        padding-bottom: 10px;
    }

    .card-back ul {
        list-style: none;
        margin: 10px;
    }

    .card-back ul li {
        margin-bottom: 10px;
    }
</style>