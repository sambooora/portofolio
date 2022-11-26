<script setup lang="ts">
useSeo({ title: 'About' })
definePageMeta({
  bg: 'bg-accent'
})
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div class="w-full max-w-xl prose lg:prose-lg">
      <p>
        At Aquifer, we produce effective skincare for all genders. Experience younger and healthier skin with our
        premium products, made without harmful or unnecessary ingredients.
      </p>
      <p>
        Our advanced manufacturing technology allows our skincare to deliver proven results. Rebuild, repair and
        preserve your skin with Aquifer.
      </p>
    </div>
    <div class="my-12">
      <img src="/images/about.png" class="w-full" />
    </div>

    <div class="flex flex-col space-y-8 prose lg:prose-lg max-w-none">
      <div>
        <h3 class="font-medium">Our Values and Philosophy</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          <div>
            <h4 class="uppercase">Environmental Sobriety</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div>
            <h4 class="uppercase">Health is Beauty</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div>
            <h4 class="uppercase">Trustworthy and skin respectful</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 class="font-medium">Our Science and Technology</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          <div>
            <h4 class="uppercase">Natural Biofabrication Process</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div>
            <h4 class="uppercase">Advanced Manufacturing Technology</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div>
            <h4 class="uppercase">Backed by Science</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
