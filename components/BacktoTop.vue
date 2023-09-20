<script setup lang="ts">
const scrollToTop = () => {
  const mainContainer = document.getElementById('main-container')
  mainContainer?.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrolled = ref(false)
onMounted(() => {
  const mainContainer = document.getElementById('main-container')
  if (mainContainer) {
    const handler = (e: Event) => {
      const currentY = (e.target as HTMLDivElement).scrollTop
      if (currentY > 40) {
        scrolled.value = true
      } else if (currentY < 20) {
        scrolled.value = false
      }
    }
    mainContainer.addEventListener('scroll', handler)
  }
})
const hovered = ref(false)
</script>

<template>
  <div class="fixed bottom-10 right-6 z-20 transition" :class="scrolled ? 'translate-y-0' : 'translate-y-64'">
    <div class="container">
      <button
        class="btn btn-circle btn-md btn-secondary hover:opacity-100 opacity-50"
        type="button"
        title="Button to top"
        @click="scrollToTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary-content"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>
