<template>
  <div>
    <section class="restaurant__hero" :style="{ backgroundImage: `url(../${thumbnail})` }"></section>
    <section class="restaurant__content">
      <h1 class="restaurant__content--name">{{ name }}</h1>
      <span class="restaurant__content--category">{{ category }}</span>
      <div class="divider"></div>
      <div class="contact__wrapper">
        <img class="restauraunt__content--icon" src="~assets/map-marker.svg" alt="map marker icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--address">{{ address }}</a>
      </div>
      <div class="contact__wrapper">
        <img class="restauraunt__content--icon" src="~assets/phone.svg" alt="phone icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--phoneNumber">{{ phoneNumber }}</a>
      </div>
      <div class="contact__wrapper">
        <img class="restauraunt__content--icon" src="~assets/website.svg" alt="map marker icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--website" :href="website">Website</a>
      </div>
      <div class="contact__wrapper">
        <img class="restauraunt__content--icon" src="~assets/cart.svg" alt="shopping cart icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--website" :href="bigOTakeout">Big O Takeout</a>
      </div>
      <div class="contact__wrapper">
        <img class="restauraunt__content--icon" src="~assets/cart.svg" alt="shopping cart icon" style="height: 32px; width: 32px;">
        <a class="restauraunt__content--website" :href="toast">Toast</a>
      </div>
      <div class="divider"></div>
      <p class="restaurant__content--description">{{ description }}</p>
      <div class="divider"></div>
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
      phoneNumber: '',
      website: '',
      bigOTakeout: '',
      toast: ''
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
    this.phoneNumber = currentRestaurant[0].phoneNumber
    this.website = currentRestaurant[0].website
    this.bigOTakeout = currentRestaurant[0].bigOTakeout
    this.toast = currentRestaurant[0].toast
  },
}
</script>

<style lang="scss">
  .restaurant {
    &__hero {
      height: 35vh;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    &__content {
      padding: 1rem;

      &--name {
        font-size: 1.8rem;
        font-weight: 500;
      }

      // &--category {}

      .contact__wrapper {
        display: flex;
        align-items: center;
        margin-bottom: .5rem;
        gap: 1rem;
        text-decoration: underline;

        > a {
          color: #080808;
        }
      }

      // &--address {}

      // &--phoneNumber {}

      // &--website {}
    }
  }
</style>