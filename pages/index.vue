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
        <button class="hidden btn btn-outline text-white border-white mt-12 px-8">Download Resume</button>
      </div>
    </section>

    <section
      class="container mx-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-6 md:space-y-0 px-4 min-h-screen"
    >
      <div class="md:w-1/2 prose-lg xl:prose-xl text-center md:text-left">
        <h2>Overview</h2>
        <h5 class="font-semibold">Richie Mahfud Ahmed Sambora</h5>
        <p class="font-thin">I’m from Indonesia and I have been working as a Front End Developer for more than 2 years and currently I work for Grand Hotel Picasso as Front End Developer since 2020. I’ve been freelancing for the last 1 years, and right now I am looking forward to collaborate with you!</p>
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
        <h2>Experience</h2>
        <div>
          <h5 class="text-sm font-semibold">2020 - Present, Front End Developer - Grand Picasso Hotel Developer Team</h5>
          <p class="font-thin">
            I worked on web design projects including the responsiveness for
            the mobile version. Normally we do the kickoff meeting first and I
            get a rough wireframe from the Project Manager, then I create the
            mockup. Got feedback and iterate. When the mockup is final I
            convert it into HTML and SCSS. Working as a designer and frontend
            developer makes me know which design is effective and which one
            is not for the development process.
          </p>
        </div>
        <div>
          <h5 class="text-sm font-semibold">2018 - 2020, Movie Enginerring Support - PT. Graha Layar Prima Tbk (CGV Cinemas)</h5>
          <p class="font-thin">
            Do Maintenance and Analytical Troubleshooting of film equipment (Projector, Server and Sound System), Do Maintenance and Troubleshooting Hardware and Software IT Assets of the company. Collecting IT Assets and Projectionists. Management of company Networking (Routing, Switching, and Firewall Settings)
          </p>
        </div>
      </div>
    </div>
    </section>

    <section class="container mx-auto px-4 py-24 min-h-screen">
      <h1 class="text-center text-2xl mb-4">Latest Project</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-1.png);
              min-height: 60vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
          </div>
          <h1 class="text-2xl">Picasso Dashboard</h1>
          <p class="text-lg">
is a website to manage hotel back office such as reservation, campaign management and accounting</p>
        </div>
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-2.png);
              min-height: 60vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
          </div>
          <h1 class="text-2xl">Picasso Restaurant</h1>
          <p class="text-lg">
            Is a website to online menus and ordering restaurant food. to shorten the queue that occurs at the restaurant
          </p>
        </div>
        <div class="flex flex-col space-y-4">
          <div
            class="w-full h-full flex justify-center items-center group"
            style="
              background-image: url(/images/product-3.png);
              min-height: 60vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
          </div>
          <h1 class="text-2xl">Picasso Landing Page</h1>
          <p class="text-lg">Is a website that aims to be a hotel landing page and promotion center</p>
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
                <div>Vue, Nuxt - Javascript</div>
                <progress class="progress w-full" value="81" max="100"></progress>
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

    <!-- Service -->
    <!-- <section
    class="container mx-auto px-4 py-24 min-h-screen"
      >
      <h1 class="text-center text-2xl mb-4">Service</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="flex flex-col justify-center items-center bg-gray-800 h-60 p-6 text-center">
          <img src="" alt="">
          <h4>Name of Sercive</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ratione aliquid doloribus.</span>

        </div>
        <div class="flex flex-col justify-center items-center bg-gray-800 h-60 p-6 text-center">
          <img src="" alt="">
          <h4>Name of Sercive</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ratione aliquid doloribus.</span>

        </div>
        <div class="flex flex-col justify-center items-center bg-gray-800 h-60 p-6 text-center">
          <img src="" alt="">
          <h4>Name of Sercive</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ratione aliquid doloribus.</span>

        </div>
      </div>
    </section> -->

    <!-- <section class="pt-24">
      <div class="carousel carousel-center flex flex-row justify-content w-full">
        <div class="carousel-item">
          <img src="/images/hand.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/items-1.png" alt="" class="w-72 h-72" />
        </div>
        <div class="carousel-item">
          <img src="/images/hand.png" alt="" class="w-72 h-72" />
        </div>
      </div>
    </section> -->
  </div>
</template>
