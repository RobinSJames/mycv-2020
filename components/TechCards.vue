<template>
  <div class="relative">
    <!-- <style>
      :root {
        --colour: {{ colour }}
      }
    </style> -->
    <svg
      viewBox="0 0 36 36"
      class="circular-chart"
      :style="`stroke:${colour};`"
    >
      <path
        class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        :class="animate ? 'circle' : ''"
        :stroke-dasharray="`${strokePercentage}, 100`"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <image
        :href="logoLink"
        height="24"
        width="24"
        x="16%"
        y="16%"
        style="clip-path: circle(50% at 50% 50%);margin: 2px;opacity: 0.35;"
      />
      <!-- <text x="18" y="20.35" class="text-white">30%</text> -->
    </svg>
    <div class="absolute top-0 w-full h-full flex justify-center items-center">
      <p class="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl">
        {{ strokePercentage }}%
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strokePercentage: {
      type: Number,
      default: 100
    },
    colour: {
      type: String,
      default: '#ff9f00'
    },
    logoLink: {
      type: String,
      default:
        'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ'
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // setColour(x) {
    // if ()
    // }
  }
}
</script>

<style>
.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}
.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}
.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1.5s ease-out forwards;
}
.circular-chart .circle {
  stroke: var(--colour);
}
@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
