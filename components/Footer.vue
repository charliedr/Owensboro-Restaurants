<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      Built by <a href="https://oddballcreative.agency">Oddball Creative</a> &#128526;
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer {
    display: block;
    padding: 1rem;
    margin-top: 1.5rem;
    background: #1D3557;
    color: #ffffff;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin: 0 .5rem;
        color: #70D34A;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>