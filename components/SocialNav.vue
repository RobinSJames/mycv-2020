<template>
  <div
    class="flex flex-row md:flex-col justify-around items-center w-full md:w-1/6 md:h-min-40 py-4 md:mt-20 text-white text-sm bg-black"
  >
    <div class="flex flex-col justify-between items-center md:mb-10">
      <Logo />
    </div>
    <div class="flex flex-col justify-between items-center md:mb-4">
      <a href="https://github.com/RobinSJames" target="_blank">
        <p>Github</p>
      </a>
    </div>
    <div class="flex flex-col justify-between items-center md:mb-4">
      <a href="https://profile.codersrank.io/user/robinsjames" target="_blank">
        <p>Codersrank</p>
      </a>
    </div>
    <div class="flex flex-col justify-between items-center md:mb-10">
      <a href="https://twitter.com/xaxacara" target="_blank">
        <p>Twitter</p>
      </a>
    </div>
    <div
      class="hidden md:block flex flex-col justify-between items-center md:mb-4 cursor-pointer"
      @click="$router.push('/')"
    >
      <p>HOME</p>
    </div>
    <div
      class="hidden md:block flex flex-col justify-between items-center md:mb-4 cursor-pointer"
      @click="$router.push('/#portfolio')"
    >
      <p>PORTFOLIO</p>
    </div>
    <div
      class="hidden md:block flex flex-col justify-between items-center md:mb-4 cursor-pointer"
      @click="$router.push('/about')"
    >
      <p>ABOUT ME</p>
    </div>
    <div
      class="hidden md:block flex flex-col justify-between items-center h-full md:mb-4 cursor-pointer"
    >
      <a href="mailto:robinjamesauthor@gmail.com?subject=Your CV intrigued me">
        <p>EMAIL</p>
      </a>
    </div>
    <div
      class="hidden md:block flex flex-col justify-between items-center h-full cursor-pointer"
    >
      <a href="tel:+27645161868">
        <p>PHONE</p>
      </a>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  name: 'SocialNav',
  components: { Logo }
}
</script>

<style></style>
