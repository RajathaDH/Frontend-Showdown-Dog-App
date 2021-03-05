import DogCard from './DogCard';

const DogDetails = ({ dogs }) => {
    return (
        <main className="main">
            <div className="cards">
                {dogs.map((dog, index) => (
                    <DogCard key={index} dog={dog} />
                ))}
            </div>
        </main>
    )
}

export default DogDetails;