<template>
  <header class="navbar">
    <div class="navbar__wrapper container">
      <NuxtLink to="/" exact>
          <img class="navbar__wrapper--logo" src="~assets/eat_local_obky-logo.png" />
      </NuxtLink>
      <NuxtLink to="/restaurant-randomizer">
        <img class="navbar__wrapper--dice" src="~assets/dice.svg" alt="dice icon">
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .navbar {
    position: relative;
    height: 56px;
    width: 100%;
    background: #1D3557;
    color: #ffffff;

    &__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 56px;
      padding: 1rem;  

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        &:nth-of-type(2) {
          height: 32px;
        }
      }

      &--logo {
        // color: #ffffff;
        // font-size: 20px;
        // line-height: 1;
        // font-weight: 500;
        height: 2rem;
      }

      &--dice {
        width: 32px;
        height: 32px;
      }
    }

  }

  @media (min-width: 769px) {

  }

  @media (min-width: 1020px) {

  }

  @media (min-width: 1200px) {

  }
</style>