<script lang="ts">
  import { sponsorDocUrl } from '$lib/data/data';
</script>

<svelte:head>
  <title>GDG Chennai - Devfest 2024</title>
  <meta name="description" content="GDG Chennai - Devfest 2024" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@gdgchennai" />
  <meta name="twitter:creator" content="@gdgchennai" />
  <meta name="twitter:title" content="GDG Chennai - Devfest 2024" />
  <meta name="twitter:description" content="GDG Chennai - Devfest 2024" />
  <meta
    name="twitter:image"
    content="https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699332500/devfest23/site/ujnsjqwmmq8rw1fvclmh.webp"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="GDG Chennai - Devfest 2024" />
  <meta property="og:description" content="GDG Chennai - Devfest 2024" />
  <meta property="og:site_name" content="GDG Chennai - Devfest 2024" />
  <meta property="og:url" content="https://devfest.gdgchennai.in/" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/ddnnw8qn5/image/upload/v1699332500/devfest23/site/ujnsjqwmmq8rw1fvclmh.webp"
  />
</svelte:head>

<div class="flex flex-col w-full items-center justify-center h-screen">
	<iframe
		title="Sponsorship Prospectus"
		src={sponsorDocUrl}
		style="width:100%;height:100%"
		scrolling="auto"
	/>
</div>
