import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from) => {
    const nuxtApp = useNuxtApp()
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (nuxtApp.$pinia) {
      const mainStore = useMainStore(nuxtApp.$pinia)
      mainStore.savedScrollPositions[from.path] = {
        x: window.screenX,
        y: window.scrollY,
        height: document.documentElement.scrollHeight
      }
      return new Promise((resolve) => {
        if (
          mainStore.savedScrollPositions[to.path] &&
          document.documentElement.scrollHeight <= mainStore.savedScrollPositions[to.path].height
        ) {
          document.body.style.minHeight = mainStore.savedScrollPositions[to.path].height.toString() + 'px'
        } else {
          document.body.style.minHeight = '0'
        }
        setTimeout(() => {
          resolve({
            left: mainStore.savedScrollPositions[to.path]?.x || 0,
            top: mainStore.savedScrollPositions[to.path]?.y || 0,
            behavior: 'auto'
          })
        }, 0)
      })
    }
  }
}
