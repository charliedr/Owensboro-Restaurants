<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper container">
        <span class="hero__wrapper--hashtag">#ShopLocal</span>
        <h1 class="hero__wrapper--title">Find <b>local restaurants</b> in Owensboro, KY</h1>
      </div>
    </section>
    <div class="content container">
      <FeaturedRestaurant class="content__featured" />
      <RestaurantList class="content__list" />
    </div>
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
  padding: 4rem 0;

  &__wrapper {
    padding: 1rem;
  
    
    &--hashtag {
      font-size: 14px;
      font-weight: 700;
    }

    &--title {
      font-size: 1.8rem;
      font-weight: 500;
      max-width: 20ch;
    }
  }
}


@media (min-width: 769px) {
.hero {
  padding: 6rem 0;

  &__wrapper {
    &--hashtag {
      font-size: 1.5rem;
    }

    &--title {
      font-size: 2.5rem;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__featured, &__list {
    width: 50%;
    align-self: flex-start;
  }
}
}
</style>
