<template>
  <div class="grid grid-cols-6 text-white pb-20">
    <div
      class="col-start-1 md:col-start-2 col-span-6 relative h-80 lg:h-100 overflow-hidden"
    >
      <div
        class="absolute top-0 h-80 lg:h-100 flex justify-center w-full bg-black"
      >
        <img
          src="/icon.png"
          alt=""
          class="w-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:p-1/6"
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
    <div class="col-start-1 md:col-start-2 col-span-6 p-1/12 pt-20">
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
          The concept of this app is simple. Select a category, select an amount
          of desired questions, then the difficulty level and finally click
          play. The app boast 20 plus categories to choose from thanks to the
          Open Trivia DB API. I know - its awesome! "But what happens when I get
          stuck in for hours on end", you ask. "Surely there are a limited
          amount of question?" You're 100% correct, the questions are limited,
          but thankfully Open Trivia DB has provided an access token to prevent
          any repeat questions happening. So don't worry about any unwated
          repitions. Go ahead an check it out.
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
        title: 'Bootstrap Vue',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
        link: 'https://bootstrap-vue.org/'
      },
      {
        id: 3,
        title: 'TriviaDB API',
        img: 'https://opentdb.com/images/logo.png',
        link: 'https://opentdb.com/'
      },
      {
        id: 4,
        title: 'lodash',
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/220px-Lodash.svg.png',
        link: 'https://lodash.com/'
      }
    ]
  })
}
</script>

<style></style>
