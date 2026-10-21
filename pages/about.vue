<script setup>
useHead({
	title: 'About - Pixelate',
	link: [{ rel: 'canonical', href: 'https://pixelate.nl/about/' }],
	meta: [
		{ property: 'og:title', content: 'About - Pixelate' },
		{ property: 'og:url', content: 'https://pixelate.nl/about/' }
	]
})
</script>

<template>
  <AppDrawer id="about" title="About">
    <p class="p">I'm a Principal Product Designer working on complex, data-rich products in the energy and utilities industry. I translate domain complexity into intuitive workflows and cohesive user experiences, and I bridge design and engineering by owning products from first sketch to production-ready code.</p>
    <h2 class="h2">Skills</h2>
    <ul class="list">
      <li>Product Design</li>
      <li>Design Leadership</li>
      <li>Data Visualization</li>
      <li>Automation UX</li>
      <li>Design Systems</li>
      <li>Design Engineering</li>
      <li>Figma (plus a keyboard, when pixels must ship)</li>
    </ul>
    <h2 class="h2">Connect with me</h2>
    <p class="p">I'm not one for social media theatrics. LinkedIn and email will reach me.</p>
    <ul class="list">
      <li><a href="https://www.linkedin.com/in/roland-poot/" class="a">Linkedin</a></li>
      <li><a href="mailto:roland@pixelate.nl" class="a">roland@pixelate.nl</a></li>
      <li><a href="https://github.com/pixelatenl" class="a">Github</a></li>
    </ul>
  </AppDrawer>
</template>