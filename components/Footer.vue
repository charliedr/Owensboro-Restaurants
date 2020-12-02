<template>
  <footer class="footer">
    <div class="footer__wrapper--top">
      <h3>Want to submit a restaurant?</h3>
      <p>Send an email to <a href="mailto:support@oddballcreative.agency">support@oddballcreative.agency</a></p>
    </div>
    <div class="footer__wrapper--bottom">
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
    margin-top: 1.5rem;
    color: #ffffff;

    &__wrapper--top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(29, 53, 87, 0.85);
      padding: 2.5rem 0;

      p {
        margin-top: .5rem;
      }

      a {
        color: #70D34A;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }  
    }

    &__wrapper--bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #1D3557;
      padding: .5rem 0;

      a {
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