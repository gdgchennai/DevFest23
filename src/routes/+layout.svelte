<script>
	import '$lib/app.css';
	import logo from '$lib/assets/devfest-chennai.webp';
</script>

<main class="container mx-auto px-4 py-6">
	<header class="w-full items-center justify-center flex">
		<img src={logo} alt="gdgchennai logo" class="w-64" />
	</header>
	<slot />
</main>
