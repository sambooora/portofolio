<script setup lang="ts">
const props = defineProps<{
  visible: boolean
}>()

watch(
  () => props.visible,
  (val) => document.body.classList[val ? 'add' : 'remove']('overflow-hidden')
)

const mainStore = useMainStore()

const menuContainer = ref<HTMLDivElement>()
onClickOutside(menuContainer, () => (mainStore.shopMenuVisible = false))
</script>

<template>
  <div v-if="props.visible" class="relative z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <Transition name="fade" appear>
      <div class="fixed inset-0 bg-black/10 transition-opacity"></div>
    </Transition>

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="fixed inset-y-0 left-0 flex max-w-full">
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <Transition name="slide" appear>
            <div ref="menuContainer" class="w-screen max-w-3xl">
              <div class="flex h-full flex-col overflow-y-scroll bg-accent shadow-xl">
                <div class="flex-1 overflow-y-auto flex flex-col py-6 px-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <h2 id="slide-over-title" class="text-3xl font-semibold">Aquifer</h2>
                    <div class="ml-3 flex h-7 items-center -mt-px">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        @click="mainStore.shopMenuVisible = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex-1 mt-8 ml-8 flex flex-col justify-center">
                    <div class="flow-root">
                      <ul role="list" class="-my-6">
                        <li class="flex py-6">
                          <NuxtLink to="/products" class="text-2xl" @click="mainStore.shopMenuVisible = false">
                            Shop All
                          </NuxtLink>
                        </li>
                        <li v-for="(product, i) in mainStore.products" :key="i" class="flex py-6">
                          <NuxtLink
                            :to="`/products/${product.id}`"
                            class="text-2xl"
                            @click="mainStore.shopMenuVisible = false"
                          >
                            {{ product.name }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  @apply transition-all opacity-100 duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.slide-enter-active,
.slide-leave-active {
  @apply transition-transform duration-300 ease-in-out transform;
}

.slide-enter-from {
  @apply -translate-x-full;
}
.slide-leave-to {
  @apply -translate-x-0;
}
</style>
