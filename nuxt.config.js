require('dotenv').config()
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nba-application',
    title: 'nba-application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //"@/plugins/axios.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-sweetalert2/nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://free-nba.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      "x-rapidapi-key": "c648259343msh575a90aff7474f5p1e1742jsn0bad632faef2"
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    theme: {
      dark: true
    }

  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  pwa:{
    shortcuts: [
      {
   
         name: "Shortcut name to show in the menu",
   
         description: "A description of what the shortcut does",
   
         url: "/player",
      }
    ],
    manifest:{
      name: "get data from nba basketball",
      short_name: "nba-app",
      start_url: "/",
    }
  },
  oneSignal: {
    init: {
      appId: '55d55b47-32bb-460b-bc05-72869a3b026e',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: false
      }
    },
    
  }
}
