<template>
  <section class="min-h-screen text-white mb-16 md:mb-0 pb-4">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="relative h-56 p-4 md:pl-32"
    >
      <p class="h-full flex items-center">{{ project.name }}</p>
      <img
        src="icon.png"
        alt="./icon.png"
        class="w-40 absolute bottom-0 right-0 mr-10 md:mr-56"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => ({
    projects: [
      { name: 'Bebla: trivia game' },
      { name: 'CV: year 2019' },
      { name: 'MERN: expense tracker' },
      { name: 'Ambiance Spa: spa website' },
      { name: 'MERN: app' },
      { name: 'Webcrawler: frontend' }
    ]
  })
}
</script>

<style></style>
