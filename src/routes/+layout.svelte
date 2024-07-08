<script>
	import '$lib/app.css';
	import { devfestLogo } from '$lib/data/data';
</script>

<main class="container mx-auto px-4 py-6">
	<header class="w-full items-center justify-center flex">
		<img src={devfestLogo} alt="gdgchennai logo" class="w-80" />
	</header>
	<slot />
</main>