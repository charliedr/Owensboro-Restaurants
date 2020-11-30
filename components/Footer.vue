<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <span>Built by <a href="https://oddballcreative.agency">Oddball Creative</a> &#128526;</span>
      <a class="privacy-policy" href="https://www.freeprivacypolicy.com/privacy/view/4e77b1ab058348f231fcebf867dc8ad3">Privacy Policy</a>
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
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
        // margin: 0 .5rem;
        color: #70D34A;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .privacy-policy {
        color: #ffffff;
        margin-top: .25rem;
        font-size: 12px;
      }
    }
  }
</style>