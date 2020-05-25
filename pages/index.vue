<template>
  <div class="bg-black h-full mb-16 md:mb-0">
    <div class="h-screen w-full grid grid-cols-6 grid-rows-4 pt-12 text-white">
      <div
        class="col-start-1 md:col-start-2 col-span-6 md:col-span-4 row-span-4 h-full"
      >
        <!-- <Logo /> -->
        <div class="h-full grid grid-cols-1 grid-rows-4">
          <div
            class="font-mono text-xl sm:text-2xl md:text-3xl row-span-2 p-1/12 my-auto"
          >
            <p class="text-white mb-8">
              Hi, I'm Stuart Robin McCulloch.
            </p>
            <div class="">
              <div class="flex">
                <div>
                  <p>
                    I'm a Web Developer and I {{ display
                    }}<span class="cursor tracking-tighter">|</span>
                  </p>
                  <!-- <p class="cursor"></p> -->
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center md:items-end row-span-1">
            <ScrollMore />
          </div>
        </div>
      </div>
    </div>
    <div id="portfolio" class="grid grid-cols-6">
      <Portfolio
        class="col-start-1 md:col-start-2 lg:col-start-2 col-span-6 lg:col-span-5"
      />
    </div>
    <div class="grid grid-cols-6">
      <Technologies
        class="col-start-1 md:col-start-2 lg:col-start-2 col-span-6 lg:col-span-5"
      />
    </div>
  </div>
</template>

<script>
import ScrollMore from '~/components/ScrollMore'
import Portfolio from '~/components/Portfolio'
import Technologies from '~/components/Technologies'
// import Logo from '~/components/Logo'
export default {
  components: { ScrollMore, Portfolio, Technologies },
  data: () => ({
    texts: ['make websites.', 'build websites...', 'build experiences.'],
    speed: 100,
    display: ''
  }),
  transition: 'fadeOpacity',
  mounted() {
    this.writeLoop()
  },
  methods: {
    delay(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
    },
    async type(txt = 'Test') {
      for (let i = 0; i < txt.length; i++) {
        this.display += txt.charAt(i)
        await this.delay(this.speed)
      }
    },
    async reversType(txt = 'Session') {
      for (let i = txt.length; i > 0; i--) {
        this.display = this.display.slice(0, -1)
        await this.delay(this.speed)
      }
    },
    async writeLoop() {
      for (let i = 0; i < this.texts.length; i++) {
        await this.type(this.texts[i])
        await this.delay(1000)
        if (i !== this.texts.length - 1) {
          await this.reversType(this.texts[i])
          await this.delay(50)
        }
      }
    }
  }
}
</script>

<style>
.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}

.cursor {
  height: 1.5rem;
  width: 2px;
  margin-left: 2px;
  /* background: white; */
  animation: blinkTextCursor 800ms infinite;
}

@keyframes blinkTextCursor {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
