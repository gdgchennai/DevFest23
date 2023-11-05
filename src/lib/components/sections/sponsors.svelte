<script lang="ts">
	import { sponsors } from '$lib/data/data';
	import SponsorsCard from '$lib/components/sponsors-card.svelte';
</script>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Our Sponsors
	</h1>
	<p class="text-center max-w-lg">
		We are grateful to our sponsors for their support and contribution to the community.
	</p>

	<SponsorsCard {sponsors} />
</section>
