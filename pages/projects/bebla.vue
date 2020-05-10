<template>
  <div class="text-white pt-24 pb-20">
    <div class="relative h-80 overflow-hidden">
      <div class="absolute top-0 h-80 flex justify-center w-full bg-black">
        <img
          src="/icon.png"
          alt=""
          class="w-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:p-1/6"
        >
          <h3 class="text-xl tracking-widest mb-2">Bebla</h3>
          <p class="text-sm text-center mb-4">
            A trivia game that boasts more than 20 categories to choose from
            using a 3rd party API. Test your general knowledge
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            class="bg-black rounded-full px-6 py-2 hover:scale-125 cursor-pointer"
          >
            Bebla
          </a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 p-1/12">
      <div class="col-span-6">
        <h3 class="text-3xl">Tech used</h3>
        <div class="flex flex-wrap">
          <div
            v-for="technology in technologies"
            :key="technology.id"
            class="relative w-1/2 p-1/12"
          >
            <img
              :src="technology.img"
              alt=""
              class="w-full h-full object-fit object-cover rounded-full bg-dark-gray opacity-50"
            />
            <p
              class="absolute top-0 left-0 h-full w-full flex justify-center items-center text-center font-bold p-2/12"
            >
              {{ technology.title }}
            </p>
          </div>
        </div>
      </div>
      <p class="col-span-6 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        itaque ratione sint doloribus eveniet sed, consequuntur iure quasi sunt
        aliquid totam odio voluptate dolorum similique tempore reiciendis iste
        labore nostrum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    technologies: [
      { id: 1, title: 'Vue', img: 'https://vuejs.org/images/logo.png' },
      {
        id: 2,
        title: 'Bootstrap Vue',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png'
      },
      {
        id: 3,
        title: 'TriviaDB API',
        img: 'https://opentdb.com/images/logo.png'
      },
      {
        id: 4,
        title: 'lodash',
        img:
          'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/220px-Lodash.svg.png'
      }
    ]
  })
}
</script>

<style></style>
