<template>
  <section class="min-h-screen text-white mb-16 md:mb-0 p-1/12">
    <h3 class="text-4xl tracking-widest underline">Projects</h3>
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="group relative h-80 md:h-100 p-1/12 cursor-pointer"
      @click="animate(index, project.route)"
    >
      <p
        class="h-full flex items-center text-2xl md:text-6xl z-50"
        :class="{ 'animate-text': animationIndex === index }"
      >
        <span class="">{{ project.name }}</span>
      </p>
      <img
        :src="project.img"
        alt="./icon.png"
        class="w-64 md:w-80 absolute bottom-0 right-0 sm:mr-10 md:mr-12 lg:mr-24"
        :class="
          animationIndex === index
            ? 'animate-image opacity-75 z-20'
            : 'opacity-25 group-hover:opacity-50'
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => ({
    animationIndex: -1,
    projects: [
      { name: 'Bebla: Vue', route: 'bebla', img: '/images/bebla.png' },
      {
        name: 'Ambiance Spa: Mevn',
        route: 'spa',
        img: '/images/spa.png'
      },
      {
        name: 'Expense tracker: React',
        route: 'expense-tracker',
        img: '/images/expense-tracker-react.png'
      },
      {
        name: 'CRUD: mevn vs mern',
        route: 'mevnvsmern',
        img: '/images/mevnmern.jpeg'
      },
      { name: 'CV: 2019', route: 'cv2019', img: '/images/cv2019.png' },
      {
        name: 'Webcrawler: Nodejs',
        route: 'webcrawler',
        img: '/icon.png'
      }
    ]
  }),
  methods: {
    animate(x, y) {
      this.animationIndex = x
      setTimeout(() => {
        this.$router.push(`/projects/${y}`)
        // console.log('Hit')
      }, 1550)
    }
  }
}
</script>

<style>
.animate-text {
  animation: slide 1s ease-in 0s forwards 1 normal running;
}
.animate-image {
  animation: scale 1.5s ease-in 0s forwards 1 normal running;
}

/* @keyframes slide {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  50% {
    background-color: orange;
  }
  100% {
    opacity: 0;
    transform: translate(600px) scale(1.5);
  }
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    background-color: orange;
  }
  100% {
    transform: translateX(-400px) scale(5);
  }
} */
</style>
