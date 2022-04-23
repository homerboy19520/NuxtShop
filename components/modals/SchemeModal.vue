<template>
  <div class="scheme">
    <h4 class="scheme__title">{{ MAIN_DATA.schemeContent.title }}</h4>
    <div class="scheme__wrapper">
      <div
        class="scheme__card"
        v-for="(item, index) in MAIN_DATA.schemeContent.blocks"
        :key="index"
      >
        <span class="scheme__text">{{ item.text }}</span>
      </div>
    </div>
    <img class="scheme__img" src="@/assets/img/scheme/scheme-background.png" />
    <IconApp class="scheme__star" name="scheme-star" />
    <IconApp class="scheme__microstar" name="scheme-microstar" />
    <IconApp class="scheme__line" name="scheme-line"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import IconApp from "@/components/ui/Icons";

export default {
  name: "SchemeModal",
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.scheme {
  position: relative;
  margin-bottom: 228px;

  @media (min-width: 1000px) {
    margin-bottom: 409px;
  }

  &__title {
    margin-bottom: 50px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 58px;
    text-align: center;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 69px;
      font-size: 60px;
      line-height: 58px;
    }
  }

  &__text {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: var(--color-white);
  }

  &__card {
    max-width: 314px;
    min-width: 314px;
    min-height: 186px;
    padding: 45px 22px;
    margin-bottom: 24px;
    border: 7px solid var(--color-blue);
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: var(--color-blue);
    }

    @media (min-width: 600px) {
      max-width: 400px;
    }

    @media (min-width: 1000px) {
      max-width: 314px;
      padding: 45px 22px;
    }
  }

  &__img {
    z-index: -1;
    max-width: 492px;
    width: 100%;
    height: 100%;
    max-height: 220px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(47%, -16%);

    @media (min-width: 1000px) {
      transform: translate(-40%, -24%);
    }
  }

  &__microstar {
    z-index: 1;
    max-width: 77px;
    max-height: 77px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-100%, 42%);

    @media (min-width: 1200px) {
      z-index: 0;
      transform: translate(-85%, 109%);
      left: 37%;
    }
  }

  &__star {
    z-index: 0;
    max-width: 90px;
    max-height: 90px;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-175%, 19%);

    @media (min-width: 1200px) {
      left: 77%;
      transform: translate(-183%, 171%);
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 76%;
    }

    & div:nth-child(odd) {
      align-self: flex-start;
      z-index: 1;
    }

    & div:nth-child(even) {
      align-self: flex-end;
      z-index: 2;
    }

    & div:nth-child(2) {
      @media (min-width: 1000px) {
        position: absolute;
        left: 31%;
        bottom: -67%;
      }
      @media (min-width: 1400px) {
        left: 31%;
        bottom: -37%;
      }
    }
    & div:nth-child(4) {
      @media (min-width: 1000px) {
        position: absolute;
        left: 95%;
        bottom: -67%;
      }
      @media (min-width: 1400px) {
        position: absolute;
        left: 95%;
        bottom: -55%;
      }
    }
  }

  &__line {
    z-index: -1;
    width: 100%;
    height: 100%;
    max-width: 54px;
    max-height: 200px;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-23%, -81%);
    @media (min-width: 1000px) {
      right: unset;
      left: 26%;
      transform: translate(-31%, -97%);
    }
  }
}
</style>
