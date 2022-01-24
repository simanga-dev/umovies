<script lang="ts">
	import Navbar from '$lib/nav/Nav.svelte';
    import Footer from '$lib/footer/footer.svelte'
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer/>

<style global lang="scss">
    @use "src/styles/global";
</style>
