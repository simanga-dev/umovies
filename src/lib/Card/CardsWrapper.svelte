<script lang="ts">
	export let className = '';
	export { className as class };
</script>
<div class="cards-wrapper {className || ''}">
	<slot />
</div>

<style src="./Style.scss"></style>
