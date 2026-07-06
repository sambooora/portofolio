<script setup lang="ts">
const mainStore = useMainStore()
useSeo({ title: 'Project' })
</script>

<template>
  <div>
    <!-- ============================================ -->
    <!-- HERO SECTION                                 -->
    <!-- ============================================ -->
    <section class="relative overflow-hidden bg-base-100 py-24 sm:py-32 md:py-40">
      <!-- Decorative glow blobs -->
      <div
        class="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px] sm:h-96 sm:w-96"
      />
      <div
        class="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-orange-500/10 blur-[100px]"
      />
      <div
        class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.06] blur-[140px]"
      />

      <div class="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div class="flex flex-col items-center text-center">
          <!-- Uppercase label -->
          <span
            data-aos="fade-up"
            data-aos-duration="600"
            class="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-5 sm:text-sm"
          >
            Portfolio
          </span>

          <!-- Main heading -->
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            class="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Selected
            <span class="text-orange-500">Work</span>
          </h1>

          <!-- Subtitle -->
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            class="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-base-content/80 sm:mt-6 sm:text-base md:text-lg"
          >
            A curated collection of projects showcasing UI design, front-end development, and
            creative problem solving.
          </p>

          <!-- Decorative divider -->
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="mt-8 flex items-center gap-3 sm:mt-10"
          >
            <span class="h-px w-8 bg-orange-500/40 sm:w-12" />
            <span class="text-xs font-medium tracking-widest text-base-content/30">
              {{ String(mainStore.products.length).padStart(2, '0') }} PROJECTS
            </span>
            <span class="h-px w-8 bg-orange-500/40 sm:w-12" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- PROJECTS LIST                                -->
    <!-- ============================================ -->
    <section class="relative bg-base-200 py-16 sm:py-24 md:py-32 overflow-hidden">
      <!-- Background glow accents -->
      <div
        class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]"
      />
      <div
        class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/[0.07] blur-[140px]"
      />

      <div class="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div class="flex flex-col gap-16 sm:gap-20 md:gap-28 lg:gap-32">
          <!-- Project card (full-width, alternating layout) -->
          <div
            v-for="(product, i) in mainStore.products"
            :key="product.id"
            data-aos="fade-up"
            :data-aos-delay="String(i * 100)"
            class="group relative"
          >
            <!-- Glass card wrapper -->
            <div
              class="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm sm:rounded-3xl"
            >
              <!-- Inner gradient glow -->
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent sm:rounded-3xl"
              />

              <!-- Content: two-column split, alternating image side -->
              <div
                class="relative flex flex-col"
                :class="[
                  i % 2 === 0
                    ? 'lg:flex-row'
                    : 'lg:flex-row-reverse'
                ]"
              >
                <!-- Image column -->
                <div class="relative w-full lg:w-1/2">
                  <div class="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
                    <img
                      :src="product.img"
                      :alt="product.name"
                      class="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <!-- Hover gradient overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent"
                      :class="[
                        i % 2 === 0
                          ? 'lg:bg-gradient-to-r lg:from-transparent lg:to-base-100/40'
                          : 'lg:bg-gradient-to-l lg:from-transparent lg:to-base-100/40'
                      ]"
                    />

                    <!-- Project number badge (floating) -->
                    <div
                      class="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-base-100/80 backdrop-blur-md sm:top-6 sm:left-6 sm:h-12 sm:w-12"
                    >
                      <span class="text-sm font-bold text-orange-500 sm:text-base">
                        #{{ String(i + 1).padStart(2, '0') }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Text column -->
                <div class="flex w-full flex-col justify-center p-6 sm:p-8 md:p-10 lg:w-1/2 lg:p-12 xl:p-16">
                  <!-- Project number (desktop, inline) -->
                  <span class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-4 sm:text-sm">
                    Project {{ String(i + 1).padStart(2, '0') }}
                  </span>

                  <!-- Project name -->
                  <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {{ product.name }}
                  </h2>

                  <!-- Divider -->
                  <div class="my-4 h-px w-12 bg-orange-500/40 sm:my-6 sm:w-16" />

                  <!-- Description (HTML) -->
                  <div
                    class="prose prose-sm prose-invert max-w-none prose-p:text-base-content/70 prose-p:leading-relaxed prose-li:text-base-content/70 prose-ul:my-2 sm:prose-base"
                    v-html="product.description"
                  />

                  <!-- View Details link -->
                  <div class="mt-6 sm:mt-8">
                    <NuxtLink
                      :to="'/project/' + product.id"
                      class="group/link inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-2.5 text-sm font-semibold text-orange-500 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:px-7 sm:py-3"
                    >
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- BOTTOM CTA                                   -->
    <!-- ============================================ -->
    <section class="relative overflow-hidden bg-base-100 py-16 sm:py-24 md:py-32">
      <!-- Glow blob -->
      <div
        class="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 blur-[120px] sm:h-80 sm:w-80"
      />

      <div class="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div
          data-aos="fade-up"
          class="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span
            class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-4 sm:text-sm"
          >
            Let's Collaborate
          </span>
          <h2
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Have a project in
            <span class="text-orange-500">mind?</span>
          </h2>
          <p
            class="mt-4 max-w-md text-sm leading-relaxed text-base-content/80 sm:mt-5 sm:text-base"
          >
            I'm always open to new opportunities and interesting projects. Let's build something
            great together.
          </p>
          <NuxtLink
            to="/contact"
            class="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 sm:mt-10"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
