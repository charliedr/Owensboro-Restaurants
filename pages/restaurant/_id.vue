<template>
  <div>
    <section class="restaurant__hero" :style="{ backgroundImage: `url(../${thumbnail})` }"></section>
    <section class="restaurant__content">
      <div class="restaurant__content--logo-wrapper">
        <img class="restaurant__content--logo" :src="`../${logo}`" alt="">
      </div>
      <h1 class="restaurant__content--name">{{ name }}</h1>
      <span class="restaurant__content--category">{{ category }}</span>
      <div class="divider"></div>
      <p class="restaurant__content--options">{{ options }}</p>
      <div class="divider"></div>
      <p class="restaurant__content--description">{{ description }}</p>
      <div class="divider"></div>
        <h2 class="section__title">Contact Information</h2>
      <div class="divider"></div>
      <div class="restaurant__contact--wrapper">
        <a class="restaurant__button" :href="googleMaps">
          <h2>Get Directions</h2>
          <span>{{ address }}</span>
        </a>
        <a class="restaurant__button"  :href="`tel:${phoneNumber}`">
          <h2>Call Now</h2>
          <span>{{ phoneNumber }}</span>
        </a>
          <a class="restaurant__button" :href="website">
            <h2>Visit Website</h2>
          </a>
      </div>
      <div class="divider"></div>
      <h2 class="section__title">Online Ordering</h2>
      <div class="divider"></div>
      <div class="contact__wrapper" v-if="bigOTakeout">
        <img class="restauraunt__content--icon" src="~assets/cart.svg" alt="shopping cart icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--online-order" :href="bigOTakeout">Big O Takeout</a>
      </div>
      <div class="contact__wrapper" v-if="toast">
        <img class="restauraunt__content--icon" src="~assets/cart.svg" alt="shopping cart icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--online-order" :href="toast">Toast</a>
      </div>
      <div class="contact__wrapper" v-if="grubhub">
        <img class="restauraunt__content--icon" src="~assets/cart.svg" alt="shopping cart icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--online-order" :href="grubhub">Grubhub</a>
      </div>
    </section>

    <!-- ------------------------------------- -->
    <!-- <a :href="`${bigOTakeout}`">Big O Takeout</a>
    <a :href="`${toast}`">Toast</a> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      slug: this.$route.params,
      name: '',
      logo: '',
      thumbnail: '',
      category: '',
      description: '',
      address: '',
      googleMaps: '',
      phoneNumber: '',
      website: '',
      options: '',
      bigOTakeout: '',
      toast: '',
      grubhub: ''
    }
  },
  computed: {
    ...mapState({
      restaurants: state => state.restaurants
    })
  },
  mounted() {
    const currentRestaurant = this.restaurants.filter(restaurant => restaurant.name === this.slug.id)
    this.name = currentRestaurant[0].name
    this.logo = currentRestaurant[0].logo
    this.thumbnail = currentRestaurant[0].thumbnail
    this.category = currentRestaurant[0].category
    this.description = currentRestaurant[0].description
    this.address = currentRestaurant[0].address
    this.googleMaps = currentRestaurant[0].googleMaps
    this.phoneNumber = currentRestaurant[0].phoneNumber
    this.website = currentRestaurant[0].website
    this.options = currentRestaurant[0].options
    this.bigOTakeout = currentRestaurant[0].bigOTakeout
    this.toast = currentRestaurant[0].toast
    this.grubhub = currentRestaurant[0].grubhub
  },
}
</script>

<style lang="scss">
  .section__title {
    font-size: 1rem;
    font-weight: 700;
    color: #080808;
    text-align: left;
    // border-left: .25rem solid #1D3557;
    // padding-left: .5rem;
    margin: -.5rem 0;
  }

  .restaurant {
    &__hero {
      height: 35vh;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    &__button {
      display: inline-block;
      background: #1D3557;
      color: #ffffff;
      text-align: center;
      padding: .5rem 1rem;
      margin: 0 1rem 1rem 0;
      border-radius: .5rem;
      border: none;
      text-decoration: none;

      h2 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: .25rem;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }

      span {
        font-size: .8rem;
      }
    }

    &__content {
      padding: 1rem;
      margin-top: -80px;
      // text-align: center;

      &--logo-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &--logo {
        background: #ffffff;
        width: auto;
        height: 160px;;
        padding: 1rem;
        border-radius: 1rem;
        margin: 0 auto;
      }

      &--name {
        font-size: 1.8rem;
        font-weight: 500;
      }

      .restaurant__contact--wrapper {
        display: grid;
        grid-template-columns: repeat(2, minmax(50%, 1fr));
      }
    }
  }
</style>