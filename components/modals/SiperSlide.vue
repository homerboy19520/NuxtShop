<template>
  <div class="swiper-item" :class="{ 'm-checked': isShow }" @click="toggle">
    <div class="swiper-item__wrapper">
      <img class="swiper-item__img" :src="img" alt="technique" />
      <IconApp class="swiper-item__discount-icon" name="discount"></IconApp>
    </div>
    <h4 class="swiper-item__title">{{ title }}</h4>
    <p class="swiper-item__description">{{ description }}</p>
    <transition name="swiper">
      <div v-show="isShow" class="swiper-item__modal">
        <div class="swiper-description">
          <p class="swiper-description__price">от {{ price }}</p>
          <p class="swiper-description__service">{{ service }}</p>
          <span v-if="modifier === 'device'" class="swiper-description__model"
            >Galaxy Note20 Ultra</span
          >
          <div class="swiper-description__container">
            <IconApp class="swiper-description__icon" name="clock"></IconApp>
            <span class="swiper-description__time">от {{ time }} мин</span>
          </div>
          <ButtonApp @on-button="onButton" modifier="primary-swiper"
            >Оставить заявку</ButtonApp
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import IconApp from "@/components/ui/Icons";
import ButtonApp from "@/components/ui/Button";
import { mapMutations } from "vuex";
export default {
  name: "SwiperItem",

  data() {
    return {
      isShow: false,
    };
  },
  components: { ButtonApp, IconApp },

  props: {
    img: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      default: "",
    },
    service: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },

    modifier: {
      type: String,
    },
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    toggle() {
      this.isShow = !this.isShow;
    },

    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-item {
  position: relative;
  max-width: 294px;
  background: #24293e;
  border-radius: 20px;
  padding: 21px 13px 20px 13px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-family: var(--font-halvar);
  cursor: pointer;
  transition: padding 0.2s ease-out;

  &:hover {
    .swiper-item__img {
      transform: scale(1.1);
    }
  }

  &.m-checked {
    padding-top: 13px;
  }

  &__wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 253px;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  &__img {
    height: 100%;
    width: 100%;
    transition: transform 0.2s ease-out;
  }

  &__discount-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 14px 16px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 128.34%;
    color: var(--color-white);
    margin-bottom: 5px;
  }

  &__description {
    font-weight: 400;
    font-size: 15px;
    line-height: 128.34%;
    text-transform: capitalize;
    color: var(--color-white);
  }

  &__modal {
    position: absolute;
    left: 0;
    top: 235px;
    width: 100%;
  }
}

.swiper-description {
  position: relative;
  width: 100%;
  background: #24293e;
  border-radius: 20px;
  padding: 32px 22px 21px 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    //height: 40px;
    height: 80%;
  }

  &::before {
    border: 3px solid #2400ff;
    border-radius: 20px;
  }

  &::after {
    background-color: #24293e;
    top: 20px;
  }

  &__price,
  &__service {
    font-weight: 700;
    font-size: 24px;
    line-height: 128.34%;
    color: var(--color-white);
    z-index: 1;
  }

  &__price {
    font-family: var(--font-manrope);
    margin-bottom: 5px;
    z-index: 1;
  }

  &__service {
    font-family: var(--font-halvar);
    margin-bottom: 7px;
    z-index: 1;
  }

  &__container {
    margin-bottom: 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }

  &__icon {
    margin-right: 12px;
    z-index: 1;
  }

  &__time {
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 18px;
    line-height: 128.34%;
    color: var(--color-white);
    z-index: 1;
  }

  &__model {
    z-index: 1;
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 15px;
    line-height: 128.34%;
    color: var(--color-white);
  }
}
.swiper-enter-active {
  transition: all 0.2s ease;
}
.swiper-leave-active {
  transition: all 0.2s ease-out;
}
.swiper-enter,
.swiper-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
