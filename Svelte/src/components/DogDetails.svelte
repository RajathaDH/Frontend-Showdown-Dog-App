<script>
    import DogCard from './DogCard.svelte';
</script>

<main class="main">
    <div class="cards"></div>
</main>

<style>
    .main {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
</style>