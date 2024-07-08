<script>
	import '$lib/app.css';
	import { devfestLogo } from '$lib/data/data';
</script>

<main class="container mx-auto px-4 py-9">
	<header class="w-full items-center justify-center flex">
		<img src={devfestLogo} alt="gdgchennai logo" style="width: auto; border-radius:10pt" />
	</header>
	<slot />
</main>
