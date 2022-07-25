<script setup lang="ts">
useSeo()
</script>

<template>
  <div class="">
    <section
      class="-mt-16 sm:-mt-20 md:-mt-24 flex flex-col"
      style="
        min-height: 100vh;
        background-image: url(/images/hero-1.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="container mx-auto px-4 md:px-8 pt-24 text-white flex-1 flex flex-col items-start justify-center">
        <div class="text-3xl md:text-4xl xl:text-5xl max-w-lg lg:max-w-2xl">
          <p class="leading-normal">Richie Mahfud Ahmed Sambora</p>
          <p class="text-xl"> UI Designer | Front End Developer</p>
        </div>
        <button class="btn btn-outline text-white border-white mt-12 px-8">Download Resume</button>
      </div>
    </section>

    <section
      class="container mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-6 md:space-y-0 px-4 min-h-screen"
    >
      <div class="md:w-1/2 prose-lg xl:prose-xl text-center md:text-left">
        <h3>Overview</h3>
        <p><span>Richie Mahfud Ahmed Sambora</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate alias laudantium, dolor minus voluptatem modi. Laboriosam architecto earum fugit deleniti commodi amet ea laborum voluptates vero quam facere animi rerum vel minus excepturi labore assumenda, modi quisquam accusamus eaque. In, ut?</p>
      </div>
      <div class="w-full md:flex-1 flex items-center justify-center overflow-hidden">
        <img data-aos="fade-up" src="/images/discov-1.png" class="grayscale w-full h-full object-center object-contain" />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="/images/profile-1.png"
          class="w-full h-full -ml-36 mt-56 object-center object-contain"
        />
      </div>
    </section>

    <section
      class="my-24 flex flex-col-reverse md:flex-row items-center space-x-0 md:space-x-8 space-y-6 space-y-reverse md:space-y-0 min-h-screen overflow-hidden"
    >
      <div class="w-full md:w-1/2 md:h-screen">
        <img src="/images/items-1.png" class="w-full h-full object-cover object-center" />
      </div>
      <div
        data-aos="fade-left"
        class="w-full md:w-1/2 prose-lg xl:prose-xl max-w-2xl text-center md:text-left p-5 pt-12 md:pt-5"
      >
      <div data-aos="fade-left">
        <h4 class="font-medium">Experience</h4>
        <div>
          <h5>2020 - Present, Front End Developer - Grand Picasso Hotel Developer Team</h5>
          <p class="p-3">
            The Liposomal encapsulation technology is a transport system for the active ingredient that travels
            encapsulated in liposomes. This amazing technology works to achieve better absorption and utilisation of the
            active ingredient within the body
          </p>
        </div>
        <div>
          <h5>2018 - 2020, Movie Enginerring Support - PT. Graha Layar Prima Tbk (CGV Cinemas)</h5>
          <p class="p-3">
            The Liposomal encapsulation technology is a transport system for the active ingredient that travels
            encapsulated in liposomes. This amazing technology works to achieve better absorption and utilisation of the
            active ingredient within the body
          </p>
        </div>
      </div>
    </div>
    </section>

    <section class="container mx-auto px-4 py-24 min-h-screen">
      <h1 class="text-center text-2xl mb-4">Project</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-1.png);
              min-height: 70vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <button class="opacity-0 group-hover:opacity-100 btn btn-secondary">See Detail</button>
          </div>
          <h1 class="text-2xl">Picasso Dashboard</h1>
          <p class="text-lg">With Collagen, Hyaluronic Acid, Soy Lecithin, Honeysuckle Flower and Rosa Damascena</p>
        </div>
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-2.png);
              min-height: 70vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <button class="opacity-0 group-hover:opacity-100 btn btn-secondary">Add to Cart $8.00</button>
          </div>
          <h1 class="text-2xl">Picasso Restaurant</h1>
          <p class="text-lg">
            With Water, Glycerin, Propanediol, Cyclopentasiloxane, Dimethicone, Olea Europaea Oil and Betaine
          </p>
        </div>
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-3.png);
              min-height: 70vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <button class="opacity-0 group-hover:opacity-100 btn btn-secondary">Add to Cart $8.00</button>
          </div>
          <h1 class="text-2xl">Aquifer Landing Page</h1>
          <p class="text-lg">With Natural Cellulose, Pure Water, Disodium EDTA, Xanthan Gum and Sorbitol</p>
        </div>
      </div>
    </section>

      <section
        class="my-24 flex flex-col-reverse md:flex-row-reverse items-center space-x-0 md:space-x-8 md:space-x-reverse space-y-6 space-y-reverse md:space-y-0 min-h-screen overflow-hidden"
      >
        <div class="w-full md:w-1/2 md:h-screen">
          <img src="/images/hand.png" class="w-full h-full object-cover object-center" />
        </div>
        <div
        class="w-full md:w-1/2 prose-lg xl:prose-xl max-w-2xl md:max-w-3xl text-center md:text-left p-5 md:p-12 pt-12 md:pt-5"
      >
        <div>
          <h4 class="font-medium">Skill Set</h4>
          <div data-aos="fade-right" class="">
            <h4 class="font-medium">Design</h4>
            <div  class="flex flex-col space-y-5">
              <div>
                <div> Figma, Adobe XD  - UI Design</div>
                <progress class="progress w-full" value="79" max="100"></progress>
              </div>
              <div>
                <div>Adobe Photoshop - Image Processing</div>
                <progress class="progress w-full" value="80" max="100"></progress>
              </div>
              <div>
                <div>Corel Draw - Vector Builder</div>
                <progress class="progress w-full" value="95" max="100"></progress>
              </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="300" class="">
            <h4 class="font-medium">Coding</h4>
            <div class="flex flex-col space-y-5">
              <div>
                <div>Nuxt - Javascript</div>
                <progress class="progress w-full" value="79" max="100"></progress>
              </div>
              <div>
                <div>Laravel - PHP</div>
                <progress class="progress w-full" value="80" max="100"></progress>
              </div>
              <div>
                <div>Tailwind, Boostrap - CSS</div>
                <progress class="progress w-full" value="95" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section class="pt-24">
      <div class="carousel carousel-center flex flex-row justify-content w-full">
        <div class="carousel-item">
          <img src="/images/hand.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/discov-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/discov-2.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/product-2.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/product-3.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/hand.png" alt="" class="w-72 h-72" />
        </div>
      </div>
    </section>
  </div>
</template>
