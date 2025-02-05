// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxtjs/google-fonts'],

  content: {
    documentDriven: true,
    highlight: {
      preload: ['python', 'bash', 'java'],
      theme: "one-dark-pro",
    },
  },

  googleFonts: {
    families: {
      Roboto : true,
    },
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          crossorigin: 'anonymous',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          crossorigin: 'anonymous',
        }
      ],
    },
  },
})