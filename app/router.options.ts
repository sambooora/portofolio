import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from) => {
    if (!process.client) {
      return { left: 0, top: 0, behavior: 'auto' }
    }

    try {
      const nuxtApp = useNuxtApp()
      let mainStore: ReturnType<typeof useMainStore> | undefined
      if (nuxtApp.$pinia) {
        mainStore = useMainStore(nuxtApp.$pinia)
      }

      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      }

      if (mainStore && from?.path) {
        mainStore.savedScrollPositions[from.path] = {
          x: typeof window !== 'undefined' ? window.screenX : 0,
          y: typeof window !== 'undefined' ? window.scrollY : 0,
          height: typeof document !== 'undefined' ? document.documentElement.scrollHeight : 0
        }
      }

      return new Promise((resolve) => {
        const saved =
          mainStore && to?.path ? mainStore.savedScrollPositions[to.path] : undefined

        if (
          saved &&
          typeof document !== 'undefined' &&
          document.documentElement.scrollHeight <= saved.height
        ) {
          document.body.style.minHeight = String(saved.height)
        } else if (typeof document !== 'undefined') {
          document.body.style.minHeight = '0'
        }

        setTimeout(() => {
          resolve({
            left: saved?.x || 0,
            top: saved?.y || 0,
            behavior: 'auto'
          })
        }, 0)
      })
    } catch (_e) {
      return { left: 0, top: 0, behavior: 'auto' }
    }
  }
}
