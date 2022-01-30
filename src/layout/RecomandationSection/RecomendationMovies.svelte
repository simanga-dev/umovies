<script lang="ts">
	import { RecommendationCard, CardsWrapper, InnerWrapper, Icon } from '$lib';
	import { Navigation, Keyboard } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/scss';
	// import 'swiper/css';

	export let movies;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<section>
	<InnerWrapper>
		<div class="header">
			<h3>
				<span> Top Actions </span>
				Recommended Movies
			</h3>
			<div class="arrow-btn">
				<Icon name="arrow-left" class="swiper-button-prev" />
				&nbsp;
				<Icon name="arrow-right" class="swiper-button-next" />
			</div>
		</div>

		<!-- change the number of colum base on screen size, -->
		<!-- to archieve pleasent look. -->
		<!-- this is the very bad way to do this. I need to look for a better solution -->

		<Swiper
			modules={[Keyboard, Navigation]}
			slidesPerView={1}
			spaceBetween={20}
			breakpoints={{
				480: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				850: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}}
			speed={900}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}}
			keyboard={{ enabled: true, onlyInViewport: true }}
		>
			{#if movies.length > 0}
				{#each movies as movie}
					<SwiperSlide>
						<RecommendationCard {...movie} />
					</SwiperSlide>
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		</Swiper>
		<!--    -->
	</InnerWrapper>
</section>

<style src="./Style.scss" lang="scss"></style>
