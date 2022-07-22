<script setup lang="ts">
useSeo({
  title: 'Contact'
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="prose mb-8"><h3>Contact</h3></div>
    <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4">
      <div class="md:w-1/2 prose max-w-sm lg:prose-lg">
        <p class="mt-0 mb-1 lg:mt-0 lg:mb-1">Aquifer Life PTE. LTD.</p>
        <p class="mt-0 mb-1 lg:mt-0 lg:mb-1">69 Ubi Road 1, Oxley Bizhub, Singapore 408731, #10-32</p>
        <p class="mt-0 mb-1 lg:mt-0 lg:mb-1"><a href="mailto:hello@aquifer.com">hello@aquifer.com</a></p>
      </div>
      <div class="md:w-1/2 flex flex-col space-y-4">
        <div class="flex flex-row items-center border-t-0 border-b-2 border-base-content space-x-3">
          <label for="name" class="w-32">Name</label>
          <input
            id="name"
            type="text"
            class="input input-ghost text-base focus:bg-transparent focus:outline-transparent w-4/5"
          />
        </div>
        <div class="flex flex-row items-center border-t-0 border-b-2 border-base-content space-x-3">
          <label for="email" class="w-32">Email Address</label>
          <input
            id="email"
            type="text"
            class="input input-ghost text-base focus:bg-transparent focus:outline-transparent w-4/5"
          />
        </div>
        <div class="flex flex-row items-center border-t-0 border-b-2 border-base-content space-x-3">
          <label for="phone" class="w-32">Contact Number</label>
          <input
            id="phone"
            type="text"
            class="input input-ghost text-base focus:bg-transparent focus:outline-transparent w-4/5"
          />
        </div>
        <div class="flex flex-row items-center border-t-0 border-b-2 border-base-content space-x-3">
          <label for="message" class="w-32">Message</label>
          <input
            id="message"
            type="text"
            class="input input-ghost text-base focus:bg-transparent focus:outline-transparent w-4/5"
          />
        </div>
        <div class="pt-5 text-end">
          <button class="btn btn-outline text-content border-content max-w-md">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>
