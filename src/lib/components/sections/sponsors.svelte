<script lang="ts">
	import { sponsors, partners } from '$lib/data/data';
	import SponsorsCard from '$lib/components/sponsors-card.svelte';
	import PillButton from '$lib/components/pill-button.svelte';
</script>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tight text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Our Previous Sponsors
	</h1>
	<!-- <p class="text-center max-w-lg">Willing to support? Become Our Sponsor.</p> -->

	<!-- <PillButton
		label="Sponsorship Prospectus"
		on:click={() => {
			window.open('https://devfest.gdgchennai.in/sponsorship.pdf', '_blank');
		}}
	/> -->

	<SponsorsCard {sponsors} />
</section>

<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] tracking-tighter text-center max-w-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Our Previous Partners
	</h1>
	<!-- <p class="text-center max-w-lg">
		Let's Make a Difference Together! Become Our Community Partner.
	</p>

	<PillButton
		label="Join us now"
		on:click={() => {
			window.open('https://forms.gle/FjJoCkiM1DSdcdLj8', '_blank');
		}}
	/> -->

	<SponsorsCard sponsors={partners} />
</section>
