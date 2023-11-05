<script lang="ts">
	import { schedules } from '$lib/data/data';
	import TimeSlots from '$lib/components/time-slots.svelte';
	import { clsx } from '$lib/utils';

	let tabs = ['Day 1', 'Day 2'];
	let active_tab = 'Day 1';
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

	<div id="tabs" class="sticky top-8 left-0 border border-gray-100 w-fit rounded-full bg-gray-100">
		{#each tabs as item}
			<button
				class={clsx(
					active_tab === item
						? 'bg-white text-gray-900 font-medium py-2 px-6 rounded-full m-2 shadow-lg'
						: 'hover:bg-gray-100 hover:rounded-full text-gray-600 font-medium py-2 px-6'
				)}
				class:active={active_tab === item}
				on:click={() => {
					active_tab = item;
				}}
			>
				{item}
			</button>
		{/each}
	</div>

	<div>
		{#if active_tab === tabs[0]}
			<div class="flex flex-col md:flex-row">
				{#each schedules as schedule, i}
					{#if schedule.date === 'Dec 1'}
						<TimeSlots day={schedule} track={schedule.track} />
					{/if}
				{/each}
			</div>
		{:else}
			<div class="flex flex-col md:flex-row">
				{#each schedules as schedule, i}
					{#if schedule.date === 'Dec 2'}
						<TimeSlots day={schedule} track={schedule.track} />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</section>
