<template>
  <header class="navbar">
    <h1 class="navbar__logo">Owensboro Restaurants</h1>
    <a href="mailto:iamcharlier@gmail.com">
      <img class="navbar__email" src="~assets/email.svg" alt="email icon">
    </a>
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

    &__logo {
      font-size: 20px;
      line-height: 1;
      font-weight: 500;
    }

    &__email {
      width: 24px;
      height: 24px;
    }
  }
</style>