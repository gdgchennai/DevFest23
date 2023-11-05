<script>
	import { schedules } from '$lib/data/data';
	import PillButton from '$lib/components/pill-button.svelte';
	import TimeSlots from '$lib/components/time-slots.svelte';
</script>

<section id="speaker-lineup" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Speaker Lineup and Sessions
	</h1>
	<p class="text-center max-w-lg">
		Come. Learn, Network and Celebrate with Google Developer Groups and Google Developer Experts,
		learn to hack on Android, Chrome and Web while you are at it.
	</p>

	<PillButton label="Get your tickets" />

	<div class="flex flex-col md:flex-row">
		{#each schedules as schedule, i}
			<TimeSlots day={schedule} track={schedule.track} />
		{/each}
	</div>
</section>
