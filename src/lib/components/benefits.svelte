<script lang="ts">
	const benefits = ['Expert talks', 'Careers', 'Swags', 'Networking', 'Fun++'];
</script>

<div
	class="text-[min(12vw,80px)] leading-[1] tracking-tighter text-center max-w-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 h-auto"
>
	Why attend DevFest 2023?
</div>
<div
	class="text-[min(12vw,80px)] tracking-tighter text-center max-w-3xl text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 h-auto"
>
Because you get
</div>
<div
	class="text-[min(12vw,80px)] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 h-auto"
> <span
		class="text-green-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.loose))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.loose))] overflow-hidden"
	>
		<ul
			class="block animate-text-slide-5 text-center leading-tight [&_li]:block -my-4 text-transparent bg-clip-text bg-gradient-to-b from-sky-500 to-purple-600"
		>
			{#each benefits as benefit}
				<li>{benefit}</li>
			{/each}
			<li aria-hidden="true">& Memories</li>
		</ul>
	</span>
</div>
