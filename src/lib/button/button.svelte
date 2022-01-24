<script lang="ts">
	export let href = undefined;
	export let disabled = false;
</script>

{#if href}
	<a href={disabled ? undefined : href}>
		<slot />
	</a>
{:else}
	<button>
		<slot />
	</button>
{/if}

<style src="./style.scss" lang="scss"></style>
