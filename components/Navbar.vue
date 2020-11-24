<template>
  <header class="navbar">
    <div class="navbar__wrapper container">
      <NuxtLink to="/" exact>
          <h1 class="navbar__wrapper--logo">Restaurants &amp; Bars</h1>
      </NuxtLink>
      <NuxtLink to="/">
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
        text-decoration: none;

        &:nth-of-type(2) {
          height: 32px;
        }
      }

      &--logo {
        color: #ffffff;
        font-size: 20px;
        line-height: 1;
        font-weight: 500;
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