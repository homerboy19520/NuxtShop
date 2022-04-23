<template>
  <div class="hero-device">
    <div class="hero-device__wrapper main__container">
      <h2 class="hero-device__title">
        <span>{{ data.span }}</span>
        <span></span>
        <span></span>
      </h2>
      <p>{{ data.description }}</p>
      <ButtonApp @on-button="onButton" class="hero__button" modifier="secondary"
        >Расчитать стоимость</ButtonApp
      >
    </div>
    <picture v-if="isMobile">
      <source
        type="image"
        :srcset="`${data.imgMobilePng1x} 1x, ${data.imgMobilePng2x} 2x`"
      />
      <img
        class="hero-device__img"
        :src="data.imgMobilePng1x"
        :srcset="`${data.imgMobilePng2x} 2x`"
        alt="background"
      />
    </picture>
    <picture v-else>
      <source
        type="image"
        :srcset="`${data.imgDesktopPng1x} 1x, ${data.imgDesktopPng2x} 2x`"
      />
      <img
        class="hero-device__img"
        :src="data.imgDesktopPng1x"
        :srcset="`${data.imgDesktopPng2x} 2x`"
        alt="background"
      />
    </picture>
  </div>
</template>

<script>
import ButtonApp from "@/components/ui/Button";
import { MAIN_DATA } from "@/helpers/mocs.js";
import { mapMutations } from "vuex";

export default {
  name: "HeroDevice",
  components: { ButtonApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onButton() {
      this.togglePopUp();
    },
  },

  computed: {
    isMobile() {
      return document.documentElement.clientWidth < 1200;
    },
  },
};
</script>

<style lang="scss">
.hero-device {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 180px;

  @media (min-width: 1000px) {
    padding-bottom: 82px;
    min-height: 672px;
  }

  &__title {
    position: relative;
    margin-bottom: 17px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: var(--color-white);
    z-index: 1;
    width: 100%;
    max-width: 428px;

    @media (min-width: 700px) {
      width: 89%;
    }

    @media (min-width: 1000px) {
      width: 100%;
      max-width: 855px;
      font-size: 60px;
      line-height: 83px;
    }

    & span {
      position: relative;
      display: block;
      width: fit-content;
      &::after {
        content: "";
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 7px;
        border-radius: 31px;
        background-color: var(--color-blue);
        transform: translate(0px, 4px);
        width: 100%;

        @media (min-width: 1000px) {
          height: 14px;
        }
      }
    }
  }

  &__wrapper {
    position: relative;
    padding-top: 46px;
    width: 100%;

    @media (min-width: 700px) {
      max-width: 80%;
    }

    @media (min-width: 800px) {
      padding-top: 73px;
    }

    @media (min-width: 1000px) {
      max-width: 905px;
    }
    & p {
      position: relative;
      font-family: var(--font-manrope);
      max-width: 468px;
      z-index: 1;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.055em;
      color: var(--color-white);
      margin-bottom: 23px;

      @media (min-width: 1000px) {
        padding: 0;
        margin-bottom: 42px;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.055em;
        color: var(--color-white);
      }
    }
  }

  &__img {
    position: relative;
    bottom: 60px;
    margin: 0 auto;

    @media (min-width: 700px) {
      position: absolute;
      bottom: unset;
      right: 0;
      top: -40px;
      margin: unset;
    }
    @media (min-width: 1200px) {
      top: 0;
    }
  }

  &__button {
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
  }
}
</style>
