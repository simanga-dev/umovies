<script lang="ts">
	import { Card, CardsWrapper  } from '$lib';
    export let movies;
</script>
<section class="movie-by-locaton">
	<div class="inner">
		<div class="header">
			<div class="gentre">
				<h4>Movies</h4>
				<h4>TV Shows</h4>
			</div>
			<div class="arrow-btn">
				<span>left</span>
				<span>rigt</span>
			</div>
		</div>

		<CardsWrapper>
			{#if movies.length > 0}
				{#each movies as movie}
					<Card {...movie} variant="moviePoster" />
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		</CardsWrapper>

	</div>
</section>

<style src="./Style.scss"></style>
