<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
$white: #ffffff;
$gray: #EFEFEF;
$black: #080808;
$primary-color: #1D3557;

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
  background-color: $white;
  color: $black;
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
  border-bottom: 1px solid $primary-color;
  opacity: .25;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
}
</style>
