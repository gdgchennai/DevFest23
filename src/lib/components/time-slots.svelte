<script lang="ts">
	import { clsx } from '$lib/utils';
	import type { Day } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	export let track: string;
	export let day: Day;

	const dispatcher = createEventDispatcher();
</script>

<ol
	role="list"
	class={clsx('space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5')}
>
	<h1 class="uppercase font-semibold tracking-wide text-orange-500">{track}</h1>

	{#each day.timeslots as timeslot, i}
		<li
			aria-label={`${timeslot.name} talking about ${timeslot.description} at ${timeslot.start} - ${timeslot.end} IST`}
		>
			{#if i > 0}
				<div class="mx-auto mb-8 h-px w-48 bg-gray-500/10" />
			{/if}

			<h4
				class="text-lg font-semibold tracking-tight text-gray-900 hover:text-blue-500 cursor-pointer"
				tabindex={0}
				on:click={() => {
					dispatcher('speaker', timeslot.speaker);
				}}
			>
				{timeslot.name}
			</h4>
			{#if timeslot.description}
				<p class="mt-1 tracking-tight text-gray-900">
					{timeslot.description}
				</p>
			{/if}
			<p class="mt-1 font-mono text-sm text-gray-500">
				<time dateTime={`${day.dateTime}T${timeslot.start}-08:00`}>
					{timeslot.start}
				</time>{' '}
				-{' '}
				<time dateTime={`${day.dateTime}T${timeslot.end}-08:00`}>
					{timeslot.end}
				</time>{' '}
				IST
			</p>
		</li>
	{/each}
</ol>
