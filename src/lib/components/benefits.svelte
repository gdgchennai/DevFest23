<script lang="ts">
	const benefits = ['Expert talks', 'Networking', 'Swags', 'Careers', 'Fun++'];
</script>

<div
	class="text-[min(12vw,90px)] leading-[1] tracking-tighter text-center max-w-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 h-auto"
>
	Why attend DevFest 2023? Because you get <span
		class="text-green-500 inline-flex flex-col h-[calc(28px*2)] sm:h-[calc(32px*2)] md:h-[calc(34px*2.5)] overflow-hidden"
	>
		<ul
			class="block animate-text-slide-5 text-center leading-tight [&_li]:block -my-[12px] sm:-my-[18px] md:-my-[20px] lg:-my-[20px] text-transparent bg-clip-text bg-gradient-to-b from-sky-500 to-purple-600"
		>
			{#each benefits as benefit}
				<li>{benefit}</li>
			{/each}
			<li aria-hidden="true">& Memories</li>
		</ul>
	</span>
</div>
