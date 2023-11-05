<script lang="ts">
	import PillButton from '$lib/components/pill-button.svelte';
</script>

<section id="submit-talk" class="flex flex-col gap-6 place-items-center h-auto">
	<h1
		class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Interested to talk?
	</h1>
	<p class="text-center max-w-lg">Your Voice, Your Stage––Let's Talk Innovation!</p>

	<PillButton
		label="Submit your talk"
		on:click={() => {
			window.open(
				'https://docs.google.com/forms/d/e/1FAIpQLSfqUAAZew6k9TTkETItNM1HqqwhPc_q-J9p-pv_jlftaQpIYA/viewform',
				'_blank'
			);
		}}
	/>
</section>
