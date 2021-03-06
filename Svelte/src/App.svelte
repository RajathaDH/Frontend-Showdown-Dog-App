<script>
	import { onMount } from 'svelte';

	import Header from './components/Header.svelte';
	import SearchBar from './components/SearchBar.svelte';
	import DogDetails from './components/DogDetails.svelte';

	let dogs = [];
	let randomDogs = [];

	const fetchDogs = async (url) => {
		const result = await fetch(url);

		const data = await result.json();
		
		return data;
	}

	onMount(async () => {
		randomDogs = await fetchDogs('https://api.thedogapi.com/v1/images/search?limit=12');

		dogs = randomDogs;
	});
</script>

<div class="container">
	<Header />
	<SearchBar />
	<DogDetails dogs={dogs} />
</div>

<style>
	.container {
		width: 80%;
		margin: 0 auto;
	}
</style>