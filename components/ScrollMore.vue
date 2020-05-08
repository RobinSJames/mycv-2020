<template>
  <div class="w-full flex justify-center">
    <div class="h-12 w-6 border-2 border-white rounded-full">
      <div class="h-full w-full flex justify-center pt-2 pb-2">
        <div id="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollMore'
}
</script>

<style>
#ball {
  width: 0.6rem;
  height: 0.6rem;
  background: white;
  border-radius: 50%;
  animation-name: bounce;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  35% {
    transform: translateY(18px);
  }
  100% {
    transform: translateY(1px);
  }
}
</style>
