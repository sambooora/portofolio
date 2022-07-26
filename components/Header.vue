<script setup lang="ts">
const mainStore = useMainStore()
const route = useRoute()
const isTransparent = ref(false)
const animateOnScroll = ref(false)

watch(
  () => route.path,
  (val) => {
    if (val === '/') {
      isTransparent.value = true
      animateOnScroll.value = true
    } else {
      isTransparent.value = false
      animateOnScroll.value = false
    }
  },
  { immediate: true }
)

const handleScroll = () => {
  if (animateOnScroll.value) {
    if (document.documentElement.scrollTop > 150) {
      isTransparent.value = false
    } else if (document.documentElement.scrollTop < 60) {
      isTransparent.value = true
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="sticky top-0 z-10 h-16 sm:h-20 lg:h-24 transition-colors duration-200 flex items-center"
    :class="isTransparent ? 'bg-transparent text-white' : `${route.meta.bg || 'bg-base-100'} text-base-content`"
  >
    <div class="container mx-auto px-4">
      <div class="navbar px-0">
        <div class="navbar-start">
          <NuxtLink to="/" class="normal-case text-xl md:text-3xl pl-0 font-semibold">Richie Sambora</NuxtLink>
        </div>
        <div class="navbar-end space-x-6">
          <div class="flex md:hidden">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="m-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg
              ></label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-secondary">
                <li><NuxtLink to="/">Overview</NuxtLink></li>
                <li><NuxtLink to="/products">Project</NuxtLink></li>
                <li><a href="mailto:richiesambora9029@gmail.com">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="hidden md:flex flex-row items-center space-x-6">
            <NuxtLink to="/">Overview</NuxtLink>
            <NuxtLink to="/products">Project</NuxtLink>
            <a href="mailto:richiesambora9029@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
