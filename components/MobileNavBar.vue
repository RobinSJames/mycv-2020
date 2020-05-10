<template>
  <div
    class="flex flex-row justify-around uppercase bg-black w-full h-16 items-center font-semibold text-white z-10"
  >
    <a href="" class="">work</a>
    <a href="" class="">about me</a>
    <a href="" class="">contact me</a>
    <div
      class="absolute top-0 right-0 bg-black rounded-full mr-1/12 -mt-1/6 p-2"
      @click="$router.push('/')"
    >
      Home
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
