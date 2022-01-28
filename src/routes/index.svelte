<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/index.json');
		if (res.ok) {
			const res_json = await res.json();
			return {
				props: { res_json }
			};
		}
		const { message } = await res.json();
		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import {
		HeroSection,
		PromoSection,
		MoviesAndTVShowsSection,
		TopActorsSection,
		RecomandationSection
	} from '$layout';

	export let res_json;
	export let error;

	const hero_movies = res_json.res_popular_json.results.slice(0, 6);

	let index = 0;
	setInterval(() => {
		index = index + 1;

		if (index === 6) {
			index = 0;
		}
	}, 10000);

	$: cur_hero_movie = hero_movies[index];
</script>

<svelte:head>
	<title>Umovies ▪ Book a movie</title>
</svelte:head>

<HeroSection {...cur_hero_movie} {index} />

<RecomandationSection movies={res_json.res_trending_json.results} />

<PromoSection />

<MoviesAndTVShowsSection movies={res_json.res_trending_json.results} />

<TopActorsSection people={res_json.res_people_json.results} />

<PromoSection variant="gradient" />
