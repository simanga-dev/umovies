<script lang="ts">
	import Navbar from '$lib/nav/Nav.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style global lang="scss">
    @use "src/styles/global";
</style>
