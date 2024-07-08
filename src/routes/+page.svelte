<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/sections/hero.svelte';
	import SpeakerLineup from '$lib/components/sections/speaker-lineup.svelte';
	import WhyAttend from '$lib/components/sections/why-attend.svelte';
	import Sponsors from '$lib/components/sections/sponsors.svelte';
	import Memories from '$lib/components/sections/memories.svelte';
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2023</title>
  <meta name="description" content="GDG Chennai - Devfest 2023" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@gdgchennai" />
  <meta name="twitter:creator" content="@gdgchennai" />
  <meta name="twitter:title" content="GDG Chennai - Devfest 2023" />
  <meta name="twitter:description" content="GDG Chennai - Devfest 2023" />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699332500/devfest23/site/ujnsjqwmmq8rw1fvclmh.webp"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="GDG Chennai - Devfest 2023" />
  <meta property="og:description" content="GDG Chennai - Devfest 2023" />
  <meta property="og:site_name" content="GDG Chennai - Devfest 2023" />
  <meta property="og:url" content="https://devfest.gdgchennai.in/" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699332500/devfest23/site/ujnsjqwmmq8rw1fvclmh.webp"
  />
</svelte:head>

<main
	class="flex-col flex w-full place-items-center min-h-screen items-center justify-center gap-32"
>
	<Hero />
	<!-- <WhyAttend /> -->
	<!-- <SpeakerLineup /> -->
	<Sponsors />
	<Memories />
	<Footer />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
    font-family: "Google Sans";
	}
</style>
