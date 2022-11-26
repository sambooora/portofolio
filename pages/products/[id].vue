<script setup lang="ts">
const route = useRoute()
useSeo({ title: 'Project' })
const mainStore = useMainStore()

const product = ref<Product>(mainStore.products.find((i) => i.id === route.params.id))

const selectedVariant = ref<ProductVariant>(mainStore.products.find((i) => i.id === route.params.id).variants[0])
const qty = ref(1)

const pairRecommendations = ref<Product[]>(mainStore.products.filter((i) => i.id !== route.params.id))
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="flex space-y-6 flex-col-reverse space-y-reverse lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12">
      <div class="lg:w-1/2 flex flex-col justify-center">
        <div class="prose">
          <h3>{{ product.name }}</h3>
          <div v-html="product.description"></div>
          <div class="btn-group not-prose mt-12">
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
                {{ qty }}
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
            <button class="btn btn-secondary flex-1">Add to Cart ${{ selectedVariant.price }} SGD</button>
          </div>
        </div>
      </div>
      <div class="w-full h-full lg:w-1/2">
        <img :src="product.img" class="w-full h-full object-contain object-center" alt="" />
      </div>
    </div>

    <div class="mt-20">
      <h3 class="text-lg font-medium text-center mb-8">Pair this product with</h3>
      <div class="carousel rounded-box">
        <div v-for="(item, i) in pairRecommendations" :key="i" class="carousel-item w-full">
          <div class="w-full flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12">
            <div class="w-full lg:w-1/2">
              <img :src="item.img" class="w-full h-full object-contain object-center" alt="" />
            </div>
            <div class="lg:w-1/2 flex flex-col justify-center">
              <div class="prose">
                <h3>{{ item.name }}</h3>
                <div v-html="item.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
