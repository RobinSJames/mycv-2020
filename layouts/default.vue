<template>
  <div class="relative bg-black">
    <SocialNav class="fixed top-0 z-10" />
    <div class="absolute hidden w-full flex justify-center mt-24">
      <codersrank-widget
        username="robinsjames"
        class="w-full px-1/12"
      ></codersrank-widget>
    </div>
    <nuxt class="pt-20" />
    <MobileNavBar class="fixed bottom-0 md:hidden" />
  </div>
</template>

<script>
import MobileNavBar from '../components/MobileNavBar'
import SocialNav from '../components/SocialNav'
export default {
  components: { MobileNavBar, SocialNav }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
