<script lang="ts">
	import { Button, InnerWrapper, StarRating, Icon } from '$lib';
	// import PlayIcon from 'static/';

	export let overview: string;
	export let vote_count: number;
	export let title: string;
	export let release_date: string;
	export let vote_average: number;
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
			return str.slice(0, 197) + ' ...';
		}
		return str;
	}
</script>

<section
	class="wrapper"
	style="background-image: url('https://www.themoviedb.org/t/p/original/{backdrop_path}')"
>
	<div class="overlay" />
	<InnerWrapper class="hero-section">
		<div class="detail">
			<span class="date">
				{release_date.split('-')[2]}
				{monthNames[monthIndex]}
				{release_date.split('-')[0]}
			</span>
			<h2 class="title">
				{title}
			</h2>
			<p class="overview">{limitCharacter(overview)} <a href="/#">read more</a></p>

			<div class="votes">
				<StarRating rating={vote_average} />
				<h3>{vote_count} Votes</h3>
			</div>

			<Button href="/">
				<Icon name="play" class="play-icon" />
				&nbsp; Watch Trailer
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
	</InnerWrapper>
</section>

<style lang="scss" src="./Style.scss"></style>
