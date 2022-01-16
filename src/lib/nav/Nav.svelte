<script lang="ts">
	import { page } from '$app/stores';
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: SVGSVGElement;

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	const handleOuterClick = (e: MouseEvent) => {
		if (
			!(
				!sidebarVisible ||
				e.target === sidebarButton ||
				sidebarButton.contains(e.target as Node) ||
				e.target === sidebar ||
				sidebar.contains(e.target as Node)
			)
		) {
			toggleSidebar();
		}
	};
</script>

<svelte:window on:click={handleOuterClick} />

<header>
	<div class="inner">
		<a class="nav-title-link" href="/">
			<!-- <h2 class="nav-title">Umovies</h2> -->
            <img src="static/logo-umovies.png" alt="Website logo">
		</a>

		<nav class="mobi">
			<svg
				bind:this={sidebarButton}
				xml:space="preserve"
				viewBox="0 0 500 500"
				on:click={toggleSidebar}
				class:active={sidebarVisible}
			>
				<g transform="matrix(1.3333333,0,0,-1.3333333,-66.326109,633.05707)">
					<path d="M 62.297785,369.40376 H 413.47816" />
					<path d="M 178.86043,205.22075 H 413.28827" />
					<path d="M 62.67053,287.30031 H 413.36485" />
				</g>
			</svg>

			<aside class:visible={sidebarVisible} bind:this={sidebar}>
				<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Movies</a>
				</li>
				<li class:active={$page.url.pathname === '/projects'}>
					<a sveltekit:prefetch href="/Shows">Shows</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/Actors">Actors</a>
				</li>
				<li class:active={$page.url.pathname === '/News'}>
					<a sveltekit:prefetch href="/News">News</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/Community">Community</a>
				</li>
			
				</ul>
			</aside>
		</nav>
		<nav class="desk">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Movies</a>
				</li>
				<li class:active={$page.url.pathname === '/projects'}>
					<a sveltekit:prefetch href="/Shows">Shows</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/Actors">Actors</a>
				</li>
				<li class:active={$page.url.pathname === '/News'}>
					<a sveltekit:prefetch href="/News">News</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/Community">Community</a>
				</li>
			</ul>

		</nav>
            <div class="">
            <button>Login</button>
            <button>Sign up</button>
            </div>

        

	</div>
</header>

<style lang="scss" src="style.scss"></style>
