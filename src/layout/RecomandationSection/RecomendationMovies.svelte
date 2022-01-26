<script lang="ts">
	import { Card, CardsWrapper, InnerWrapper  } from '$lib';

	export let movies;
</script>

<section class="recommedation">
	<InnerWrapper>
		<div class="header">
			<h3>
				<span> Top Actions </span>
				Recommended Movies
			</h3>
			<div class="arrow-btn">
				<span>left</span>
				<span>right</span>
			</div>
		</div>

		<CardsWrapper>
			{#if movies.length > 0}
				{#each movies as movie}
					<Card {...movie} variant="movieWide" />
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		</CardsWrapper>
	</InnerWrapper>
</section>

<style src="./Style.scss"></style>
