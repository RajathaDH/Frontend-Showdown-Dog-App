const SearchBar = () => {
    return (
        <div className="search">
            <form id="searchForm">
                <div className="search-bar">
                    <input type="text" id="searchInput" className="search-input" autoComplete="off" />
                    <button type="submit" className="btn-search">Woof</button>
                </div>
            </form>

            <div id="searchResults" className="search-results"></div>
        </div>
    )
}

export default SearchBar;