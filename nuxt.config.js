
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'COVID-19 Simple Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hello this is simple tracker of covid 19' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/virus.svg' },
      { rel: 'stylesheet', href: 'https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css'}
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.js'
      },
      {
        src: 'https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js'
      }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
