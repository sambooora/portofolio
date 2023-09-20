<script setup lang="ts">
const route = useRoute()
useSeo({ title: 'Project' })
const mainStore = useMainStore()
const product = ref<Product>(mainStore.products.find((i) => i.id === route.params.id))
</script>

<template>
  <section class="container mx-auto px-4">
    <div class="flex space-y-6 flex-col-reverse space-y-reverse lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12">
      <div class="lg:w-1/2 flex flex-col justify-center">
        <div class="prose">
          <h3>{{ product.name }}</h3>
          <div v-html="product.description"></div>
        </div>
      </div>
      <div class="w-full h-full lg:w-1/2">
        <img :src="product.img" class="w-full h-full object-contain object-center" alt="" />
      </div>
    </div>
  </section>
</template>
