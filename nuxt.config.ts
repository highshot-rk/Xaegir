import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// const isDevelopment = process.env.NODE_ENV !== "production";

// Nuxt 3 Configuration Reference: https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {},

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      title: 'xaegir-app',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Nuxt 2 -- Deprecated
  // server: {
  //   host: isDevelopment ? 'xaegir.local' : '0.0.0.0', // default: localhost
  //   port: isDevelopment ? 3001 : 3001, // default: 3000
  // },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // TODO: look into below error message related to lodash
    // !ERROR: MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [process]. Use emitter.setMaxListeners() to increase limit
    'nuxt-lodash',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // Modules below used to be part of Nuxt v2 buildModules
    ['@pinia/nuxt', { disableVuex: false }],
    '@nuxtjs/strapi',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: {},

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['~/assets/css/main.css'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#nitro
  nitro: {
    // preset: 'node-server',
    timing: true,
  },

  // Plugins to run before rendering page:   // https://v3.nuxtjs.org/api/configuration/nuxt.config#plugins

  plugins: [],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#runtimeConfig
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'xaegir.local',
    },
  },

  content: {},

  tailwindcss: {
    // Options
  },

  strapi: {
    // Options
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    entities: ['articles'],
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },

  lodash: {
    prefix: 'use',
    prefixSkip: ['is'],
    exclude: ['map'],
    // alias: [
    //   ['camelCase', 'stringToCamelCase'], // => useStringToCamelCase
    //   ['kebabCase', 'stringToKebabCase'], // => useStringToKebabCase
    // ]
  },

  vite: {
    plugins: [eslintPlugin()],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'ar'],
    },
  },
});
