<section id="hero-section" class="flex flex-col gap-6 h-auto items-center justify-center my-10">
	<div
		class="mx-auto flex flex-col sm:flex-row items-center gap-4 px-4 mt-1 font-mono text-lg text-gray-500"
	>
		<!-- <p>
			<time datetime="01-12-2023">01</time>-<time datetime="02-12-2023">02 of Dec, 2023</time>
		</p>

		<svg
			aria-hidden="true"
			viewBox="0 0 6 6"
			class="h-1.5 w-1.5 overflow-visible fill-current stroke-current hidden sm:block"
			><path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round" /></svg
		> -->
		<p>IIT–M Research Park, Chennai</p>
	</div>

	<h1
		class="text-[min(12vw,90px)] leading-[2] tracking-tighter text-center max-w-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700"
	>
		Coming Soon!
	</h1>
	<p class="text-center max-w-lg">
		Come learn, network and celebrate with the Google Developer Ecosystem while also learning to
		hack on Android, Chrome, and the Web.
	</p>

	<div class="flex flex-row gap-3">
		<!-- <PillButton
			label="Join the Conversation!"
			on:click={() => {
				window.open('http://bit.ly/gdgchennai-discord', '_blank');
			}}
		/> -->

		<button
			class="relative inline-flex h-12 text-lg overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
			on:click={() => {
				window.open('http://bit.ly/gdgchennai-discord', '_blank');
			}}
		>
			<span
				class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
			/>
			<span
				class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-lg font-medium text-gray-50 backdrop-blur-3xl"
			>
				Join the community!
			</span>
		</button>
		<!-- <PillButton
			label="Add to calendar"
			action="secondary"
			on:click={() => {
				window.open(
					'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDA1OTY0MWFhNXNmaGZuYW5udnJ2bTRyZTJfMjAyMzEyMDFUMDIzMDAwWiA4MmNmMWQxMWM3MzI1ZjlhZTk1Y2ExNmFkOWEyNmE5MThiMTUyNTk5ODQwMzIyNWM5MGEwM2JkYTQ3NzdjZTcyQGc&tmsrc=82cf1d11c7325f9ae95ca16ad9a26a918b1525998403225c90a03bda4777ce72%40group.calendar.google.com&scp=ALL',
					'_blank'
				);
			}}
		/> -->
	</div>
</section>
