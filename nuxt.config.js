module.exports = {
  target: 'static', // default is 'server'
  loading: false,
  /* 
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Pixelate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: 'Creative Technologist, freelance (Product) Designer and User Interface Developer' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' }
    ]
  },
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
  /*
  ** Plugins
  */
 plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
