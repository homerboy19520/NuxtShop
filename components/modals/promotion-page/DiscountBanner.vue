<template>
  <div class="banner">
    <div class="banner__box">
      <span class="banner__title"
        >{{ MAIN_DATA.discountContent.banner.span }}
      </span>
      <span class="banner__text">{{
        MAIN_DATA.discountContent.banner.text
      }}</span>
      <ButtonApp @on-button="onButton" modifier="secondary">{{
        MAIN_DATA.discountContent.banner.button
      }}</ButtonApp>
      <IconApp class="banner__star" name="discount-star"></IconApp>
      <IconApp class="banner__star second" name="discount-star"></IconApp>
      <IconApp class="banner__dashed" name="discount-dashed"></IconApp>
    </div>
    <div class="banner__wrapper">
      <div class="banner__container">
        <img
          class="banner__img"
          :src="MAIN_DATA.discountContent.banner.src"
          :alt="MAIN_DATA.discountContent.banner.alt"
        />
        <div class="banner__card">
          <IconApp class="banner__svg" name="discount-card"></IconApp>
          <span class="banner__call">{{
            MAIN_DATA.discountContent.banner.card
          }}</span>
        </div>
      </div>
    </div>
    <img
      class="banner__grid"
      alt="grid"
      src="@/assets/img/promotions-page/discount-grid.png"
    />
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import ButtonApp from "@/components/ui/Button";
import IconApp from "@/components/ui/Icons";
import { mapMutations } from "vuex";

export default {
  name: "DiscountBanner",
  components: { IconApp, ButtonApp },
  data() {
    return {
      MAIN_DATA,
    };
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin-bottom: 107px;

  @media (min-width: 1000px) {
    max-width: unset;
    margin-bottom: 150px;
  }

  &__box {
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    padding: 54px 24px 494px 24px;
    background-color: var(--color-grey);

    @media (min-width: 600px) {
      padding-bottom: 400px;
    }

    @media (min-width: 1000px) {
      width: 100%;
      padding: 50px 61px 41px 61px;
    }
  }

  &__title,
  &__text {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    width: 100%;
    display: block;

    @media (min-width: 1000px) {
      max-width: 50%;
    }

    @media (min-width: 1200px) {
      max-width: 60%;
      font-size: 48px;
      line-height: 49px;
    }
  }

  &__text {
    margin-bottom: 40px;
    color: var(--color-white);
  }

  &__title {
    color: var(--color-blue);
  }

  &__wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (min-width: 1000px) {
      right: 37px;
    }

    img {
      max-width: none;
      width: 417px;
    }
  }

  &__container {
    position: relative;
  }

  &__card {
    position: absolute;
    right: 10px;
    top: 75px;
    width: 177px;
    height: 107px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);

    @media (min-width: 1000px) {
      right: -16px;
      top: 111px;
    }
  }

  &__svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__star {
    position: absolute;
    right: 51%;
    top: 46%;
    width: 323.43px;
    height: 410px;

    @media (min-width: 1000px) {
      right: 21%;
      top: -25%;
    }

    &.second {
      right: 39%;
      top: 72%;

      @media (min-width: 1000px) {
        right: 21%;
        top: 37%;
        transform: rotate(9deg);
      }
    }
  }

  &__dashed {
    display: none;
  }

  &__grid {
    z-index: -1;
    width: 243px;
    height: 220px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(50%, 50%);
    @media (min-width: 1000px) {
      transform: translate(34%, 30%);
    }
  }

  &__call {
    left: 75px;
    display: block;
    top: 21px;
    position: absolute;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: var(--color-white);
  }
}
</style>
