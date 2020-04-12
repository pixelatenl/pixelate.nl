module.exports = {
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
      { hid: 'description', name: 'description', content: 'Pixelate' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,700i,800' }
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
  ** Nuxt Modules
  */
  // modules: [
  //   '@nuxtjs/axios'
  // ],

  // axios: {
  //   // proxyHeaders: false
  // },
  
  // router: {
  //   base: '/test/'
  // },

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
