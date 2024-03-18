// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-windicss"],
  runtimeConfig: {
    apiKey: process.env.API_KEY,
    apiBaseUrl: process.env.API_BASE_URL,
  },
});
