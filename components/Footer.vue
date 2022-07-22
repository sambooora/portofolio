<script setup lang="ts"></script>

<template>
  <footer class="container flex flex-col mx-auto footer p-4 text-gray-700 mt-16">
    <span class="normal-case text-3xl w-full">Aquifer</span>
    <div class="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5 text-lg">
      <p class="lg:w-1/2">
        Aquifer offers quality skincare products backed by advanced manufacturing technologies, containing natural
        ingredients, essential to skin health
      </p>
      <div class="lg:flex-1 w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 lg:justify-between">
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/products">Shop</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/sustainability">Sustainability</NuxtLink>
        </div>
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/contact">Contact</NuxtLink>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </div>
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/faq">FAQs</NuxtLink>
          <NuxtLink to="/shipping">Shipping and Returns</NuxtLink>
          <NuxtLink to="/terms-and-conditions">Terms and Conditions</NuxtLink>
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-5 lg:space-y-0 w-full lg:flex-row lg:justify-between lg:items-end text-lg">
      <div class="flex flex-col w-full max-w-lg">
        <span class="mb-4">Subscribe to our mailing list</span>
        <div class="form-control">
          <div class="input-group">
            <input type="text" placeholder="Enter your email" class="input input-bordered w-full" />
            <button class="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="text-sm">
        <p>Site by Made Somewhere</p>
      </div>
    </div>
  </footer>
</template>
