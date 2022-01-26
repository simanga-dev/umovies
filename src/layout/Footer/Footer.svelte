<script lang="ts">
	/* import LinkedinLogo from '$lib/svgs/linkedinIcon.svelte'; */
	/* import FacebookLogo from '$lib/svgs/facebookLogo.svelte'; */
	/* import TwitterLogo from '$lib/svgs/twitterLogo.svelte'; */

	import { Button } from '$lib';
</script>

<footer>
<div class="inner">
	<div class="col_1">
		<img src="./logo-umovies.png" alt="botton logo" />
		<p>
			Designed and Copyrights By
			<a href=""> Jayprakash Kachare </a>
		</p>
        <!--
		<FacebookLogo />
		<TwitterLogo />
		<LinkedinLogo />
        -->
	</div>

	<div class="col_2">
		<h3>Quick Link</h3>
		<ul>
			<li><a href="#">Movies</a></li>
			<li><a href="$">Actors</a></li>
			<li><a href="#">News</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Privacy Policy</a></li>
		</ul>
	</div>

	<div class="col_3">
		<h3>Newsletter</h3>
		<form action="">
			<input type="text" placeholder="News letter signup" />
			<!--    <input type="submit"> -->
			<Button>submit</Button>
		</form>
	</div>
</div>
</footer>

<style lang="scss" src="./Style.scss"></style>
