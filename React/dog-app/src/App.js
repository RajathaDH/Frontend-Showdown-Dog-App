import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DogDetails from './components/DogDetails';

function App() {
  const [dogs, setDogs] = useState([]);
  const [randomDogs, setRandomDogs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchDogs = async (url) => {
      const result = await fetch(url);

      const data = await result.json();
      
      return data;
  }

  useEffect(() => {
    const getRandomDogs = async () => {
      const dogs = await fetchDogs('https://api.thedogapi.com/v1/images/search?limit=12');

      setRandomDogs(dogs);
      setDogs(dogs);
    }

    getRandomDogs();
  }, []);

  useEffect(() => {
    
  }, [dogs]);

  return (
    <div className="container">
      <Header />
      <SearchBar />
      <DogDetails dogs={dogs} />
    </div>
  );
}

export default App;