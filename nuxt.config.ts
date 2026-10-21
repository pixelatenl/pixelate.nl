// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	srcDir: '.',
	/*
	 ** Global CSS
	 */
	css: [
		'~/assets/css/main.css',
		'~/assets/css/headings.css',
		'~/assets/css/paragraph.css',
		'~/assets/css/list.css',
		'~/assets/css/links.css',
		'~/assets/css/buttons.css',
		'~/assets/css/sheet.css',
		'~/assets/css/animations.css'
	],
	app: {
		/*
		 ** Headers of the page
		 */
		head: {
			htmlAttrs: {
				lang: 'en'
			},
			title: 'Pixelate',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
				{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
				{ name: 'description', content: 'Principal Product Designer and Design Engineer for complex, data-rich products in the energy and utilities industry.' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Pixelate' },
				{ property: 'og:description', content: 'Principal Product Designer and Design Engineer for complex, data-rich products in the energy and utilities industry.' },
				{ property: 'og:url', content: 'https://pixelate.nl/' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: 'Pixelate' },
				{ name: 'twitter:description', content: 'Principal Product Designer and Design Engineer for complex, data-rich products in the energy and utilities industry.' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' },
				{ rel: 'canonical', href: 'https://pixelate.nl/' }
			],
			noscript: [{ innerHTML: 'This website requires JavaScript.' }]
		},
		/*
		 ** Page transitions
		 */
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	}
})
