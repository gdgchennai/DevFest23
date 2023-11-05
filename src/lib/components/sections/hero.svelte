<script>
	import PillButton from '$lib/components/pill-button.svelte';
</script>

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
