<template>
  <div class="min-h-screen w-full grid grid-cols-6 grid-rows-1 text-white">
    <div class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 p-1/12">
      <div class="">
        <label class="white-stroke tracking-widest">Email</label>
        <p class="red-stroke tracking-widest md:text-3xl lg:text-6xl">
          robinjamesauthor@gmail.com
        </p>
      </div>
      <div>
        <label class="white-stroke tracking-widest">Phone</label>
        <p class="red-stroke tracking-widest md:text-3xl lg:text-6xl">
          +258 84 664 7680
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.white-stroke {
  color: #000;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff;
}
.red-stroke {
  color: #000;
  text-shadow: -1px -1px 0 #f00, 1px -1px 0 #f00, -1px 1px 0 #f00,
    1px 1px 0 #f00;
}
</style>
