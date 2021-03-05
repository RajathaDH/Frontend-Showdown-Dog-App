import { useState, useEffect } from 'react';

const SearchBar = ({ setDogs, randomDogs, fetchDogs }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = async (value) => {
        const result = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${value}`);

        const data = await result.json();
      
        setSearchResults(data);
    }

    useEffect(() => {
        if (searchValue !== '') {
            getSearchResults(searchValue);
        } else {
            setSearchResults([]);
            setDogs(randomDogs);
        }
    }, [searchValue, randomDogs, setDogs]);

    const getDog = async (value) => {
        const dog = await fetchDogs(`https://api.thedogapi.com/v1/images/search?breed_id=${value}`);

        setDogs(dog);
    }

    return (
        <div className="search">
            <form id="searchForm">
                <div className="search-bar">
                    <input
                        type="text"
                        id="searchInput"
                        onInput={e => setSearchValue(e.target.value)}
                        className="search-input"
                        autoComplete="off"
                    />
                    <button type="submit" className="btn-search">Woof</button>
                </div>
            </form>

            <div id="searchResults" className="search-results">
                {searchResults.map((result, index) => (
                    <div
                        key={index}
                        className="search-result"
                        onClick={() => getDog(result.id)}
                    >
                        {result.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar;