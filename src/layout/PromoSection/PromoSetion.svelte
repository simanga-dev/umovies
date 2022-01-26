<script lang="ts">
	import { Button, InnerWrapper } from '$lib';

	export let variant: 'standard' | 'gradient' = 'standard';
</script>

{#if variant === 'standard'}
	<div class="promo">
		<InnerWrapper>
			<div class="left">
				<h4>
					<span>Get a 40% OFF for first</span>
					PREMIUM MEMBERSHIP
				</h4>
			</div>
			<div class="right">
				<h4>
					<span>Sign Up to get more</span>
					EXITING OFFERS
				</h4>
				<Button>SIGN UP</Button>
			</div>
		</InnerWrapper>
	</div>
{:else}
	<div class="promo-gradient">
		<InnerWrapper>
		<div class="left">
			<h4>
				<span>Get a 40% OFF for first</span>
				PREMIUM MEMBERSHIP
			</h4>
		</div>
		<div class="right">
			<h4>
				<span>Sign Up to get more</span>
				EXITING OFFERS
			</h4>
			<Button>SIGN UP</Button>
		</div>
		</InnerWrapper>
	</div>
{/if}

<style src="./Style.scss"></style>
