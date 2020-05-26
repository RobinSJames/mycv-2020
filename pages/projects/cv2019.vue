<template>
  <div class="grid grid-cols-6 text-white pb-20">
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 relative h-80 lg:h-100 overflow-hidden"
    >
      <div
        class="absolute top-0 h-80 lg:h-100 flex justify-center w-full bg-black"
      >
        <img
          src="/images/cv2019.png"
          alt=""
          class="w-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:p-1/6"
        >
          <h3 class="text-xl tracking-widest mb-2">CV 2019</h3>
          <p class="text-sm text-center mb-4">
            An interactive website that imitates a game before the actual
            viewing of my cv. It is filled with animations from top to bottom,
            left to right thanks to good friends, GSAP and Scroll Magic.
          </p>
          <a
            href="http://stuartmccullochcv.c1.biz/main.php"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-bold bg-black rounded-full px-6 py-2 hover:scale-125 cursor-pointer"
          >
            OPEN
          </a>
        </div>
      </div>
    </div>
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 p-1/12 pt-20"
    >
      <ScrollMore />
    </div>
    <div class="col-start-1 md:col-start-2 col-span-6 p-1/12 py-20">
      <div class="mb-12">
        <h3 class="text-3xl">Tech used</h3>
        <div class="flex flex-wrap">
          <div
            v-for="technology in technologies"
            :key="technology.id"
            class="relative w-1/2 md:w-1/3 lg:w-1/4 p-1/12 md:p-5pec"
          >
            <a
              :href="technology.link"
              target="_blank"
              rel="noopener noreferrer"
              class="outline-none"
            >
              <img
                :src="technology.img"
                alt=""
                class="w-full h-full object-fit object-cover rounded-full bg-off-white opacity-50 cursor-pointer"
              />
              <p
                class="absolute top-0 left-0 h-full w-full flex justify-center items-center text-center font-bold p-2/12"
              >
                {{ technology.title }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-3xl tracking-widest">Description</h3>
        <p class="col-span-6 z-10">
          So back in 2019 when I had decided to ditch Java and jump onto
          JavaScript I opted for something unconventional from the pdf/word
          format that would engage my potential, future employer. Help guide the
          avatar version of Stuart throughout his daily morning tasks and view
          his CV on his desktop once completed.<br /><br />
          <span class="text-red">CAUTION!!!</span><br />
          This website was not created with a "mobile-first" mindset. Any
          screens with 1366 x 768 resolution or higher should be able to view
          the content more comfortably than those using lower resolutions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollMore from '~/components/ScrollMore'
export default {
  components: { ScrollMore },
  data: () => ({
    technologies: [
      {
        id: 1,
        title: 'JQuery',
        img:
          'https://www.brandeps.com/logo-download/J/JQuery-logo-vector-01.svg',
        link: 'https://jquery.com/'
      },
      {
        id: 2,
        title: 'GSAP',
        img:
          'https://greensock.com/uploads/set_resources_4/84c1e40ea0e759e3f1505eb1788ddf3c_greensock-logo.svg',
        link: 'https://greensock.com/'
      },
      {
        id: 3,
        title: 'Scroll Magic',
        img: 'https://scrollmagic.io/assets/img/demo_tophat.png',
        link: 'https://scrollmagic.io/'
      }
    ]
  })
}
</script>

<style></style>
