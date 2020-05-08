<template>
  <div class="MyLogo">
    <div class="grid grid-cols-3 text-white">
      <p class="w-6 flex justify-center border">R</p>
      <p class="w-6 flex justify-center border-t border-b">S</p>
      <p class="w-6 flex justify-center border">J</p>
      <p class="w-6 flex justify-center border-l border-r">.</p>
      <p class="w-6 flex justify-center">C</p>
      <p class="w-6 flex justify-center border-l border-r">O</p>
      <p class="w-6 flex justify-center border">D</p>
      <p class="w-6 flex justify-center border-t border-b">E</p>
      <p class="w-6 flex justify-center border">S</p>
    </div>
  </div>
</template>
<style>
.MyLogo {
  animation: 2.5s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
