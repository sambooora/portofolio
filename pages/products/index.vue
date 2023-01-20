<script setup lang="ts">
const mainStore = useMainStore()
useSeo({ title: 'Project' })

const products = ref<(Product & { selectedVariant: ProductVariant })[]>(
  mainStore.products.map((i) => ({ ...i, selectedVariant: i.variants[0] }))
)
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="w-full inline-flex overflow-x-auto space-x-6 whitespace-nowrap pb-4">
      <NuxtLink to="/products">All</NuxtLink>
      <!-- <NuxtLink v-for="(product, i) in mainStore.products" :key="i" :to="`/products/${product.id}`">
        {{ product.name }}
      </NuxtLink> -->
      <NuxtLink v-for="(product, i) in mainStore.products">
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
              <a :href="product.href" target="_blank" class="btn btn-outline text-white border-white w-1/2">Visit website</a>
            </div>
          </div>
        </div>
        <div class="w-full h-full lg:w-1/2">
          <img :src="product.img" class="w-full h-full object-contain object-center" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
