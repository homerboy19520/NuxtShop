<template>
  <div class="info">
    <p class="info__text">
      <span class="info__span">{{ MAIN_DATA.infoModal.firstSpan }}</span
      ><span>{{ MAIN_DATA.infoModal.secondSpan }}</span
      >{{ MAIN_DATA.infoModal.text }}
    </p>
    <p class="info__description">{{ MAIN_DATA.infoModal.description }}</p>
    <IconApp class="info__dashed" name="info-dashed"></IconApp>
    <IconApp class="info__star" name="info-star"></IconApp>
    <IconApp class="info__star mobile" name="info-mobile-star"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import IconApp from "@/components/ui/Icons";

export default {
  name: "InfoModal",
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin: 0 auto 100px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 0 14px 0 24px;

  @media (min-width: 800px) {
    padding: 0 60px;
  }

  @media (min-width: 1000px) {
    margin: 0 auto 255px auto;
  }

  @media (min-width: 1430px) {
    padding: 0 147px;
  }

  &__text {
    margin-bottom: 73px;
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: var(--color-white);
    max-width: 570px;

    @media (min-width: 1000px) {
      max-width: 916px;
      font-size: 36px;
      line-height: 58px;
      margin-bottom: 0;
    }
  }

  &__span {
    position: relative;
    color: var(--color-blue);
    display: block;
    width: fit-content;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      height: 7px;
      border-radius: 31px;
      width: 100%;
      background-color: var(--color-blue);
    }

    @media (min-width: 1000px) {
      display: inline;
    }
  }

  &__description {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-white);
    max-width: 570px;

    @media (min-width: 1000px) {
      width: 58%;
      max-width: 626px;
      font-size: 24px;
      line-height: 36px;
      position: relative;
      top: -44px;
      left: 389px;
    }
  }

  &__dashed {
    z-index: -1;
    position: absolute;
    min-width: 800px;

    @media (min-width: 1000px) {
      top: -20px;
      right: 0;
    }
  }

  &__star {
    z-index: -1;
    position: absolute;
    display: none;

    @media (min-width: 1000px) {
      display: block;
      right: -229px;
      top: 25px;
    }

    &.mobile {
      display: block;
      right: -118px;
      top: 89%;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(165deg, rgb(17, 21, 35) 40%, transparent);
      }

      @media (min-width: 1000px) {
        display: none;
      }
    }
  }
}
</style>
