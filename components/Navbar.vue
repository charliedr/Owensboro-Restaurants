<template>
  <header class="navbar">
    <NuxtLink to="/" exact>
        <h1 class="navbar__logo">Restaurants</h1>
    </NuxtLink>
    <NuxtLink to="/">
      <img class="navbar__dice" src="~assets/dice.svg" alt="dice icon">
    </NuxtLink>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .navbar {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    padding: 1rem;
    background: #1D3557;
    color: #ffffff;

    a {
      text-decoration: none;

      &:nth-of-type(2) {
        height: 32px;
      }
    }

    &__logo {
      color: #ffffff;
      font-size: 20px;
      line-height: 1;
      font-weight: 500;
    }

    &__dice {
      width: 32px;
      height: 32px;
    }
  }
</style>