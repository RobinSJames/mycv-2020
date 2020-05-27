<template>
  <div class="grid grid-cols-6 text-white pb-20">
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 relative h-80 lg:h-100 overflow-hidden"
    >
      <div
        class="absolute top-0 h-80 lg:h-100 flex justify-center w-full bg-black"
      >
        <img
          src="/images/mevnmern.jpeg"
          alt=""
          class="w-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:px-1/6"
        >
          <h3 class="text-xl tracking-widest mb-2">MEVN vs MERN</h3>
          <p class="text-sm text-center mb-4">
            I present you with the Battle of the frameworks. Vue and React go
            toe-to-toe in a simple CRUD match
          </p>
          <div class="w-full flex justify-between">
            <a
              href="https://whispering-lake-72474.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-bold bg-black rounded-full px-6 py-2 hover:scale-125 cursor-pointer"
            >
              MEVN
            </a>
            <a
              href="https://calm-falls-55639.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-bold bg-black rounded-full px-6 py-2 hover:scale-125 cursor-pointer"
            >
              MERN
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 p-1/12 pt-20"
    >
      <ScrollMore />
    </div>
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 p-1/12 py-20"
    >
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
          So I decided to allow these two frameworks prove which was worthy of
          the heavyweight title. I created to extremely simple CRUD web apps and
          the results are in. I am unfortunately going to be biased and say Vue
          as I've been working with Vue for the past year and a half. That being
          said looking at the npm trends list and looking at the libraries
          available in react it's quite clear which is the most popular right
          now.
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
        title: 'Vue',
        img: 'https://vuejs.org/images/logo.png',
        link: 'https://vuejs.org/'
      },
      {
        id: 2,
        title: 'React',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
        link: 'https://reactjs.org/'
      },
      {
        id: 3,
        title: 'Nodejs',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png',
        link: 'https://nodejs.org/en/'
      },
      {
        id: 4,
        title: 'Express',
        img:
          'https://i7.pngguru.com/preview/925/447/818/express-js-node-js-javascript-mongodb-node-js.jpg',
        link: 'https://expressjs.com/'
      }
    ],
    features: [
      { id: 1, title: 'Create' },
      { id: 2, title: 'Read' },
      { id: 3, title: 'Update' },
      { id: 4, title: 'Delete' }
    ]
  })
}
</script>

<style></style>
