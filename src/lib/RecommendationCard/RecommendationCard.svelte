<script lang="ts">
	import { Button, StarRating } from '$lib';

	export let overview: string;
	export let vote_count: number;
	export let title: string;
	export let release_date: string;
	export let vote_average: number;
	export let backdrop_path: string;
	export let poster_path: string;
	export let adult: boolean;
</script>

<div class="recommendation-card">
		<img
			src="https://www.themoviedb.org/t/p/original/{backdrop_path}"
			alt="horizotal ime {adult} {vote_average}"
		/>

	<h3 class="title">{title}</h3>
	<p class="overview">{overview}</p>
	<div class="votes">
		<StarRating rating={vote_count} />
		<h3>{vote_count} Votes</h3>
	</div>

	<Button>Download</Button>

</div>

<style src="./Style.scss"></style>
