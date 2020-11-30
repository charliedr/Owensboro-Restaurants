<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

// <script>
// import ogImage from '~/assets/ogImage.jpg'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  head() {
    return {
      meta: [
        { hid: 'og:url', property: 'og:url', content: 'https://eatlocalobky.com' },
        { hid: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Eat Local OBKY' },
        { hid: 'og:description', property: 'og:description', content: 'A directory for locally owned restaurants in the Owensboro, KY area.' },
        { hid: 'og:image', property: 'og:image', content: 'ogImage.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
  padding: 0;
}

body {
  background-color: #ffffff;;
  color: #080808;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s ease-in-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: scale(.98);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.divider {
  border-bottom: 1px solid #1D3557;
  opacity: .25;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
}
</style>
