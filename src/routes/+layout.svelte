<script>
	import Nav from "./Nav.svelte";

</script>

<Nav />

<main class="container">
	<slot/>
</main>

<style>
	main {
        --primary: #5e35b1;
		padding: 0%;
	}
</style>