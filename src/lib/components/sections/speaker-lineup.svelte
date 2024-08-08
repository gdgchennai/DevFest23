<script lang="ts">
	import { schedules } from '$lib/data/data';
	import TimeSlots from '$lib/components/time-slots.svelte';
	import Modal from '$lib/components/modal.svelte';
	import { clsx } from '$lib/utils';
	import type { Speakers } from '$lib/types';
	import SpeakerCard from './speaker-card.svelte';
	import PillButton from '$lib/components/pill-button.svelte';

	let showModal = false;
	let tabs = ['Day 1', 'Day 2'];
	let active_tab = 'Day 1';
	let active_speakers: Speakers[] = [
		{ name: '', image: '', company: '', position: '', description: '', tags: [] }
	];

	function handleSpeaker(e: CustomEvent<Speakers[]>) {
		showModal = true;
		active_speakers = e.detail;
	}
</script>

<Modal bind:showModal>
	<div class="gap-6 flex flex-col sm:flex-row w-full">
		<SpeakerCard speakers={active_speakers} />
	</div>
</Modal>

<section id="speaker-lineup" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Call for Speakers
	</h1>
	<p class="text-center max-w-lg">
		Got a groundbreaking idea or tech innovation to share? We got just the platform for you to
		join us as a speaker and make an impact!
	</p>

	<PillButton
		label="Submit your proposal"
		on:click={() => {
			window.open('http://bit.ly/speakers-assemble', '_blank');
		}}
	/>

	<!-- <div id="tabs" class="sticky top-8 left-0 border border-gray-100 w-fit rounded-full bg-gray-100">
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

	<div class="flex flex-col w-full max-w-xs items-center justify-center">
		{#if active_tab === tabs[0]}
			<div class="flex flex-col md:flex-row">
				{#each schedules as schedule, i}
					{#if schedule.date === 'Dec 1'}
						<TimeSlots day={schedule} track={schedule.track} on:speaker={handleSpeaker} />
					{/if}
				{/each}
			</div>
		{:else}
			<div class="flex flex-col md:flex-row fixed-width">
				{#each schedules as schedule, i}
					{#if schedule.date === 'Dec 2'}
						<TimeSlots day={schedule} track={schedule.track} on:speaker={handleSpeaker} />
					{/if}
				{/each}
			</div>
		{/if}
	</div> -->
</section>
