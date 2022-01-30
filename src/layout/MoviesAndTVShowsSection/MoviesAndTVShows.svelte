<script lang="ts">
	import { Card, PostarCard, InnerWrapper, Icon } from '$lib';
	import { Navigation, Keyboard } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/scss';

	export let movies;
</script>

<section class="movie-by-locaton">
	<InnerWrapper>
		<div class="header">
			<div class="tap">
				<h3>Movies</h3>
				<h3>TV Shows</h3>
			</div>

			<div class="arrow-btn">
				<Icon name="arrow-left" class="swiper-button-prev-1" />
				&nbsp;
				<Icon name="arrow-right" class="swiper-button-next-1" />
			</div>
		</div>

		<Swiper
			modules={[Keyboard, Navigation]}
            longSwipes={true}
            resistance={false}
            speed={300}
			slidesPerView={2}
			spaceBetween={20}
			breakpoints={{
				320: {
					slidesPerView: 2,
					spaceBetween: 20
				},

                420: {
					slidesPerView: 3,
					spaceBetween: 20

                },

				580: {
					slidesPerView: 5,
					spaceBetween: 20
				}
			}}
			navigation={{
				nextEl: '.swiper-button-next-1',
				prevEl: '.swiper-button-prev-1'
			}}
			keyboard={{ enabled: true, onlyInViewport: true }}
		>
			{#if movies.length > 0}
				{#each movies as movie}
					<SwiperSlide>
						<PostarCard img={movie.poster_path} />
					</SwiperSlide>
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		</Swiper>
	</InnerWrapper>
</section>

<style src="./Style.scss"></style>
