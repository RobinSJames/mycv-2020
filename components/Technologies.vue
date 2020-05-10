<template>
  <div class="p-1/12">
    <div class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        Web Stack
      </h2>
      <div ref="webtech" class="flex flex-wrap">
        <TechCards
          v-for="technology in webTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
    <div ref="frameworks" class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        Web Frameworks
      </h2>
      <div class="flex flex-wrap">
        <TechCards
          v-for="technology in webframeworkTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
    <div class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        CSS Frameworks
      </h2>
      <div class="flex flex-wrap">
        <TechCards
          v-for="technology in cssframeworkTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
    <div class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        Version Control
      </h2>
      <div class="flex flex-wrap">
        <TechCards
          v-for="technology in versionTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
    <div class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        Design Kit
      </h2>
      <div class="flex flex-wrap">
        <TechCards
          v-for="technology in designTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
    <div class="mb-10 lg:mb-20">
      <h2 class="text-xl sm:text-4xl md:text5xl text-white tracking-widest">
        Other Tech
      </h2>
      <div class="flex flex-wrap">
        <TechCards
          v-for="technology in otherTechnologies"
          :key="technology.id"
          :colour="technology.colour"
          :logo-link="technology.logoLink"
          :stroke-percentage="technology.strokePercentage"
          class="w-1/2 sm:w-1/3 lg:w-1/5"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TechCards from '~/components/TechCards'
export default {
  components: { TechCards },
  data: () => ({
    webTechnologies: [
      {
        id: 1,
        colour: '#f16529',
        strokePercentage: 95,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
      },
      {
        id: 2,
        colour: '#3c9cd7',
        strokePercentage: 90,
        logoLink: 'https://cdn.worldvectorlogo.com/logos/css3.svg'
      },
      {
        id: 3,
        colour: '#f0db4f',
        strokePercentage: 85,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      },
      {
        id: 4,
        colour: '#ffdb57',
        strokePercentage: 50,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png'
      },
      {
        id: 5,
        colour: '#7a73b0',
        strokePercentage: 50,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png'
      },
      {
        id: 6,
        colour: '#2850a3',
        strokePercentage: 60,
        logoLink:
          'https://pbs.twimg.com/media/DAmAezjW0AE7GWL?format=png&name=small'
      }
    ],
    webframeworkTechnologies: [
      {
        id: 1,
        colour: '#41b883',
        strokePercentage: 90,
        logoLink: 'https://vuejs.org/images/logo.png'
      },
      {
        id: 2,
        colour: '#41b883',
        strokePercentage: 80,
        logoLink:
          'https://user-images.githubusercontent.com/6279478/28391719-aa7eda02-6ca4-11e7-8362-c7ea45f81ca9.png'
      },
      {
        id: 3,
        colour: '#47daf9',
        strokePercentage: 70,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
      },
      {
        id: 4,
        colour: '#47daf9',
        strokePercentage: 65,
        logoLink:
          'https://i0.wp.com/invotra.com/wp-content/uploads/2019/11/React-native-logo-transparent@2x.png?fit=300%2C300&ssl=1'
      },
      {
        id: 5,
        colour: '#dd0031',
        strokePercentage: 50,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png'
      },
      {
        id: 6,
        colour: '#222222',
        strokePercentage: 80,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/archive/6/64/20170429090804%21Expressjs.png'
      },
      {
        id: 7,
        colour: '#003021',
        strokePercentage: 50,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/de/thumb/0/0e/Django-logo.svg/504px-Django-logo.svg.png'
      },
      {
        id: 8,
        colour: '#222222',
        strokePercentage: 50,
        logoLink: 'https://www.fullstackpython.com/img/logos/flask.jpg'
      },
      {
        id: 9,
        colour: '#ff3857',
        strokePercentage: 50,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png'
      }
    ],
    cssframeworkTechnologies: [
      {
        id: 1,
        colour: '#54bbb5',
        strokePercentage: 90,
        logoLink:
          'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'
      },
      {
        id: 2,
        colour: '#d75797',
        strokePercentage: 70,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png'
      }
    ],
    versionTechnologies: [
      {
        id: 1,
        colour: '#fb4038',
        strokePercentage: 80,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/97px-Git_icon.svg.png'
      }
    ],
    designTechnologies: [
      {
        id: 1,
        colour: '#dc395f',
        strokePercentage: 75,
        logoLink: 'https://cdn.worldvectorlogo.com/logos/invision.svg'
      },
      {
        id: 2,
        colour: '#00c7fc',
        strokePercentage: 65,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png'
      },
      {
        id: 3,
        colour: '#ff7727',
        strokePercentage: 80,
        logoLink:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png'
      }
    ],
    otherTechnologies: [
      {
        id: 1,
        colour: '#2396ed',
        strokePercentage: 50,
        logoLink:
          'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ'
      }
    ]
  }),
  mounted() {
    this.log()
  },
  methods: {
    log() {
      console.log(this.$refs.webtech.getBoundingClientRect().top)
      console.log(this.$refs.frameworks.getBoundingClientRect().top)
    }
  }
}
</script>

<style></style>
