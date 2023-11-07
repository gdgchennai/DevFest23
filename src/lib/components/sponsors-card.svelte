<script lang="ts">
	import type { Sponsors } from '$lib/types';
	export let sponsors: Sponsors[];
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
		{#each sponsors as sponsor}
			<a href={sponsor.website} class="bg-gray-400/5 p-8 sm:p-10">
				<img
					class="max-h-12 w-full object-contain hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
					src={sponsor.logo}
					alt={sponsor.company}
					width="158"
					height="48"
				/>
			</a>
		{/each}
	</div>
</div>
