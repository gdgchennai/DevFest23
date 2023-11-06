<script lang="ts">
	import { schedules, speakers } from '$lib/data/data';
	import TimeSlots from '$lib/components/time-slots.svelte';
	import Modal from '$lib/components/modal.svelte';
	import { clsx } from '$lib/utils';

	let showModal = false;
	let tabs = ['Day 1', 'Day 2'];
	let active_tab = 'Day 1';
	let active_speaker = 'fin';
</script>

<Modal bind:showModal>
	<div class="p-6 gap-2 flex flex-row w-full">
		<img src={speakers[0].image} alt={speakers[0].name} class="w-44 rounded-xl" />

		<div class="flex flex-col">
			<h1 class="text-xl font-semibold tracking-tight">{speakers[0].name}</h1>
			<p class="mt-1 font-mono text-sm text-gray-500 w-full flex">
				{speakers[0].position} at {speakers[0].company}
			</p>

			<p class="mt-1">
				{speakers[0].description}
			</p>

			<div class="flex flex-row gap-6 items-end justify-start w-fit text-gray-500 mt-2">
				<a id="twitter" href="/" class="hover:cursor-pointer">
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
				<a id="linkedin" href="/" class="hover:cursor-pointer">
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

				<a id="instgram" href="/" class="hover:cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-instagram"
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
							d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
						/>
						<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
						<path d="M16.5 7.5l0 .01" />
					</svg>
				</a>

				<a id="discord" href="/" class="hover:cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-discord"
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
						<path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
						<path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
						<path
							d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"
						/>
						<path d="M7 16.5c3.5 1 6.5 1 10 0" />
					</svg>
				</a>

				<a id="youtube" href="/" class="hover:cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-youtube"
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
							d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"
						/>
						<path d="M10 9l5 3l-5 3z" />
					</svg>
				</a>
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
						<TimeSlots
							day={schedule}
							track={schedule.track}
							on:click={() => {
								showModal = true;
							}}
						/>
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
