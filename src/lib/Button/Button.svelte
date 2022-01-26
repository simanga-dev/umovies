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

<style src="./Style.scss" lang="scss"></style>
