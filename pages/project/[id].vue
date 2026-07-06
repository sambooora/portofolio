<script setup lang="ts">
const route = useRoute()
const mainStore = useMainStore()

const product = ref<Product | undefined>(
  mainStore.products.find(i => i.id === route.params.id)
)

const productIndex = computed(() => {
  const idx = mainStore.products.findIndex(i => i.id === route.params.id)
  return idx >= 0 ? idx + 1 : null
})

const formattedIndex = computed(() =>
  productIndex.value !== null
    ? String(productIndex.value).padStart(2, '0')
    : '--'
)

useSeo({ title: product.value?.name || 'Project' })
</script>

<template>
  <div>
    <!-- ============================================ -->
    <!-- PROJECT NOT FOUND                            -->
    <!-- ============================================ -->
    <template v-if="!product">
      <section
        class="relative flex min-h-[70vh] items-center justify-center bg-base-100 py-16 sm:py-24 md:py-32 overflow-hidden"
      >
        <!-- Glow decorations -->
        <div
          class="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-orange-500/10 blur-[100px]"
        />
        <div
          class="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px] sm:h-96 sm:w-96"
        />

        <div class="relative z-10 text-center px-5">
          <span
            class="mb-4 inline-block text-7xl font-extrabold text-orange-500/20 sm:text-9xl"
          >
            404
          </span>
          <h1
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Project Not Found
          </h1>
          <p
            class="mt-4 max-w-md mx-auto text-sm leading-relaxed text-base-content/60 sm:text-base"
          >
            The project you're looking for doesn't exist or may have been
            removed.
          </p>
          <NuxtLink
            to="/project"
            class="mt-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white sm:text-base"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </NuxtLink>
        </div>
      </section>
    </template>

    <!-- ============================================ -->
    <!-- PROJECT DETAIL                               -->
    <!-- ============================================ -->
    <template v-else>
      <!-- ======================================== -->
      <!-- HERO / HEADER AREA                       -->
      <!-- ======================================== -->
      <section
        class="relative bg-base-100 pt-8 pb-16 sm:pt-12 sm:pb-24 md:pb-32 overflow-hidden"
      >
        <!-- Glow decorations -->
        <div
          class="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-orange-500/10 blur-[100px]"
        />
        <div
          class="absolute top-1/2 -right-32 h-72 w-72 rounded-full bg-orange-500/15 blur-[120px] sm:h-96 sm:w-96"
        />
        <div
          class="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-orange-500/5 blur-[80px]"
        />

        <div
          class="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16"
        >
          <!-- Back link -->
          <NuxtLink
            to="/project"
            data-aos="fade-down"
            data-aos-duration="600"
            class="group mb-10 inline-flex items-center gap-2.5 text-sm font-medium text-base-content/50 transition-colors duration-300 hover:text-orange-500 sm:mb-14 sm:text-base"
          >
            <svg
              class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </NuxtLink>

          <!-- Heading row -->
          <div
            class="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <!-- Title + label -->
            <div data-aos="fade-up" data-aos-duration="800" class="max-w-3xl">
              <span
                class="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-4 sm:text-sm"
              >
                Project #{{ formattedIndex }}
              </span>
              <h1
                class="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {{ product.name }}
              </h1>
            </div>

            <!-- Decorative number -->
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
              class="hidden lg:block"
            >
              <span
                class="text-[8rem] font-extrabold leading-none tracking-tighter text-white/[0.03] xl:text-[10rem]"
              >
                {{ formattedIndex }}
              </span>
            </div>
          </div>

          <!-- Divider -->
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="mt-8 border-t border-base-content/10 sm:mt-12"
          />
        </div>
      </section>

      <!-- ======================================== -->
      <!-- IMAGE SHOWCASE SECTION                   -->
      <!-- ======================================== -->
      <section class="bg-base-200 py-16 sm:py-24 md:py-32 overflow-hidden">
        <div
          class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3 backdrop-blur-sm sm:rounded-3xl sm:p-4 md:p-5"
          >
            <!-- Inner glow effect -->
            <div
              class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent sm:rounded-3xl"
            />

            <!-- Image -->
            <div class="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                :src="product.img"
                :alt="product.name"
                class="w-full object-cover object-center"
              />
              <!-- Bottom gradient fade -->
              <div
                class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base-200/50 to-transparent sm:h-32"
              />
            </div>

            <!-- Decorative quote mark -->
            <div
              class="absolute -bottom-4 -right-2 text-orange-500/60 sm:-bottom-6 sm:-right-4"
            >
              <svg
                class="h-16 w-16 sm:h-24 sm:w-24"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path
                  d="M20 70 L20 45 Q20 30 35 30 L40 30 L40 20 L35 20 Q10 20 10 45 L10 70 Z"
                />
                <path
                  d="M55 70 L55 45 Q55 30 70 30 L75 30 L75 20 L70 20 Q45 20 45 45 L45 70 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- ======================================== -->
      <!-- DESCRIPTION SECTION                      -->
      <!-- ======================================== -->
      <section
        class="relative bg-base-100 py-16 sm:py-24 md:py-32 overflow-hidden"
      >
        <!-- Glow decorations -->
        <div
          class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[120px]"
        />
        <div
          class="absolute top-20 -right-16 h-48 w-48 rounded-full bg-orange-500/5 blur-[100px]"
        />

        <div
          class="container relative z-10 mx-auto px-5 sm:px-6 md:px-10 lg:px-16"
        >
          <div
            class="mx-auto max-w-4xl"
          >
            <!-- Section label -->
            <div data-aos="fade-up" class="mb-8 sm:mb-12">
              <span
                class="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-3 sm:text-sm"
              >
                About This Project
              </span>
              <h2
                class="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
              >
                Project Details
              </h2>
            </div>

            <!-- Description card -->
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-10"
            >
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/[0.03] via-transparent to-transparent sm:rounded-3xl pointer-events-none"
              />
              <div
                class="prose prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                  prose-p:text-base-content/80 prose-p:leading-relaxed
                  prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-ul:text-base-content/80
                  prose-ol:text-base-content/80
                  prose-li:text-base-content/80 prose-li:marker:text-orange-500
                  prose-code:text-orange-400 prose-code:bg-white/5 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5
                  sm:text-lg"
                v-html="product.description"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ======================================== -->
      <!-- BOTTOM NAV / CTA                         -->
      <!-- ======================================== -->
      <section class="border-t border-base-content/10 bg-base-200">
        <div
          class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16"
        >
          <div
            data-aos="fade-up"
            class="flex flex-col items-center justify-between gap-6 py-12 sm:flex-row sm:py-16"
          >
            <NuxtLink
              to="/project"
              class="group inline-flex items-center gap-2.5 text-sm font-medium text-base-content/50 transition-colors duration-300 hover:text-orange-500 sm:text-base"
            >
              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to All Projects
            </NuxtLink>

            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/30"
            >
              Project #{{ formattedIndex }} — {{ product.name }}
            </span>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
