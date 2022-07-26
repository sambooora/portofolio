<script setup lang="ts">
const mainStore = useMainStore()

const products = ref<(Product & { selectedVariant: ProductVariant })[]>(
  mainStore.products.map((i) => ({ ...i, selectedVariant: i.variants[0] }))
)

const modalDiscoverVisible = ref(false)
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="w-full inline-flex overflow-x-auto space-x-6 whitespace-nowrap pb-4">
      <NuxtLink to="/products">All</NuxtLink>
      <NuxtLink v-for="(product, i) in mainStore.products" :key="i" :to="`/products/${product.id}`">
        {{ product.name }}
      </NuxtLink>
    </div>

    <div class="mt-12 flex flex-col space-y-12">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="flex space-y-6 flex-col-reverse space-y-reverse lg:space-y-0 lg:space-x-8 xl:space-x-12 lg:even:space-x-reverse lg:odd:flex-row lg:even:flex-row-reverse"
      >
        <div class="lg:w-1/2 flex flex-col justify-center">
          <div class="prose">
            <h3>{{ product.name }}</h3>
            <div class="not-prose w-full inline-flex overflow-x-auto whitespace-nowrap -mx-3 mt-8">
            </div>
            <div v-html="product.description"></div>
            <div class="btn-group not-prose mt-12">
              <button class="btn btn-outline btn-secondary w-1/2" @click="modalDiscoverVisible = true">
                View Study Case 
              </button>
              <button class="btn btn-secondary w-1/2">Visit website</button>
            </div>
          </div>
        </div>
        <div class="w-full h-full lg:w-1/2">
          <img :src="product.img" class="w-full h-full object-contain object-center" alt="" />
        </div>
      </div>
    </div>

    <ModalDiscover :visible="modalDiscoverVisible" @dismiss="modalDiscoverVisible = false" />
  </section>
</template>
