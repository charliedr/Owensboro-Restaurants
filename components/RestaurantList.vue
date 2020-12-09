<template>
  <div class="restaurantList">
    <h1 class="restaurantList__title">All Restaurants</h1>
    <!-- FILTERING -->
    <div class="restaurantList__filters">
      <button @click="filterListClear">All</button>
      <button @click="filterRestaurants" value="American Restaurant">American</button>
      <button @click="filterRestaurants" value="Asian Restaurant">Asian</button>
      <button @click="filterRestaurants" value="Bakery & Cafe">Bakery & Cafe</button>
      <button @click="filterRestaurants" value="Bar & Grill">Bar & Grill</button>
      <button @click="filterRestaurants" value="Barbecue Restaurant">Bar-B-Q</button>
      <button @click="filterRestaurants" value="Diner">Diner</button>
      <button @click="filterRestaurants" value="Coffee Shop">Coffee</button>
      <button @click="filterRestaurants" value="Fine Dining">Fine Dining</button>
      <button @click="filterRestaurants" value="Hamburger Restaurant">Hamburger</button>
      <button @click="filterRestaurants" value="Italian Restaurant">Italian</button>
      <button @click="filterRestaurants" value="Mexican Restaurant">Mexican</button>
      <button @click="filterRestaurants" value="Pizza">Pizza</button>
      <button @click="filterRestaurants" value="Seafood Restaurant">Seafood</button>
      <button @click="filterRestaurants" value="Steak House">Steak House</button>
      <button @click="filterRestaurants" value="Thai Restaurant">Thai</button>
    </div>
    <!-- <p>{{ filteredList }}</p> -->
    <ul v-if="filteredListVisible">
      <li v-for="restaurant in filteredList" :key="restaurant.name">
        <NuxtLink class="restaurantList__item" :to="`/restaurant/${restaurant.name}`">
          <img class="restaurantList__item--logo" :src="`${restaurant.logo}`" style="width: 3rem; height: auto;">
          <div class="restaurantList__item--content">
            <div class="restaurantList__item--content-title">{{ restaurant.name }}</div>
            <div class="restaurantList__item--content-category">{{ restaurant.category }}</div>
          </div>
          <img class="chevron-right" src="~assets/chevron-right.svg" alt="right arrow icon">
        </NuxtLink>
      </li>
    </ul>
    <!-- LIST -->
    <ul v-else>
      <li v-for="restaurant in restaurants" :key="restaurant.name">
        <NuxtLink class="restaurantList__item" :to="`/restaurant/${restaurant.name}`">
          <img class="restaurantList__item--logo" :src="`${restaurant.logo}`" style="width: 3rem; height: auto;">
          <div class="restaurantList__item--content">
            <div class="restaurantList__item--content-title">{{ restaurant.name }}</div>
            <div class="restaurantList__item--content-category">{{ restaurant.category }}</div>
          </div>
          <img class="chevron-right" src="~assets/chevron-right.svg" alt="right arrow icon">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      filteredList: [],
      filteredListVisible: false
    }
  },
  methods: {
    filterRestaurants(e) {
      console.log('Filtering for:', e.target.value)
      // Filters restaurants if the value of the button equals the restaurant's category
      const filtered = this.restaurants.filter((restaurant) => restaurant.category === e.target.value)
      this.filteredList = filtered
      this.filteredListVisible = true
    },
    filterListClear() {
      this.filteredListVisible = false
    }
  },
  computed: {
    // Pull information from the store
    ...mapState({
      restaurants: state => state.restaurants
    }),

  }
}
</script>

<style lang="scss">
  .restaurantList {
    padding: 1.5rem 1rem;
  
    &__title {
      font-size: 1rem;
      font-weight: 500;
      color: #080808;
      margin-bottom: 1rem;
      border-left: .25rem solid #1D3557;
      padding-left: .5rem;
    }

    &__filters {
      margin-bottom: .5rem;

      button {
        display: inline-block;
        font-size: 14px;
        padding: .25rem .75rem;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.14);
        margin-bottom: .5rem;
        border-radius: .75rem;
        transition: all .2s ease-in-out;
        outline: none;

        &:hover, &:focus {
          cursor: pointer;
          background: #1D3557;
          color: #ffffff;
        }
      }
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
        // height: 80px;
        border-bottom: 1px solid rgba(8, 8, 8, 0.05);

        &--logo {
          max-width: 3rem;
          max-height: 3rem;
          align-self: center;
        }

        &--content {

          &-title {
            font-size: 17px;
            font-weight: 700;
            color: #080808;
            text-transform: capitalize;
          }

          &-category {
            font-size: 15px;
            font-weight: 500;
            color: #080808;    
          }
        }

        .chevron-right {
          align-self: center;
          margin-left: auto;
          height: 2rem;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .restaurantList__title {
      font-size: 1.5rem;
    }
  }
</style>
