<script lang="ts">
	import { InnerWrapper, CardsWrapper, Card } from '$lib';
    export let people;
    console.log(people)
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
					<Card {...person} variant="actor" />
				{/each}
			{:else}
				<div class="">something went wrong</div>
			{/if}
		
</CardsWrapper>

	</InnerWrapper>
</div>

<style src="./Style.scss"></style>
