export default defineNuxtPlugin((nuxtApp) => {
  const observer = import.meta.client
    ? new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('revealed')
              observer!.unobserve(e.target)
            }
          }
        },
        { threshold: 0.12 }
      )
    : null

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (binding.value?.delay) el.style.transitionDelay = `${binding.value.delay}ms`
      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
    getSSRProps() {
      return {}
    }
  })
})
