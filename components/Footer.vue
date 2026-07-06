<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-base-content/10 bg-base-100">
    <!-- Main footer content -->
    <div class="container mx-auto px-6 pb-12 pt-16 md:px-10 lg:px-16">
      <div class="flex flex-col gap-12 lg:flex-row lg:gap-24">
        <!-- Left: Brand + description -->
        <div class="flex flex-col gap-6 lg:w-5/12">
          <NuxtLink to="/">
            <img
              src="/images/logo-footer.png"
              alt="Richie Sambora"
              class="h-12 w-auto lg:h-16"
            />
          </NuxtLink>
          <p class="max-w-sm text-sm leading-relaxed text-base-content/90">
            I design and develop experiences that make people's lives simple.
            Crafting clean, intuitive interfaces powered by modern technology.
          </p>

          <!-- Social icons -->
          <div class="flex items-center gap-4">
            <a
              href="https://twitter.com/sambooora"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-base-content/10 text-base-content/40 transition-all hover:border-orange-500/50 hover:text-orange-500"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/sambooora"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-base-content/10 text-base-content/40 transition-all hover:border-orange-500/50 hover:text-orange-500"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://dribbble.com/richiesambora9029"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-base-content/10 text-base-content/40 transition-all hover:border-orange-500/50 hover:text-orange-500"
              aria-label="Dribbble"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.17 10.17 0 012.25 6.375c-.328-.063-3.625-.734-6.938-.328-.063-.156-.125-.297-.203-.453-.219-.5-.453-.984-.703-1.469 3.672-1.5 5.328-3.641 5.594-3.953v-.172zM12 1.828c2.578 0 4.938.984 6.703 2.578-.219.281-1.734 2.281-5.266 3.609-1.641-3.016-3.469-5.484-3.75-5.859A10.258 10.258 0 0112 1.828zM7.703 3.047c.266.344 2.063 2.844 3.734 5.797-4.703 1.25-8.859 1.234-9.297 1.234a10.22 10.22 0 015.563-7.031zM1.813 12.016v-.313c.422.016 5.234.063 10.234-1.422.281.547.547 1.109.797 1.672-.125.031-.25.078-.375.125-5.25 1.688-8.047 6.313-8.313 6.75a10.158 10.158 0 01-2.343-6.813zM12 22.203a10.15 10.15 0 01-6.281-2.172c.203-.422 2.313-4.359 8.063-6.375l.063-.016a37.468 37.468 0 012.156 7.641A10.092 10.092 0 0112 22.203zm3.797-1.266a38.422 38.422 0 00-2.031-7.313c3.094-.5 5.797.313 6.141.422a10.209 10.209 0 01-4.109 6.891z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/sambooora"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-base-content/10 text-base-content/40 transition-all hover:border-orange-500/50 hover:text-orange-500"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Navigation columns -->
        <div class="flex flex-1 flex-col gap-8 sm:flex-row sm:gap-12 lg:justify-end lg:gap-24">
          <!-- Pages -->
          <div class="flex flex-col gap-4">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Pages
            </span>
            <div class="flex flex-col gap-3">
              <NuxtLink
                to="/"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                Overview
              </NuxtLink>
              <NuxtLink
                to="/project"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                Projects
              </NuxtLink>
            </div>
          </div>

          <!-- Socials -->
          <div class="flex flex-col gap-4">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Socials
            </span>
            <div class="flex flex-col gap-3">
              <a
                href="https://twitter.com/sambooora"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                Twitter / X
              </a>
              <a
                href="https://github.com/sambooora"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/sambooora"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com/richiesambora9029"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                Dribbble
              </a>
            </div>
          </div>

          <!-- Contact -->
          <div class="flex flex-col gap-4">
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Contact
            </span>
            <div class="flex flex-col gap-3">
              <a
                href="mailto:richiesambora9029@gmail.com"
                class="text-sm text-base-content/70 transition-colors hover:text-white"
              >
                richiesambora9029@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-base-content/5">
      <div
        class="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-base-content/30 sm:flex-row md:px-10 lg:px-16"
      >
        <p>&copy; {{ currentYear }} Richie Sambora. All rights reserved.</p>
        <p>Built with <span class="text-orange-500">&hearts;</span> &amp; Nuxt</p>
      </div>
    </div>
  </footer>
</template>
