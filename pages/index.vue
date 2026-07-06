<script setup lang="ts">
useSeo()
</script>

<template>
  <div>
    <!-- ============================================ -->
    <!-- HERO SECTION                                 -->
    <!-- ============================================ -->
    <section
      class="-mt-16 sm:-mt-20 md:-mt-24 relative flex flex-col overflow-hidden"
      style="min-height: 100vh"
    >
      <!-- Background image + gradient overlay -->
      <div class="absolute inset-0">
        <img
          src="/images/hero-1.jpg"
          alt=""
          class="h-full w-full object-cover object-center"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/95 to-orange-500/20"
        />
        <div class="absolute inset-0 bg-base-100/60" />
      </div>

      <!-- Content -->
      <div
        class="container relative z-10 mx-auto flex flex-1 flex-col justify-end px-5 pb-10 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:px-10 lg:px-16"
      >
        <!-- Top label -->
        <p
          data-aos="fade-down"
          data-aos-duration="600"
          class="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-orange-500 sm:mb-6 sm:text-sm"
        >
          Portfolio &mdash; 2024
        </p>

        <!-- Main heading + subtext row -->
        <div class="flex flex-col gap-6 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div data-aos="fade-up" data-aos-duration="800" class="max-w-4xl">
            <h1
              class="text-5xl font-extrabold leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Creative<br />
              <span class="text-orange-500">Developer</span>
            </h1>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            class="max-w-sm text-sm leading-relaxed text-base-content/60 sm:text-base lg:text-right"
          >
            Great design should feel invisible. From UI to code, I build digital
            experiences that connect and convert.
          </p>
        </div>

        <!-- Service categories -->
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="mt-10 grid grid-cols-2 gap-4 border-t border-base-content/10 pt-6 sm:mt-16 sm:gap-6 sm:pt-8 md:grid-cols-4"
        >
          <div class="flex flex-col gap-1">
            <span class="text-xs font-bold text-orange-500 sm:text-sm">#01</span>
            <span class="text-xs font-medium text-base-content/80 sm:text-sm"
              >UI/UX Design</span
            >
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-bold text-orange-500 sm:text-sm">#02</span>
            <span class="text-xs font-medium text-base-content/80 sm:text-sm"
              >Front-End Development</span
            >
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-bold text-orange-500 sm:text-sm">#03</span>
            <span class="text-xs font-medium text-base-content/80 sm:text-sm"
              >Brand Identity</span
            >
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-bold text-orange-500 sm:text-sm">#04</span>
            <span class="text-xs font-medium text-base-content/80 sm:text-sm"
              >Creative Direction</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- TRUSTED BRANDS BAR                           -->
    <!-- ============================================ -->
    <section class="border-y border-base-content/10 bg-base-100">
      <div
        class="container mx-auto flex flex-col items-center gap-4 px-5 py-8 sm:gap-6 sm:px-6 sm:py-10 md:flex-row md:gap-12 md:px-10 lg:px-16"
      >
        <p
          data-aos="fade-right"
          class="shrink-0 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-base-content/40 sm:text-xs md:text-left"
        >
          Trusted by brands I&rsquo;ve helped shape
        </p>
        <div
          data-aos="fade-left"
          class="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 sm:gap-y-4 md:justify-end"
        >
          <span class="text-sm font-bold tracking-wide text-base-content/20 sm:text-lg"
            >PICASSO</span
          >
          <span class="text-sm font-bold tracking-wide text-base-content/20 sm:text-lg"
            >JOGJANODE</span
          >
          <span class="text-sm font-bold tracking-wide text-base-content/20 sm:text-lg"
            >CGV</span
          >
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- ABOUT / BEHIND THE DESIGNS                   -->
    <!-- ============================================ -->
    <section class="bg-base-100 py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <!-- Featured image -->
        <div data-aos="fade-up" class="relative mb-10 overflow-hidden rounded-2xl sm:mb-16 sm:rounded-3xl">
          <div class="aspect-[16/9] w-full sm:aspect-[21/9]">
            <img
              src="/images/profile-1.png"
              alt="Creative work"
              class="h-full w-full object-cover object-center"
            />
            <!-- Dark gradient overlay from bottom -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/20 to-transparent"
            />
            <!-- Subtle orange accent glow -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent mix-blend-overlay"
            />
          </div>
        </div>

        <!-- Text content -->
        <div
          class="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-start md:gap-16 lg:gap-24"
        >
          <!-- Left column -->
          <div data-aos="fade-right" class="md:w-1/2">
            <span
              class="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-4 sm:text-sm"
            >
              Behind the Designs
            </span>
            <h2
              class="text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Shaping Experiences<br class="hidden lg:block" />
              That Make Life<br class="hidden lg:block" />
              <span class="text-orange-500">Simpler</span>
            </h2>
          </div>

          <!-- Right column -->
          <div data-aos="fade-left" class="flex flex-col gap-6 sm:gap-8 md:w-1/2 md:pt-6">
            <p class="text-base leading-relaxed text-base-content/70 sm:text-lg">
              I&rsquo;m a product designer &amp; developer focused on building clean,
              intuitive interfaces that solve real-world problems. With a passion for
              great typography, motion, and interaction design, I craft digital products
              that not only look stunning but truly work for people.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <a
                href="mailto:richiesambora9029@gmail.com"
                class="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 sm:px-7 sm:py-3"
              >
                Get in touch
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
              </a>
            </div>

            <!-- Quick stats -->
            <div
              class="mt-2 grid grid-cols-3 gap-4 border-t border-base-content/10 pt-6 sm:mt-4 sm:gap-6 sm:pt-8"
            >
              <div>
                <span class="text-2xl font-extrabold text-white sm:text-3xl">4+</span>
                <p class="mt-1 text-[0.65rem] text-base-content/50 sm:text-xs">Years Experience</p>
              </div>
              <div>
                <span class="text-2xl font-extrabold text-white sm:text-3xl">20+</span>
                <p class="mt-1 text-[0.65rem] text-base-content/50 sm:text-xs">Projects Delivered</p>
              </div>
              <div>
                <span class="text-2xl font-extrabold text-white sm:text-3xl">3</span>
                <p class="mt-1 text-[0.65rem] text-base-content/50 sm:text-xs">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- PROJECTS                                     -->
    <!-- ============================================ -->
    <section class="bg-base-200 py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <!-- Section header -->
        <div
          data-aos="fade-up"
          class="mb-10 flex flex-col gap-4 sm:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span
              class="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-3 sm:text-sm"
            >
              Selected Work
            </span>
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Latest Projects
            </h2>
          </div>
          <p class="max-w-sm text-sm text-base-content/60 sm:text-base">
            A curated selection of projects showcasing UI design, front-end
            development, and creative problem solving.
          </p>
        </div>

        <!-- Project grid -->
        <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <!-- Project 1 -->
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            class="group flex flex-col overflow-hidden rounded-2xl bg-base-100"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/product-1.png"
                alt="Picasso Dashboard"
                class="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div class="flex flex-1 flex-col gap-2 p-5 sm:p-6">
              <span class="text-xs font-bold text-orange-500">#01</span>
              <h3 class="text-lg font-bold text-white sm:text-xl">Picasso Dashboard</h3>
              <p class="text-sm leading-relaxed text-base-content/60">
                A back-office management platform for hotel operations including
                reservations, campaign management, and accounting.
              </p>
            </div>
          </div>

          <!-- Project 2 -->
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="group flex flex-col overflow-hidden rounded-2xl bg-base-100"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/product-2.png"
                alt="Picasso Restaurant"
                class="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div class="flex flex-1 flex-col gap-2 p-5 sm:p-6">
              <span class="text-xs font-bold text-orange-500">#02</span>
              <h3 class="text-lg font-bold text-white sm:text-xl">Picasso Restaurant</h3>
              <p class="text-sm leading-relaxed text-base-content/60">
                An online menu and ordering system designed to streamline the
                restaurant experience and reduce wait times.
              </p>
            </div>
          </div>

          <!-- Project 3 -->
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="group flex flex-col overflow-hidden rounded-2xl bg-base-100"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/product-3.png"
                alt="Picasso Landing Page"
                class="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div class="flex flex-1 flex-col gap-2 p-5 sm:p-6">
              <span class="text-xs font-bold text-orange-500">#03</span>
              <h3 class="text-lg font-bold text-white sm:text-xl">
                Picasso Landing Page
              </h3>
              <p class="text-sm leading-relaxed text-base-content/60">
                A high-impact hotel landing page and promotional hub designed to
                drive conversions and brand awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- EXPERIENCE                                   -->
    <!-- ============================================ -->
    <section class="bg-base-100 py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div
          class="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-24"
        >
          <!-- Left: heading -->
          <div data-aos="fade-right" class="lg:w-5/12">
            <span
              class="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-3 sm:text-sm"
            >
              Career Path
            </span>
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Experience
            </h2>
            <p class="mt-3 text-sm leading-relaxed text-base-content/60 sm:mt-4 sm:text-base">
              A timeline of roles where I honed my craft across design,
              development, and technical operations.
            </p>
          </div>

          <!-- Right: accordion list -->
          <div data-aos="fade-left" class="flex flex-1 flex-col gap-3 sm:gap-4">
            <!-- Experience 1 -->
            <div
              tabindex="0"
              class="collapse collapse-arrow rounded-xl border border-base-content/10 bg-base-200"
            >
              <div class="collapse-title flex flex-col gap-1 pr-12">
                <div class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <span class="text-base font-bold text-white sm:text-lg"
                    >Jogjanode (PT Tinuju Agawe Sentosa)</span
                  >
                  <span
                    class="w-fit rounded-full bg-orange-500/10 px-3 py-0.5 text-xs font-semibold text-orange-500"
                    >Current</span
                  >
                </div>
                <span class="text-xs text-base-content/50 sm:text-sm"
                  >2022 &mdash; Present &middot; Front-End Developer</span
                >
              </div>
              <div class="collapse-content">
                <p class="leading-relaxed text-base-content/70">
                  Developed and maintained responsive web applications using
                  Nuxt.js and Tailwind CSS. Integrated RESTful APIs to create
                  dynamic, data-driven interfaces. Focused on performance
                  optimization, reusable components, and clean code practices.
                  Collaborated closely with designers and back-end developers to
                  deliver seamless user experiences in agile environments.
                </p>
              </div>
            </div>

            <!-- Experience 2 -->
            <div
              tabindex="0"
              class="collapse collapse-arrow rounded-xl border border-base-content/10 bg-base-200"
            >
              <div class="collapse-title flex flex-col gap-1 pr-12">
                <span class="text-base font-bold text-white sm:text-lg"
                  >Grand Picasso Hotel Developer Team</span
                >
                <span class="text-xs text-base-content/50 sm:text-sm"
                  >2020 &mdash; 2022 &middot; Front-End Developer</span
                >
              </div>
              <div class="collapse-content">
                <p class="leading-relaxed text-base-content/70">
                  Worked on web design projects including responsive mobile
                  layouts. From wireframes to mockups to production HTML/SCSS,
                  bridging the gap between design and development. Being both
                  designer and developer gave me deep insight into what works
                  effectively in both worlds.
                </p>
              </div>
            </div>

            <!-- Experience 3 -->
            <div
              tabindex="0"
              class="collapse collapse-arrow rounded-xl border border-base-content/10 bg-base-200"
            >
              <div class="collapse-title flex flex-col gap-1 pr-12">
                <span class="text-base font-bold text-white sm:text-lg"
                  >PT. Graha Layar Prima Tbk (CGV Cinemas)</span
                >
                <span class="text-xs text-base-content/50 sm:text-sm"
                  >2018 &mdash; 2020 &middot; Movie Engineering Support</span
                >
              </div>
              <div class="collapse-content">
                <p class="leading-relaxed text-base-content/70">
                  Maintained and troubleshot film equipment (projectors, servers,
                  sound systems) and IT assets. Managed company networking
                  including routing, switching, and firewall configuration.
                  Built a strong foundation in technical operations and
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ -->
    <!-- SKILLS / SERVICES                            -->
    <!-- ============================================ -->
    <section class="bg-base-200 py-16 sm:py-24 md:py-32">
      <div class="container mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <!-- Section header -->
        <div data-aos="fade-up" class="mb-10 text-center sm:mb-16">
          <span
            class="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:mb-3 sm:text-sm"
          >
            What I Do
          </span>
          <h2
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Services &amp; Skills
          </h2>
        </div>

        <!-- Services grid -->
        <div
          class="mb-12 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            class="group rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all hover:border-orange-500/30 sm:p-8"
          >
            <span
              class="mb-4 inline-block text-2xl font-extrabold text-orange-500 sm:mb-6 sm:text-3xl"
              >01</span
            >
            <h3 class="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">UI/UX Design</h3>
            <p class="text-sm leading-relaxed text-base-content/60">
              User-centered design thinking applied to create intuitive,
              accessible, and visually refined interfaces.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="group rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all hover:border-orange-500/30 sm:p-8"
          >
            <span
              class="mb-4 inline-block text-2xl font-extrabold text-orange-500 sm:mb-6 sm:text-3xl"
              >02</span
            >
            <h3 class="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">
              Front-End Development
            </h3>
            <p class="text-sm leading-relaxed text-base-content/60">
              Pixel-perfect implementation with Vue, Nuxt, and modern CSS
              frameworks. Performance-first approach.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="group rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all hover:border-orange-500/30 sm:p-8"
          >
            <span
              class="mb-4 inline-block text-2xl font-extrabold text-orange-500 sm:mb-6 sm:text-3xl"
              >03</span
            >
            <h3 class="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">Brand Identity</h3>
            <p class="text-sm leading-relaxed text-base-content/60">
              Crafting cohesive visual identities that communicate your brand's
              values and resonate with your audience.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="group rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all hover:border-orange-500/30 sm:p-8"
          >
            <span
              class="mb-4 inline-block text-2xl font-extrabold text-orange-500 sm:mb-6 sm:text-3xl"
              >04</span
            >
            <h3 class="mb-2 text-lg font-bold text-white sm:mb-3 sm:text-xl">
              Creative Direction
            </h3>
            <p class="text-sm leading-relaxed text-base-content/60">
              Strategic vision and art direction to ensure every touchpoint
              tells a unified, compelling story.
            </p>
          </div>
        </div>

        <!-- Skill sets -->
        <div class="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
          <!-- Design skills -->
          <div data-aos="fade-right">
            <h3
              class="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
            >
              Design Tools
            </h3>
            <div class="flex flex-col gap-5">
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white"
                    >Figma &amp; Adobe XD</span
                  >
                  <span class="text-xs text-base-content/50">UI Design</span>
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 79%"
                  />
                </div>
              </div>
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white"
                    >Adobe Photoshop</span
                  >
                  <span class="text-xs text-base-content/50"
                    >Image Processing</span
                  >
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 80%"
                  />
                </div>
              </div>
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white"
                    >CorelDRAW</span
                  >
                  <span class="text-xs text-base-content/50"
                    >Vector Graphics</span
                  >
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 95%"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Coding skills -->
          <div data-aos="fade-left">
            <h3
              class="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
            >
              Development
            </h3>
            <div class="flex flex-col gap-5">
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white"
                    >Vue &amp; Nuxt</span
                  >
                  <span class="text-xs text-base-content/50">JavaScript</span>
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 81%"
                  />
                </div>
              </div>
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white">Laravel</span>
                  <span class="text-xs text-base-content/50">PHP</span>
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 80%"
                  />
                </div>
              </div>
              <div>
                <div class="mb-2 flex items-center justify-between">
                  <span class="text-sm font-medium text-white"
                    >Tailwind &amp; Bootstrap</span
                  >
                  <span class="text-xs text-base-content/50">CSS</span>
                </div>
                <div class="h-1 w-full overflow-hidden rounded-full bg-base-content/10">
                  <div
                    class="h-full rounded-full bg-orange-500 transition-all duration-700"
                    style="width: 95%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.collapse-title::after {
  color: theme('colors.orange.500');
}
</style>
