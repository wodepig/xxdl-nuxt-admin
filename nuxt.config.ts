// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils', '@nuxt/ui', '@pinia/nuxt','pinia-plugin-persistedstate/nuxt','nuxt-i18n-micro'],
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
    i18n: {
      strategy: 'no_prefix',
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'zh', iso: 'zh-CN', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    translationDir: 'app/locales',
    meta: true,
  },

})