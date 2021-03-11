<script>
    let searchValue;
    let searchResults = [];

    const getSearchResults = async (value) => {
        const result = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${value}`);

        const data = await result.json();
      
        searchResults = data;
    }
</script>

<div class="search">
    <form id="searchForm">
        <div class="search-bar">
            <input
                type="text"
                id="searchInput"
                class="search-input"
                bind:value={searchValue}
                on:input={() => getSearchResults(searchValue)}
                autocomplete="off">
            <button type="submit" class="btn-search">Woof</button>
        </div>
    </form>

    <div id="searchResults" class="search-results">
        {#each searchResults as result}
            <div class="search-result">{result.name}</div>
        {/each}
    </div>
</div>

<style>
    .search {
        width: 100%;
        margin-bottom: 20px;
    }

    .search-bar {
        display: flex;
        justify-content: center;
    }

    .search-input {
        width: 80%;
        font-size: 1rem;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        margin: 0 10px;
    }

    .btn-search {
        width: 10%;
        font-size: 1.5rem;
        border-radius: 10px;
        border: 2px solid black;
        outline: none;
        background: rgba(48, 233, 48, 0.664);
        color: white;
        cursor: pointer;
        overflow: hidden;
    }

    .search-results {
        width: 60%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 10%;
        max-height: 20rem;
        overflow-x: hidden;
        overflow-y: scroll;
        padding-right: 10px;
    }

    .search-results::-webkit-scrollbar {
        background: rgba(31, 30, 30, 0.80);
        border-radius: 10px;
    }

    .search-results::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #333;
    }

    .search-result {
        width: 100%;
        padding: 10px;
        font-size: 1.5rem;
        background: rgba(31, 30, 30, 0.80);
        margin: 2px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>