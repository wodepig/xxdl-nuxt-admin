// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', '@nuxt/ui', '@pinia/nuxt','pinia-plugin-persistedstate/nuxt'],
  imports: {
     // 自动引入stores目录下的文件
    dirs: ['stores']
  },
  css: ['~/assets/css/main.css'],
  ui: {
    // 关闭谷歌字体
    fonts: false
  },
  pinia: {
    autoImports: [
      // 自动引入 `defineStore`
      'defineStore'
    ],
  },

})