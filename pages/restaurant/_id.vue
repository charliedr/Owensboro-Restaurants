<template>
  <div>
    <section class="restaurant__hero" :style="{ backgroundImage: `url(../${thumbnail})` }"></section>
    <section class="restaurant__content container">

      <!-- Logo -->
      <div class="restaurant__content--logo-wrapper">
        <img class="restaurant__content--logo" :src="`../${logo}`" alt="">
      </div>

      <!-- Name + Description -->
      <h1 class="restaurant__content--name">{{ name }}</h1>
      <span class="restaurant__content--category">{{ category }}</span>
      <div class="divider"></div>
      <p class="restaurant__content--options">{{ options }}</p>
      <div class="divider" v-if="description"></div>
      <p class="restaurant__content--description" v-if="description">{{ description }}</p>
      <div class="divider"></div>

      <!-- Contact Information -->
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
        <a class="restaurant__button" :href="website" v-if="website">
          <h2>Visit Website</h2>
        </a>
      </div>
      <div class="divider"></div>
      
      <!-- Online Ordering -->
      <h2 class="section__title">Online Ordering</h2>
      <div class="divider"></div>
      <p  v-if="!doordashLink && !toastLink && !grubhubLink && !bigOTakeoutLink"><i>Not currently available.</i></p>
      <div class="restaurant__onlineorder--wrapper" >
        <a :href="toastLink" v-if="toastLink">
          <img :src="`../${toastLogo}`" alt="Toast logo">
        </a>
        <a :href="grubhubLink" v-if="grubhubLink">
          <img :src="`../${grubhubLogo}`" alt="Grubhub logo">
        </a>
        <a :href="doordashLink" v-if="doordashLink">
          <img :src="`../${doordashLogo}`" alt="Doordash logo">
        </a>
        <a :href="bigOTakeoutLink" v-if="bigOTakeoutLink">
          <img :src="`../${bigOTakeoutLogo}`" alt="Big O Takeout logo">
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      // The slug is based on the name of the current restaurant
      slug: this.$route.params,
      // I had to declare these beforehand so that they could be referenced in mounted()
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
      bigOTakeoutLink: '',
      bigOTakeoutLogo: '',
      toastLogo: '',
      toastLink: '',
      doordashLogo: '',
      doordashLink: '',
      grubhubLink: '',
      grubhubLogo: '',
    }
  },
  computed: {
    ...mapState({
      restaurants: state => state.restaurants
    }),
  },
  mounted() {
    // Grab restaurant information based on the current slug
    const currentRestaurant = this.restaurants.filter(restaurant => restaurant.name === this.slug.id)
    // Set data points based on the information that was pulled above in currentRestaurant
    // [0] is used to reference the first object (restaurant) as it is unnamed when filtered like this
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
    this.bigOTakeoutLink = currentRestaurant[0].bigOTakeoutLink
    this.bigOTakeoutLogo = currentRestaurant[0].bigOTakeoutLogo
    this.toastLink = currentRestaurant[0].toastLink
    this.toastLogo = currentRestaurant[0].toastLogo
    this.doordashLink = currentRestaurant[0].doordashLink
    this.doordashLogo = currentRestaurant[0].doordashLogo
    this.grubhubLink = currentRestaurant[0].grubhubLink
    this.grubhubLogo = currentRestaurant[0].grubhubLogo

    console.log(this.$route.params.id)
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
        max-width: 80%;
        height: 160px;;
        padding: 1rem;
        border-radius: 1rem;
        margin: 0 auto;
      }

      &--name {
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: capitalize;
      }

      .restaurant__contact--wrapper {
        display: grid;
        grid-template-columns: repeat(2, minmax(50%, 1fr));

        .restaurant__button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
      
      .restaurant__onlineorder--wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 1rem;

          img {
            width: 100%;
            max-width: 150px;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    .section__title {
      font-size: 1.25rem;
    }

    .restaurant__contact--wrapper, .restaurant__onlineorder--wrapper {
      grid-template-columns: repeat(3, 1fr) !important;
      padding: 2rem 0;
    }

    .restaurant__contact--wrapper {
      .restaurant__button {
        margin-bottom: 0;
      }
    }

    .restaurant__onlineorder--wrapper {
      img {
        max-width: 150px !important;
      }
    }
  }
</style>