<script setup lang="ts">
useSeo({ title: 'Cart' })

const cartLineItems = ref([
  {
    name: 'Regenerative Serum',
    img: '/images/tmp/cart-item-1.png',
    variant: '3x 10ml 0.34 Fl Oz',
    qty: 1,
    price: '$100.00 SGD'
  },
  {
    name: 'Hydrating Cream',
    img: '/images/tmp/cart-item-2.png',
    variant: '50ml 1.69 Fl Oz',
    qty: 1,
    price: '$100.00 SGD'
  }
])

const props = defineProps<{
  visible: boolean
}>()

watch(
  () => props.visible,
  (val) => document.body.classList[val ? 'add' : 'remove']('overflow-hidden')
)

const mainStore = useMainStore()

const modalConfirmRemoveToggle = ref<{ checked: boolean }>()
const modalConfirmRemove = ref<HTMLDivElement>()
const itemSelected = ref()
const removingLineItem = ref<boolean>(false)
const removeLineItem = () => {
  removingLineItem.value = true
  // Remove line method
  itemSelected.value = undefined
  removingLineItem.value = false
  modalConfirmRemoveToggle.value.checked = false
}

const cartContainer = ref<HTMLDivElement>()
onClickOutside(cartContainer, () => (mainStore.cartVisible = false), { ignore: [modalConfirmRemove] })

const lazyHideCartModal = () => {
  setTimeout(() => {
    mainStore.cartVisible = false
  }, 150)
}
</script>

<template>
  <div v-if="visible" class="relative z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
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
        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
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
            <div ref="cartContainer" class="w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-base-100 shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 id="slide-over-title" class="text-lg text-gray-900">Shopping cart</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        @click="mainStore.cartVisible = false"
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

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li
                          v-for="(item, i) in cartLineItems"
                          :key="i"
                          class="flex flex-row justify-between items-start py-6"
                        >
                          <div class="flex-1 flex flex-row space-x-3">
                            <div class="h-36 w-36 bg-accent flex-shrink-0 overflow-hidden rounded-box">
                              <img :src="item.img" class="w-full h-full object-contain object-center" />
                            </div>
                            <div class="flex-1 space-y-2">
                              <p class="uppercase mb-2 font-medium">{{ item.name }}</p>
                              <p>{{ item.variant }}</p>
                              <p>{{ item.price }}</p>
                              <div class="btn-group flex-nowrap">
                                <button
                                  class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-r-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                                  </svg>
                                </button>
                                <button
                                  class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-l-0 border-r-0"
                                >
                                  {{ item.qty }}
                                </button>
                                <button
                                  class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-l-0"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button class="p-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div class="w-full lg:w-96">
                    <div class="overflow-x-auto relative">
                      <table class="w-full text-sm text-left">
                        <thead class="text-xs uppercase border-b-2 border-secondary">
                          <tr>
                            <th scope="col" class="py-3 pr-6">&nbsp;</th>
                            <th scope="col" class="py-3 px-6">&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-secondary align-top">
                            <td class="py-4 pr-6 font-medium">Shipping</td>
                            <td class="py-4 pl-6 text-end">Calculated at checkout</td>
                          </tr>
                          <tr class="border-b border-secondary align-top">
                            <td class="py-4 pr-6 font-medium">Subtotal</td>
                            <td class="py-4 pl-6 text-end">$200 SGD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-10 -mx-px">
                      <button class="btn btn-secondary btn-block" @click="lazyHideCartModal">
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button type="button" class="link" @click="mainStore.cartVisible = false">
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <input ref="modalConfirmRemoveToggle" type="checkbox" class="modal-toggle" />
      <div ref="modalConfirmRemove" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box max-w-none sm:max-w-2xl">
          <h3 class="font-bold text-lg">Are you sure want to remove this line item?</h3>
          <div class="modal-action">
            <button
              class="btn btn-ghost pointer-events-auto"
              :disabled="removingLineItem"
              @click="modalConfirmRemoveToggle.checked = false"
            >
              Cancel
            </button>
            <button
              class="btn btn-error btn-outline pointer-events-auto"
              :disabled="removingLineItem"
              @click.prevent="removeLineItem"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Teleport>
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
  @apply translate-x-full;
}
.slide-leave-to {
  @apply translate-x-0;
}
</style>
