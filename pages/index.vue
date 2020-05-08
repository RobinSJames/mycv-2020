<template>
  <div class="bg-black h-full">
    <div class="h-screen w-full grid grid-cols-6 grid-rows-4 pt-12 text-white">
      <div
        class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 row-span-4 h-full"
      >
        <!-- <Logo /> -->
        <div class="h-full grid grid-cols-1 grid-rows-4">
          <div class="row-span-3 pt-20 p-4 my-auto">
            <p class="text-white">
              Hi, I'm Stuart McCulloch (aka Robin S. James or robinhood)
            </p>
            <p>I'm a Web Developer and <span>I shape experiences</span></p>
          </div>
          <div class="flex md:items-center row-span-1">
            <ScrollMore />
          </div>
        </div>
      </div>
    </div>
    <div id="portfolio">
      <Portfolio />
    </div>
  </div>
</template>

<script>
import ScrollMore from '~/components/ScrollMore'
import Portfolio from '~/components/Portfolio'
// import Logo from '~/components/Logo'
export default {
  components: { ScrollMore, Portfolio }
}
</script>

<style></style>
