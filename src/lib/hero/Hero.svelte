<script lang="ts">
	import PlayIcon from '$lib/svgs/playIcon.svelte';
	import Button from '$lib/button/button.svelte';
	export let overview: string;
	export let vote_count: number;;
	export let title: string;
	export let release_date: string;
	export let vote_average: Number;
	export let backdrop_path: string;
	export let index: number;

	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	let monthIndex = Number(release_date.split('-')[1]) - 1;

	function limitCharacter(str: string) {
		if (str.length > 197) {
			return str.slice(0, 197) + '... more';
		}
		return str;
	}
</script>

<div
	class="wrapper"
	style="background-image: url('https://www.themoviedb.org/t/p/original/{backdrop_path}')"
>
	<div class="overlay" />
	<div class="inner">
		<div class="detail">
			<span class="date">
				{release_date.split('-')[2]}
				{monthNames[monthIndex]}
				{release_date.split('-')[0]}
			</span>
			<h3>
				{title}
			</h3>
			<p class="overview">{limitCharacter(overview)}</p>

			<div
				class="rating"
				style="--rating: {vote_average};"
				aria-label="Rating of this product is 2.3 out of 5."
			>
            <span>
			{vote_count} Votes
            </span>
			</div>

			<Button href="www.youtube.com">
				<PlayIcon />
				Watch Trailer
			</Button>

			<Button>Book Movie</Button>
		</div>

		<div class="indicator indicator-{index}">
			<span />
			<span />
			<span />
			<span />
			<span />
			<span />
		</div>
	</div>
</div>

<style lang="scss" src="style.scss"></style>
