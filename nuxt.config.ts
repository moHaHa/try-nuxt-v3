// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts'
    // locales: [
    //   {
    //     code: 'en',
    //     file: 'english.ts',
    //   },
    //   {
    //     code: 'ar',
    //     file: 'arabic.ts',
    //   },
    // ],
    // lazy: true,
    // langDir: 'lang',
    // defaultLocale: 'ar',
    // experimental: {
    //   jsTsFormatResource: true,
    // },
  }
})
