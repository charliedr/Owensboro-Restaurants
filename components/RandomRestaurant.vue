<template>
  <div>
    <section class="random">
      <div class="random__top">
        <h1 class="random__title">Can't decide what to eat?</h1>
        <h2 class="random__subtitle">Use our randomizer to pick for you!</h2>
        <button class="random__button" id="randomizeButton" @click="randomize()">Pick For Me</button>
      </div>
      <div class="random__bottom">
        <img class="random__logo" :src="`${chosenRestaurant.logo}`" v-if="chosenRestaurant.logo" alt="Restaurant logo">
        <span class="random__chosen" v-if="chosenRestaurant">{{ chosenRestaurant.name }}</span>
        <NuxtLink class="random__link" :to="`/restaurant/${chosenRestaurant.name}`" v-if="chosenRestaurant.name">visit page</NuxtLink>
        <!-- <ul class="random__list">
          <div class="random__list--wrapper">
            <li class="random__list--item" v-for="restaurant in restaurantNames" :key="restaurant">{{ restaurant }}</li>
          </div>
        </ul> -->
        <!-- <button class="random__button" id="randomizeButtonAgain" @click="randomizeAgain">roll again</button> -->
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      listLength: 0,
      randomButtonClicked: false,
      chosenRestaurant: ''
    }
  },
  computed: {
    ...mapState({
      restaurantNames: state => state.restaurants
    })
    // ...mapState({
    //   restaurants: state => state.restaurants
    // })
  },
  methods: {
    randomize: function(e) {
      this.randomButtonClicked = !this.randomButtonClicked

      if(this.randomButtonClicked === true || this.randomButtonClicked === false) {
        document.getElementById('randomizeButton').innerText = 'Go Again'
        let randomRestaurant = this.restaurantNames[Math.floor(Math.random() * this.restaurantNames.length)]
        this.chosenRestaurant = randomRestaurant
      } else {
        console.log('Currently False')
      }
    }

    // randomize: function(e) {
    //   let restaurantListWrapper = document.querySelector('.random__list--wrapper')
    //   let randomizeButton = document.getElementById('randomizeButton')

    //   randomizeButton.onclick = function() {
    //     restaurantListWrapper.classList.add('roulette')
    //   }
    // },
    // randomizeAgain: function(e) {
    //   let restaurantListWrapper = document.querySelector('.random__list--wrapper')
    //   let randomizeButtonAgain = document.getElementById('randomizeButtonAgain')

    //   randomizeButtonAgain.onclick = function() {
    //     restaurantListWrapper.style.transition = "all 0s ease-out"
    //     restaurantListWrapper.classList.remove('roulette')
    //   }
    // }
  },
  mounted() {
    const listLength = this.restaurantNames.length
    console.log(listLength)
  }
}
</script>

<style lang="scss">
  .random {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    height: calc(100vh - 100px);

    &__top {
      padding: 4rem 0;
    }

    &__title {
      font-size: 1.5rem;
    }

    &__subtitle {
      font-size: 1rem;
      font-weight: 500;
    }

    &__button {
      display: flex;
      align-self: center;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      color: #ffffff;
      background: #1D3557;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 1rem auto 0 auto;
    }

    &__logo {
      height: 120px;
      width: auto;
    }

    &__chosen {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__link {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 120px;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
      text-decoration: none;
      color: #1D3557;
      border: 2px solid #1D3557;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 1rem auto 0 auto;
    }

    // &__list {
    //   height: 1.5rem;
    //   overflow-y: hidden;

    //   &--wrapper {
    //     transform: translateY(1.5rem);
    //     transition: all 2.5s ease-out;
    //   }

    //   .roulette {
    //     transform: translateY(-100%);
    //   }

    //   &--item {
    //     font-size: 1rem;
    //     text-align: center;
    //     margin: 0;
    //     padding: 0;
    //   }
    // }
  }
</style>