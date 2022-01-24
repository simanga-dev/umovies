<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
    import Recommendation from '$lib/recomendationSection/recomendation.svelte'
    import Promo from '$lib/promoSection/promo.svelte'
    import MovieByLocaton from '$lib/movieByLocation/movieByLocation.svelte'
    import MovieByActor from '$lib/movieByActorSection/movieByActor.svelte'
	// export const prerender = true;

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
	import Hero from '$lib/hero/Hero.svelte';
import Recomendation from '$lib/recomendationSection/recomendation.svelte';


	export let res_json;

	const hero_movies = res_json.results.slice(0, 6);

	let index = 0;
	setInterval(() => {
		index = index + 1;

		if (index === 4) {
			index = 0;
		}
	}, 10000);

	$: cur_hero_movie = hero_movies[index];

	console.log(hero_movies);
</script>

<svelte:head>
	<title>Umovies</title>
</svelte:head>

<Hero {...cur_hero_movie}  />

<Recommendation />
<Promo />
<MovieByLocaton />
<MovieByActor />

