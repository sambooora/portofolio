<script setup lang="ts">
useSeo()
const props = defineProps<{
  visible: boolean
}>()

watch(
  () => props.visible,
  (val) => document.body.classList[val ? 'add' : 'remove']('overflow-hidden')
)

const mainStore = useMainStore()
const subcribtionContainer = ref<HTMLDivElement>()
onClickOutside(subcribtionContainer, () => (mainStore.subcribtionVisible = false))
</script>

<template>
  <div
    v-if="visible"
    class="sticky container mx-auto px-4 md:px-8 pt-24 text-content flex-1 flex flex-col items-start justify-center bottom-10"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <Transition name="slide" appear>
      <div ref="subcribtionContainer" class="w-96">
        <div class="flex h-full flex-col bg-base-100 space-y-4 shadow-xl p-5">
          <div class="text-end w-full">
            <button
              type="button"
              class="-m-2 p-2 text-gray-400 hover:text-gray-500"
              @click="mainStore.subcribtionVisible = false"
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
          <p class="text-xl">
            Receive 10% off your first order and enjoy exclusive benefits by joining our mailing list.
          </p>
          <a href="#" class="border-t-0 border-b-4 border-base-content w-1/5 text-center text-xl"> Subcribe </a>
        </div>
      </div>
    </Transition>
  </div>
</template>
