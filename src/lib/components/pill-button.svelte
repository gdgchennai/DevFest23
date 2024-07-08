<script lang="ts">
	import { clsx } from '$lib/utils';
	export let id = '';
	export let label = 'Click';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let action: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let disabled = false;
	export let aria_label = label;
	export let classname = '';
</script>

<button
	{id}
	{type}
	{disabled}
	on:click
	aria-label={aria_label}
	class={clsx(
		'px-6 py-2.5 text-base font-medium shadow-sm w-fit rounded-full',
		action === 'primary' &&
			'bg-black text-white hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black',
		action === 'secondary' &&
			'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-200 border border-gray-200',
		action === 'tertiary' &&
			'bg-transparent text-gray-500 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black shadow-none',
		disabled && 'opacity-50 cursor-not-allowed',

		classname
	)}
>
	{label}
</button>
