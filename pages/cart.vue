<script setup lang="ts">
useSeo({ title: 'Cart' })
definePageMeta({
  bg: 'bg-accent'
})

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
</script>

<template>
  <section class="container mx-auto px-4 py-12 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6">
    <div class="flex-1">
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left">
          <thead class="text-xs uppercase border-b-2 border-secondary">
            <tr>
              <th scope="col" class="py-3 pr-6">Cart</th>
              <th scope="col" class="py-3 px-6 text-center">Product</th>
              <th scope="col" class="py-3 px-6">Quantity</th>
              <th scope="col" class="py-3 pl-6 text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in cartLineItems" :key="i" class="border-b border-secondary align-top">
              <th>
                <button class="btn btn-ghost btn-square">
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
              </th>
              <td scope="row" class="py-4 pr-6 flex flex-row space-x-4">
                <div class="w-24 h-32 border bg-accent">
                  <img :src="item.img" class="w-full h-full object-contain object-center" />
                </div>
                <div>
                  <p class="uppercase mb-2 font-medium">{{ item.name }}</p>
                  <p>{{ item.variant }}</p>
                </div>
              </td>
              <td class="py-4 px-6 whitespace-nowrap">
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
              </td>
              <td class="py-4 pl-6">{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
        <button class="btn btn-secondary btn-block">Proceed to Checkout</button>
      </div>
    </div>
  </section>
</template>
