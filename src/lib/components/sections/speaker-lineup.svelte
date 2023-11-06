<script lang="ts">
	import { schedules } from '$lib/data/data';
	import TimeSlots from '$lib/components/time-slots.svelte';
	import Modal from '$lib/components/modal.svelte';
	import { clsx } from '$lib/utils';
	import type { Speakers } from '$lib/types';

	let showModal = false;
	let tabs = ['Day 1', 'Day 2'];
	let active_tab = 'Day 1';
	let active_speaker: Speakers = {
		name: '',
		image: '',
		company: '',
		position: '',
		description: '',
		tags: []
	};

	function handleSpeaker(e: CustomEvent<Speakers>) {
		showModal = true;
		active_speaker = e.detail;
	}
</script>

<Modal bind:showModal>
	<div class="p-6 gap-6 flex flex-col sm:flex-row w-full">
		<img src={active_speaker.image} alt={active_speaker.name} class="w-44 rounded-xl" />

		<div class="flex flex-col items-center justify-between gap-2">
			<div>
				<h1 class="text-xl font-semibold tracking-tight">{active_speaker.name}</h1>
				<p class="mt-1 font-mono text-sm text-gray-500 w-full flex">
					{active_speaker.position}<br/>{active_speaker.company}
				</p>

				<p class="mt-1">
					{active_speaker.description}
				</p>

				{#if active_speaker.tags}
					{#each active_speaker.tags as tag}
						<span
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2 mt-2"
						>
							{tag}
						</span>
					{/each}
				{/if}
			</div>

			<div
				id="social"
				class="flex flex-row gap-6 items-start w-full justify-start text-gray-500 mt-2"
			>
				{#if active_speaker.socials?.twitter}
					<a
						id="twitter"
						href={active_speaker.socials?.twitter}
						class="hover:cursor-pointer hover:text-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-brand-x"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
							<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
						</svg>
					</a>
				{/if}

				{#if active_speaker.socials?.linkedin}
					<a
						id="linkedin"
						href={active_speaker.socials?.linkedin}
						class="hover:cursor-pointer hover:text-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-brand-linkedin"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
							/>
							<path d="M8 11l0 5" />
							<path d="M8 8l0 .01" />
							<path d="M12 16l0 -5" />
							<path d="M16 16v-3a2 2 0 0 0 -4 0" />
						</svg>
					</a>
				{/if}

				{#if active_speaker.socials?.github}
					<a
						id="github"
						href={active_speaker.socials?.github}
						class="hover:cursor-pointer hover:text-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-brand-github"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
							/>
						</svg>
					</a>
				{/if}

				{#if active_speaker.socials?.website}
					<a
						id="website"
						href={active_speaker.socials?.website}
						class="hover:cursor-pointer hover:text-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-world"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
							<path d="M3.6 9h16.8" />
							<path d="M3.6 15h16.8" />
							<path d="M11.5 3a17 17 0 0 0 0 18" />
							<path d="M12.5 3a17 17 0 0 1 0 18" />
						</svg>
					</a>
				{/if}
			</div>
		</div>
	</div>
</Modal>

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
						<TimeSlots day={schedule} track={schedule.track} on:speaker={handleSpeaker} />
					{/if}
				{/each}
			</div>
		{:else}
			<div class="flex flex-col md:flex-row">
				{#each schedules as schedule, i}
					{#if schedule.date === 'Dec 2'}
						<TimeSlots day={schedule} track={schedule.track} on:speaker={handleSpeaker} />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</section>
