<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/sections/hero.svelte';
	import SpeakerLineup from '$lib/components/sections/speaker-lineup.svelte';
	import WhyAttend from '$lib/components/sections/why-attend.svelte';
	import Sponsors from '$lib/components/sections/sponsors.svelte';
	import Memories from '$lib/components/sections/memories.svelte';
</script>

<main
	class="flex-col flex w-full place-items-center min-h-screen items-center justify-center gap-32"
>
	<Hero />
	<WhyAttend />
	<SpeakerLineup />
	<Sponsors />
	<Memories />
	<Footer />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
