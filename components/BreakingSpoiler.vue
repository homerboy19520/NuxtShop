<template>
  <div class="breaking-spoiler">
    <div class="breaking-spoiler__wrapper">
      <span class="breaking-spoiler__title">{{
        MAIN_DATA.breakingSpoiler.title
      }}</span>
      <span class="breaking-spoiler__subtitle">
        {{ MAIN_DATA.breakingSpoiler.subtitle }}
      </span>
      <SpoilersApp
        class="breaking-spoiler__main"
        :modifier="MAIN_DATA.breakingSpoiler.modifier"
        :spoilers="MAIN_DATA.breakingSpoiler"
      ></SpoilersApp>
      <picture v-if="isMobile">
        <source
          type="image"
          :srcset="`${MAIN_DATA.breakingSpoiler.imgMobilePng1x} 1x, ${MAIN_DATA.breakingSpoiler.imgMobilePng2x} 2x`"
        />
        <img
          class="breaking-spoiler__img"
          :src="MAIN_DATA.breakingSpoiler.imgMobilePng1x"
          :srcset="`${MAIN_DATA.breakingSpoiler.imgMobilePng2x} 2x`"
          alt="background"
        />
      </picture>
      <picture v-else>
        <source
          type="image"
          :srcset="`${MAIN_DATA.breakingSpoiler.imgDesktopPng1x} 1x, ${MAIN_DATA.breakingSpoiler.imgDesktopPng2x} 2x`"
        />
        <img
          class="breaking-spoiler__img"
          :src="MAIN_DATA.breakingSpoiler.imgDesktopPng1x"
          :srcset="`${MAIN_DATA.breakingSpoiler.imgDesktopPng2x} 2x`"
          alt="background"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import SpoilersApp from "@/components/modals/spoiler/Spoilers";

export default {
  name: "BreakingSpoiler",
  components: { SpoilersApp },
  data() {
    return {
      MAIN_DATA,
    };
  },

  computed: {
    isMobile() {
      return document.documentElement.clientWidth < 1200;
    },
  },
};
</script>

<style lang="scss">
.breaking-spoiler {
  position: relative;
  width: 100%;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 611px;
    }
  }

  &__title {
    margin-bottom: 24px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 32px;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 29px;
      font-size: 56px;
      line-height: 67px;
    }
  }

  &__subtitle {
    margin-bottom: 24px;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 38px;
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__main {
    margin-bottom: 90px;

    @media (min-width: 1000px) {
      margin-bottom: 0;
    }
  }

  &__img {
    max-width: unset;
    z-index: -1;
    @media (min-width: 1000px) {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
