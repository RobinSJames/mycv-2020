<template>
  <div class="grid grid-cols-6 text-white pb-20">
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 relative h-80 lg:h-100 overflow-hidden"
    >
      <div
        class="absolute top-0 h-80 lg:h-100 flex justify-center w-full bg-black"
      >
        <img
          src="/images/spa.png"
          alt=""
          class="w-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:px-1/6"
        >
          <h3 class="text-xl tracking-widest mb-2">Ambiance Spa</h3>
          <p class="text-sm text-center mb-4">
            A spa PWA created using the MEVN (aka VeNom) stack. Users can make
            bookings, order products, leave reviews and login and sign up.
          </p>
          <a
            href="https://mockspa.herokuapp.com/"
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
      <div class="mb-4">
        <h3 class="text-3xl tracking-widest">Features</h3>
        <ul>
          <li v-for="feature in features" :key="feature.id">
            - {{ feature.title }}
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-3xl tracking-widest">Description</h3>
        <p class="col-span-6 z-10">
          This is a proposal that is in the works. The idea for this website was
          to have it double down as an application as well - enter vue PWA. The
          frontend is connected to an api written in expressjs and allows the
          manager role to make edits to all routes while users are limited to
          all GET and selected POST and PUT routes where the data is stored in
          MongoDB. There are still a few additional features I'd like to add to
          this web app before I could be 100% satisfied. I hope those additions
          will be done before you read this.
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
        title: 'Nuxt',
        img: 'https://vuejs.org/images/logo.png',
        link: 'nuxtjs.org/'
      },
      {
        id: 2,
        title: 'Tailwindcss',
        img:
          'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
        link: 'https://tailwindcss.com/'
      },
      {
        id: 3,
        title: 'JWT',
        img: 'https://jwt.io/img/pic_logo.svg',
        link: 'https://jwt.io/'
      },
      {
        id: 4,
        title: 'lodash',
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/220px-Lodash.svg.png',
        link: 'https://lodash.com/'
      }
    ],
    features: [
      { id: 1, title: 'Register' },
      { id: 2, title: 'Login' },
      { id: 3, title: 'User auth' },
      { id: 4, title: 'Make booking' },
      { id: 5, title: 'Add to cart' }
      // { id: 4, title: 'Add to cart' }
    ]
  })
}
</script>

<style></style>
