<script lang="ts">
	import Benefits from '$lib/components/benefits.svelte';
	import Footer from '$lib/components/footer.svelte';
	import PillButton from '$lib/components/pill-button.svelte';
	import SponsorsCard from '$lib/components/sponsors-card.svelte';
	import TimeSlots from '$lib/components/time-slots.svelte';
	import { schedules, memories, sponsors } from '$lib/data/data';
</script>

<main
	class="flex-col flex w-full place-items-center min-h-screen items-center justify-center gap-32"
>
	<section id="hero-section" class="flex flex-col gap-6 h-auto items-center justify-center my-20">
		<h1
			class="text-[min(12vw,90px)] leading-[1] tracking-tighter text-center max-w-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
		>
			Chennai’s most awaited tech conference
		</h1>
		<p class="text-center max-w-lg">
			Come learn, network and celebrate with the Google Developer Ecosystem while also learning to
			hack on Android, Chrome, and Web.
		</p>

		<div class="flex flex-row gap-3">
			<PillButton label="Get your tickets" />
			<PillButton label="Add to calendar" action="secondary" />
		</div>
	</section>

	<section id="submit-talk" class="flex flex-col gap-6 place-items-center h-auto">
		<h1
			class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
		>
			Interested to talk?
		</h1>
		<p class="text-center max-w-lg">Your Voice, Your Stage––Let's Talk Innovation!</p>

		<PillButton label="Submit your talk" />
	</section>

	<section id="why-attend" class="flex flex-col gap-6 place-items-center h-auto">
		<Benefits />
	</section>

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

	<section id="get-tickets" class="flex flex-col gap-6 place-items-center h-auto">
		<h1
			class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
		>
			Get your tickets
		</h1>
		<p class="text-center max-w-lg">What are you waiting for? Get your tickets now!</p>

		<PillButton label="Get your tickets" />
	</section>

	<section id="sponsors" class="flex flex-col gap-6 place-items-center h-auto">
		<h1
			class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
		>
			Our Sponsors
		</h1>
		<p class="text-center max-w-lg">
			We are grateful to our sponsors for their support and contribution to the community.
		</p>

		<SponsorsCard {sponsors} />
	</section>

	<section id="memories" class="flex flex-col gap-6 place-items-center h-auto">
		<h1
			class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
		>
			DevFest 2022 was so much fun.
		</h1>
		<p class="text-center max-w-lg">
			Last year, we had 1000+ attendees, 30+ speakers, 20+ sessions, 10+ sponsors, 5+ communities
			and 1 amazing event.
		</p>

		<PillButton label="Get your tickets" />

		<div
			class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-2 [&>img:not(:first-child)]:mt-8 place-items-center place-content-center"
		>
			{#each memories as memory}
				<img src={memory.image} alt={memory.title} class="rounded-2xl mt-6 bg-white" />
			{/each}
		</div>
	</section>

	<Footer />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
