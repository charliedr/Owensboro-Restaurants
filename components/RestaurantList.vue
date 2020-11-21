<template>
  <div class="restaurantList">
    <h1 class="restaurantList__title">All Restaurants</h1>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.name">
        <NuxtLink class="restaurantList__item" :to="`/restaurant/${restaurant.name}`">
          <img class="restaurantList__item--logo" :src="`${restaurant.logo}`" style="width: 3rem; height: auto;">
          <div class="restaurantList__item--content">
            <div class="restaurantList__item--content-title">{{ restaurant.name }}</div>
            <div class="restaurantList__item--content-category">{{ restaurant.category }}</div>
          </div>
          <img class="chevron-right" src="~assets/chevron-right.svg" alt="right arrow icon">
        </NuxtLInk>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    // Pull information from the store
    ...mapState({
      restaurants: state => state.restaurants
    })
  }
}
</script>

<style lang="scss">
  .restaurantList {
    padding: 1rem;
  
    &__title {
      font-size: 1rem;
      font-weight: 500;
      color: #080808;
      margin-bottom: 1rem;
      border-left: .25rem solid #1D3557;
      padding-left: .5rem;
    }

    ul {
      list-style-type: none;
      background: #EFEFEF;
      border-radius: 8px;

      .restaurantList__item {
        display: grid;
        grid-template-columns: 3rem 1fr 3rem;
        gap: 1rem;
        padding: 1rem;
        text-decoration: none;
        height: 72px;

        &--logo {
          max-width: 3rem;
          max-height: 3rem;;
        }

        &--content {

          &-title {
            font-size: 17px;
            font-weight: 700;
            color: #080808;
          }

          &-category {
            font-size: 15px;
            font-weight: 500;
            color: #080808;    
          }
        }

        .chevron-right {
          margin-left: auto;
          height: 2rem; 
        }
      }
    }
  }
</style>
