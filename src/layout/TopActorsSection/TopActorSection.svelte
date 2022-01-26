<script lang="ts">
	import { InnerWrapper, CardsWrapper, ActorCard } from '$lib';
	export let people;
</script>

<div class="top-actors">
	<InnerWrapper>
		<header>
			<h3>
				<span>Top Actors</span>
				Movies By Actors
			</h3>
			<div class="search btn">
				<form action="">
					<input type="text" placeholder="seach by actor" />
					<button> search </button>
				</form>
				<div class="arrow-btn">
					<span>Left</span>
					<span>Right</span>
				</div>
			</div>
		</header>
		<CardsWrapper>
			{#if people.length > 0}
				{#each people as person}
					<ActorCard {...person} variant="actor" />
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		</CardsWrapper>

		<div class="more-info">
			<div class="actor-details">more information about the actore</div>

			<div class="movie-list">
				<h3>Best Films / Popular / Latest</h3>
				<CardsWrapper >

			{#if people.length > 0}
				<!-- {#each person.known_for as person} -->
					<!-- <ActorCard {...person} variant="actor" /> -->

        This is complicated but I will give myself time.
        I will get it

			{:else}
				<div class="">something went wrong</div>
			{/if}
		

                				</CardsWrapper>
			</div>
		</div>
	</InnerWrapper>
</div>

<style src="./Style.scss"></style>
