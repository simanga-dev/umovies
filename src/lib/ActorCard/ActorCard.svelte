<script lang="ts">
	export let adult: boolean;
	export let gender: number;
	export let id: number;
	export let known_for: any;
	export let known_for_department: any;
	export let name: string;
	export let popularity: string;
	export let profile_path: string;
</script>

<div class="actor-card">
	<div class="img">
		<img
			src="http://image.tmdb.org/t/p/w200/{profile_path}"
			alt="profile picture of {name} with gender of {gender}, {adult}"
		/>
	</div>
	<h3>
		{name}
	</h3>
</div>

<style src="./Style.scss"></style>
