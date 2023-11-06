<script>
	import PillButton from '$lib/components/pill-button.svelte';
</script>

<section id="hero-section" class="flex flex-col gap-6 h-auto items-center justify-center my-20">
	<div class="mx-auto flex items-center gap-4 px-4 mt-1 font-mono text-lg text-gray-500">
		<p>
			<time datetime="01-12-2023">01</time>-<time datetime="02-12-2023">02 of Dec, 2023</time>
		</p>

		<svg
			aria-hidden="true"
			viewBox="0 0 6 6"
			class="h-1.5 w-1.5 overflow-visible fill-current stroke-current"
			><path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round" /></svg
		>
		<p>IIT–M Research Park, Chennai</p>
	</div>
	<h1
		class="text-[min(12vw,90px)] leading-[1] tracking-tighter text-center max-w-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
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
