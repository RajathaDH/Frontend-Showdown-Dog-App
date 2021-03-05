const DogCard = ({ dog }) => {
    const breed = dog.breeds[0]?.name ? dog.breeds[0].name : 'No details';
    const imgSrc = dog.url || `https://cdn2.thedogapi.com/images/${dog.breeds[0]?.reference_image_id}.jpg`;
    const weight = dog.breeds[0]?.weight.metric ? `${dog.breeds[0].weight.metric} kg` : 'No details';
    const height = dog.breeds[0]?.height.metric ? `${dog.breeds[0].height.metric} cm` : 'No details';
    const bredFor = dog.breeds[0]?.bred_for ? dog.breeds[0].bred_for : 'No details';
    const breedGroup = dog.breeds[0]?.breed_group ? dog.breeds[0].breed_group : 'No details';
    const lifeSpan = dog.breeds[0]?.life_span ? dog.breeds[0].life_span : 'No details';
    const details = dog.breeds[0]?.temperament ? dog.breeds[0].temperament : 'No details';

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={imgSrc} />
                </div>

                <div className="card-back">
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
    )
}

export default DogCard;