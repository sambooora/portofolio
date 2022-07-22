<script setup lang="ts">
type Props = {
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emit = defineEmits<{
  (e: 'dismiss'): void
}>()
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="props.visible" class="fixed inset-0 bg-accent z-20">
        <div class="container mx-auto py-6 px-4 h-full flex flex-col">
          <div class="flex items-center justify-between">
            <h2 id="slide-over-title" class="text-3xl font-semibold">Aquifer</h2>
            <div class="ml-3 flex h-7 items-center -mt-px">
              <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="emit('dismiss')">
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
              <div class="prose lg:prose-lg">
                <h4>Our Ingredients</h4>
                <p>
                  Aquifer Regenerative Serum contains Hydrolyzed Fish Collagen, Vegan Hyaluronic Acid, Soy Lecithin,
                  Honeysuckle Flower Extract, Leucidal Liquid, Rosa Damascena Extract Fragrance, Water, Sodium Phosphate
                  Dibasic, Sodium Phosphate Monobasic, Sodium Chloride, Sodium Hydroxide, Hydrochloric Acid, Ph
                  Adjustment
                </p>
              </div>
              <div class="prose lg:prose-lg">
                <h4>Made Without</h4>
                <p>
                  Aquifer products are free from artificial additives such as emulsifiers, surfactant, viscosity
                  controller, organic solvent, synthetic polymers, metal ion chelating agent or silicone based organic
                  compounds that are known to impose stress to skin cells
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  @apply transition-all opacity-100 duration-200;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
