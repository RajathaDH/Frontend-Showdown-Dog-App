<script>
	import Header from './components/Header.svelte';
	import SearchBar from './components/SearchBar.svelte';
	import DogDetails from './components/DogDetails.svelte';
</script>

<div class="container">
	<Header />
	<SearchBar />
	<DogDetails />
</div>

<style>
	.container {
		width: 80%;
		margin: 0 auto;
	}
</style>