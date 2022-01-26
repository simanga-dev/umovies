<script lang="ts">
	import { Card, CardsWrapper, InnerWrapper  } from '$lib';
    export let movies;
</script>
<section class="movie-by-locaton">
	<InnerWrapper>
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

	</InnerWrapper>
</section>

<style src="./Style.scss"></style>
