<template>
  <div class="grid grid-cols-6 text-white pb-20">
    <div
      class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 relative h-80 lg:h-100 overflow-hidden"
    >
      <div
        class="absolute top-0 h-80 lg:h-100 flex justify-center w-full bg-black"
      >
        <img
          src="/images/expense-tracker-react.png"
          alt=""
          class="w-full h-full object-fit object-cover opacity-25"
        />
        <div
          class="absolute top-0 flex flex-col justify-center items-center h-full w-full p-1/12 md:px-1/6"
        >
          <h3 class="text-xl tracking-widest mb-2">Expense Tracker</h3>
          <p class="text-sm text-center mb-4">
            Most people want financial freedom but if you fail to plan you plan
            to fail. Now you can take the first step to planning your success
            with an expense tracker built with React
          </p>
          <a
            href="https://expense-tracker-mern.herokuapp.com/"
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
          Set aside your financial worries and begin to take action with the
          Mern Expense Tracker. its a simple and UI friendly tracker that
          doesn't complicate any processes. Since there is no backend you'd be
          forced to keep the tab open for eternity unfortunately. Send me an
          email if you'd like to see a backend attached to this.
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
        title: 'React',
        img:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
        link: 'https://reactjs.org/'
      }
    ],
    features: [
      { id: 1, title: 'Add income/expense' },
      { id: 2, title: 'Delete income/expense' },
      { id: 3, title: 'View History' }
      // { id: 4, title: 'Add to cart' }
      // { id: 4, title: 'Add to cart' }
    ]
  })
}
</script>

<style></style>
