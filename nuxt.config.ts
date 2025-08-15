// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    modules: ['nuxt-auth-utils','@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false
  }

})