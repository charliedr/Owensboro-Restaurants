<template>
  <div>
    <section class="hero">
      <span class="hero__hashtag">#ShopLocal</span>
      <h1 class="hero__title">Find <b>local restaurants</b> in Owensboro, KY</h1>
    </section>
    <FeaturedRestaurant />
    <RestaurantList />
  </div>
</template>

<script>
import FeaturedRestaurant from '~/components/FeaturedRestaurant'
import RestaurantList from '~/components/RestaurantList'
import {mapState} from 'vuex'

export default {
  components: {
    FeaturedRestaurant,
    RestaurantList
  },
  computed: {
    ...mapState({
      restaurants: state => state.restaurants
    })
  }
}
</script>

<style lang="scss">
.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url('~assets/hero-img.jpg'), rgba(255, 255, 255, 0.7);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 4rem 1rem;

  &__hashtag {
    font-size: 14px;
    font-weight: 700;
  }

  &__title {
    font-size: 1.8rem;
    font-weight: 500;
    max-width: 20ch;
  }
}
</style>
