<script lang="ts">
	import { Navbar, Footer  } from '$layout';
</script>


<Navbar/>

<main>
	<slot />
</main>

<Footer/>

<style global lang="scss">
    @use "src/styles/global";
</style>
