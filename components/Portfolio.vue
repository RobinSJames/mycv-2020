<template>
  <section class="min-h-screen text-white mb-16 md:mb-0 p-1/12">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="group relative h-80 md:h-100 p-1/12 lg:p-1/6 cursor-pointer"
      @click="animate(index, project.route)"
    >
      <p
        class="h-full flex items-center text-2xl md:text-6xl group-hover:text-yellow z-50"
        :class="{ 'animate-text text-yellow': animationIndex === index }"
      >
        <span class="">{{ project.name }}</span>
      </p>
      <img
        src="icon.png"
        alt="./icon.png"
        class="w-64 md:w-80 absolute bottom-0 right-0 sm:mr-10 md:mr-32 lg:mr-56"
        :class="
          animationIndex === index
            ? 'animate-image opacity-50'
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
      { name: 'Bebla: trivia game', route: 'bebla' },
      { name: 'Ambiance Spa: spa website', route: 'spa' },
      { name: 'MERN: expense tracker', route: 'bebla' },
      { name: 'MERN: app', route: 'bebla' },
      { name: 'CV: year 2019', route: 'cv2019' },
      { name: 'Webcrawler: frontend', route: 'bebla' }
    ]
  }),
  methods: {
    animate(x, y) {
      this.animationIndex = x
      setTimeout(() => {
        this.$router.push(`/projects/${y}`)
        console.log('Hit')
      }, 1550)
    }
  }
}
</script>

<style>
.animate-text {
  animation: slide 1.5s ease-in 0s forwards 1 normal running;
}
.animate-image {
  animation: scale 1.5s ease-in 0s forwards 1 normal running;
}

@keyframes slide {
  0% {
    transform: translateX(0px);
  }
  /* 50% {
    background-color: orange;
  } */
  100% {
    transform: translate(-400px) scale(1.5);
  }
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  /* 50% {
    background-color: orange;
  } */
  100% {
    transform: scale(5);
  }
}
</style>
