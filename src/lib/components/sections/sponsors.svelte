<script lang="ts">
	import { sponsors } from '$lib/data/data';
	import SponsorsCard from '$lib/components/sponsors-card.svelte';
	import PillButton from '../pill-button.svelte';
</script>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Our Sponsors
	</h1>
	<p class="text-center max-w-lg">Let's Make a Difference Together! Become Our Sponsor.</p>

	<PillButton label="Sponsorship Prospectus" />

	<SponsorsCard {sponsors} />
</section>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Community Partners
	</h1>
	<p class="text-center max-w-lg">
		Let's Make a Difference Together! Become Our Community Partner.
	</p>

	<PillButton label="Join us now" />

	<SponsorsCard {sponsors} />
</section>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Corporate Partners
	</h1>
	<p class="text-center max-w-lg">
		Let's Make a Difference Together! Become Our Corporate Partner.
	</p>

	<SponsorsCard {sponsors} />
</section>
