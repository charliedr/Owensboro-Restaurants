<template>
  <div class="featured">
    <h1 class="featured__title">This Week's Featured Restaurant</h1>
    <div class="featured__card">
      <div class="featured__card--top">
        <div>
          <img class="featured__card--top-logo" :src="`${featured.logo}`">
        </div>
        <div>
          <div class="featured__card--top-title">{{ featured.name }}</div>
          <div class="featured__card--top-category" v-if="featured.category">{{ featured.category }}</div>
        </div>
      </div>
      <div class="featured__card--mid" :style="{ backgroundImage: `url(${featured.thumbnail})` }"></div>
      <div class="featured__card--bot">
          <!-- <a class="featured__card--bot-website" :href="featured.website">Order Online </a> -->
          <!-- <img class="navbar__email" src="~assets/chevron-right.svg" alt="right arrow icon"> -->
          <NuxtLink class="featured__card--bot-about" :to="`/restaurant/${featured.name}`">View Information</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    // Pull information from the store and set it as the featured object
    ...mapState({
      featured: state => state.featured
    })
  }
}
</script>

<style lang="scss">
  .featured {
    display: block;
    padding: 1.5rem 1rem;

    &__title {
      font-size: 1rem;
      font-weight: 500;
      color: #080808;
      border-left: .25rem solid #1D3557;
      padding-left: .5rem;
      margin-bottom: 1rem;
    }

    &__card {
      display: flex;
      flex-direction: column;
      background: #EFEFEF;
      border-radius: .5rem;

      &--top {
        display: flex;
        flex-direction: row;
        padding: 1rem;

        > div:first-of-type {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        > div:nth-of-type(2) {
          padding-left: 1rem;
        }

        &-logo {
          width: 3rem;
          height: auto;
        }

        &-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: .25rem;
        }

        &-category {
          font-size: 15px;
          font-weight: 500;
        }
      }

      &--mid {
        min-height: 194px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }

      &--bot {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 1rem;

        &-about {
          display: flex;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          text-transform: uppercase;
          text-decoration: none;
          color: #ffffff;
          background: #1D3557;
          padding: 10px 12px;
          border-radius: 8px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .featured {
      position: sticky;
      top: -1px;
    }
    .featured__title {
      font-size: 1.5rem;
    }
  }
</style>