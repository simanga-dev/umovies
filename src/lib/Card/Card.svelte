<script lang="ts">
	import { Button } from '$lib';

	export let variant: 'movieWide' | 'moviePoster' | 'actor' = 'moviePoster';

	export let overview: string;
	// export let vote_count: number;
	export let title: string;
	export let release_date: string;
	// export let vote_average: number;
	export let backdrop_path: string;
	export let poster_path: string;
</script>

{#if variant === 'movieWide'}
	<div class="card-wide">
		<img src="https://www.themoviedb.org/t/p/original/{backdrop_path}" alt="horizotal ime" />

		<h3>{title}</h3>
		<p>{overview}</p>

		<Button>Download</Button>
	</div>
{:else if variant === 'moviePoster'}
	<div class="card-poster">
		<img src="http://image.tmdb.org/t/p/w500/{poster_path}" alt={release_date} />
	</div>
{/if}

<style src="./Style.scss"></style>
