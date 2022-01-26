<script lang="ts">
	import { Navbar, Footer  } from '$lib';
</script>


<Navbar/>

<main>
	<slot />
</main>

<Footer/>

<style global lang="scss">
    @use "src/styles/global";
</style>
