<script setup lang="ts">
const mainStore = useMainStore()
const route = useRoute()
const isTransparent = ref(false)
const animateOnScroll = ref(false)
const mobileMenuOpen = ref(false)

watch(
  () => route.path,
  val => {
    mobileMenuOpen.value = false
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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
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
    class="sticky top-0 z-50 transition-all duration-300"
    :class="[
      isTransparent && !mobileMenuOpen
        ? 'bg-transparent text-white'
        : `${route.meta.bg || 'bg-base-100/95 backdrop-blur-lg'} text-base-content`,
      isTransparent ? '' : 'border-b border-base-content/5',
    ]"
  >
    <div class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
      <nav class="flex h-16 items-center justify-between sm:h-20 lg:h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="relative z-50 shrink-0">
          <img
            src="/images/logo-footer.png"
            alt="Richie Sambora"
            class="h-12 w-auto sm:h-16 lg:h-20"
          />
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-8 md:flex">
          <NuxtLink
            to="/"
            class="text-sm font-medium tracking-wide transition-colors hover:text-orange-500"
            :class="route.path === '/' ? 'text-orange-500' : ''"
          >
            Overview
          </NuxtLink>
          <NuxtLink
            to="/project"
                        class="text-sm font-medium tracking-wide transition-colors hover:text-orange-500"
                        :class="route.path === '/project' ? 'text-orange-500' : ''"
          >
            Projects
          </NuxtLink>
          <a
            href="mailto:richiesambora9029@gmail.com"
            class="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600"
          >
            Get in touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <div class="flex w-5 flex-col gap-1.5">
            <span
              class="block h-0.5 w-full rounded-full bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'translate-y-2 rotate-45' : ''"
            />
            <span
              class="block h-0.5 w-full rounded-full bg-current transition-all duration-300"
              :class="mobileMenuOpen ? 'opacity-0' : ''"
            />
            <span
              class="block h-0.5 w-full rounded-full bg-current transition-all duration-300"
              :class="mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''"
            />
          </div>
        </button>
      </nav>
    </div>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="absolute inset-x-0 top-full border-b border-base-content/10 bg-base-100/98 backdrop-blur-xl md:hidden"
      >
        <div class="container mx-auto flex flex-col gap-1 px-6 pb-8 pt-4">
          <NuxtLink
            to="/"
            class="rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-base-content/5 hover:text-orange-500"
            :class="route.path === '/' ? 'text-orange-500' : 'text-base-content'"
            @click="mobileMenuOpen = false"
          >
            Overview
          </NuxtLink>
          <NuxtLink
            to="/project"
                        class="rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-base-content/5 hover:text-orange-500"
                        :class="route.path === '/project' ? 'text-orange-500' : 'text-base-content'"
            @click="mobileMenuOpen = false"
          >
            Projects
          </NuxtLink>
          <a
            href="mailto:richiesambora9029@gmail.com"
            class="rounded-xl px-4 py-3 text-lg font-medium text-base-content transition-colors hover:bg-base-content/5 hover:text-orange-500"
            @click="mobileMenuOpen = false"
          >
            Contact
          </a>
          <div class="mt-4 px-4">
            <a
              href="mailto:richiesambora9029@gmail.com"
              class="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600"
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
