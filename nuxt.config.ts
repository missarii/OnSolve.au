export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'OnSolve — Process-Driven BPO & Strategic Outsourcing Solutions',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'High-quality, process-driven outsourcing solutions. BPO, call center, customer support, data processing and more — delivered by a dedicated expert team.'
        }
      ]
    }
  }
})
