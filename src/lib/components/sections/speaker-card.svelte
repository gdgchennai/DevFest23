<script lang="ts">
	import type { Speakers } from '$lib/types';

	export let speakers: Speakers[];
</script>

<div class="p-6 gap-6 flex flex-col w-full">
	{#each speakers as speaker}
		<div class="p-6 gap-6 flex flex-col sm:flex-row w-full">
			<img src={speaker.image} alt={speaker.name} class="w-44 rounded-xl" />

			<div class="flex flex-col items-center justify-between gap-2">
				<div>
					<h1 class="text-xl font-semibold tracking-tight">{speaker.name}</h1>

					<p class="mt-1 font-mono text-sm text-gray-500 w-full flex">
						{speaker.position}<br />{speaker.company}
					</p>

					<p class="mt-1">
						{speaker.description}
					</p>

					{#if speaker.tags}
						{#each speaker.tags as tag}
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
					{#if speaker.socials?.twitter}
						<a
							id="twitter"
							href={speaker.socials?.twitter}
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

					{#if speaker.socials?.linkedin}
						<a
							id="linkedin"
							href={speaker.socials?.linkedin}
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

					{#if speaker.socials?.github}
						<a
							id="github"
							href={speaker.socials?.github}
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

					{#if speaker.socials?.website}
						<a
							id="website"
							href={speaker.socials?.website}
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
	{/each}
</div>
