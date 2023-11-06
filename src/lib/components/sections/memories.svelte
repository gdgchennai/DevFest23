<script lang="ts">
	import PillButton from '$lib/components/pill-button.svelte';
	import { memories } from '$lib/data/data';
</script>

<section id="memories" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		DevFest 2022 was so much fun.
	</h1>
	<p class="text-center max-w-lg">
		Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities and
		1 amazing event.
	</p>

	<PillButton label="Get your tickets" 
		on:click={() => {
			window.open(
				'https://konfhub.com/devfest-2023-chennai',
				'_blank'
			);
		}}
	/>

	<div
		class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-2 [&>img:not(:first-child)]:mt-8 place-items-center place-content-center"
	>
		{#each memories as memory}
			<img src={memory.image} alt={memory.title} class="rounded-2xl mt-6 bg-white" />
		{/each}
	</div>
</section>
