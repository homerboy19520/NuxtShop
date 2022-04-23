<template>
  <div class="swiper-modal" :class="[`m-${modifier}`]">
    <div class="swiper-modal__wrapper" :class="[`m-${modifier}`]">
      <h4 class="swiper-modal__title">
        {{ data.firstText }} {{ data.secondText }} {{ data.thirdText }}
      </h4>
      <p class="swiper-modal__description">
        {{ data.fourthText }} {{ data.fifthText }} {{ data.sixthText }}
      </p>
    </div>
    <div class="swiper-container">
      <SwiperApp :modifier="modifier" :mass="data.mass"></SwiperApp>
    </div>
    <img
      class="swiper-modal__img"
      alt="grid"
      src="@/assets/img/grid-desctop.png"
    />
    <IconApp class="swiper-modal__dashed" name="swiper-dashed"></IconApp>
  </div>
</template>
<script>
// import "swiper/css";
import SwiperApp from '@/components/Swiper'
import IconApp from '@/components/ui/Icons'
export default {
  name: 'SwiperModal',
  components: { IconApp, SwiperApp },

  props: {
    data: {
      type: Object,
      required: true,
    },

    modifier: {
      type: String,
      required: 'default',
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper-modal {
  position: relative;

  &.m-main {
    @media (min-width: 1000px) {
      padding-bottom: 135px;
    }
  }

  &__title {
    margin-bottom: 24px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 13px;
      font-size: 60px;
      line-height: 81px;
      max-width: 853px;
    }
  }

  &__description {
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__img {
    z-index: -1;
    position: absolute;
    top: -40px;
    left: 73%;
    transform: rotate(90deg);

    @media (min-width: 1000px) {
      transform: rotate(0);
      top: -11px;
      left: 52%;
    }
  }

  &__wrapper {
    margin-bottom: 40px;

    &.m-models {
      @media (min-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 87%;

        & p {
          max-width: 177px;
        }
      }
    }
  }

  &__dashed {
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(50%, 0);
  }
}
</style>
