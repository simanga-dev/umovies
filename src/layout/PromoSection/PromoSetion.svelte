<script lang="ts">
	import { Button, InnerWrapper } from '$lib';
	export let variant: 'standard' | 'gradient' = 'standard';
</script>

{#if variant === 'standard'}
	<section  class="promo-section" >
		<InnerWrapper class="promo-section">
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
				<Button variant="gradient" >SIGN UP</Button>
			</div>
		</InnerWrapper>
	</section>
{:else}
	<section class="promo-section-{$$props.class}">
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
	</section>
{/if}

<style src="./Style.scss"></style>
