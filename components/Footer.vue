<template>
  <footer class="footer">
    <NavFooter></NavFooter>
    <div class="main__container">
      <div class="footer__wrapper">
        <div class="footer__container">
          <span class="footer__text">Компания © 2019</span>
          <span class="footer__law">Все права защищены</span>
        </div>
        <span class="footer__text">Политика конфиденциальности</span>
      </div>
    </div>
    <HeaderInput
      class="footer__input"
      @on-close="toggleFooterInput"
      :isOpen="isFooterInput"
    ></HeaderInput>
  </footer>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import HeaderInput from "@/components/modals/HeaderInput";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FooterApp",
  components: { HeaderInput, NavFooter },

  methods: {
    ...mapMutations(["toggleFooterInput"]),
  },

  computed: {
    ...mapGetters(["isFooterInput"]),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  overflow: hidden;
  background-color: var(--color-black);
  width: 100%;
  font-family: var(--font-manrope);

  position: relative;
  &::after {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-left: 86px solid transparent;
    border-right: 86px solid transparent;
    border-top: 56px solid var(--color-black);
  }

  @media (min-width: 700px) {
    &::after {
      content: "";
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 48px 0 62px 0;

    @media (min-width: 1000px) {
      padding: 31px 0 167px 0;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;

    .footer__text {
      margin-bottom: 8px;
    }
  }

  &__law {
    font-weight: 400;
    font-size: 11px;
    line-height: 128.34%;
    color: var(--color-white);
  }

  &__text {
    font-weight: 500;
    font-size: 11px;
    line-height: 128.34%;
    color: var(--color-white);
  }

  &__input {
    @media (min-width: 600px) {
      max-height: 56px;
    }
  }
}
</style>
