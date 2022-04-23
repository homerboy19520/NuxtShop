<template>
  <div class="slide-device" @click="toggle">
    <div class="slide-device__wrapper">
      <img class="slide-device__img" :src="img" alt="technique" />
    </div>
    <h4 class="slide-device__title">{{ title }}</h4>
    <span class="slide-device__number">{{ formatNumber }}</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SlideDevice",

  data() {
    return {
      isShow: false,
    };
  },
  components: {},

  props: {
    index: {
      type: Number,
      required: true,
    },

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

  computed: {
    formatNumber() {
      if (this.index > 9) {
        return this.index;
      } else return "0" + this.index;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-device {
  width: 380px;
  height: 329px;
  position: relative;
  background: #24293e;
  border-radius: 20px;
  padding: 21px 13px 20px 13px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-family: var(--font-halvar);
  cursor: pointer;
  transition: padding 0.2s ease-out;
  overflow: hidden;

  &::after {
    z-index: 0;
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    height: 18px;
    background-color: var(--color-blue);
  }

  &::before {
    z-index: 1;
    position: absolute;
    content: "";
    bottom: 7px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 75px;
    width: 119%;
    height: 100%;
    background-color: var(--color-grey);
  }

  &:hover {
    .slide-device__img {
      transform: scale(1.1);
    }
  }

  &__wrapper {
    z-index: 2;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  &__img {
    max-width: none;
    object-fit: cover;
    width: 360px;
    transition: transform 0.2s ease-out;
  }

  &__discount-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 14px 16px;
  }

  &__title {
    height: 38px;
    overflow: auto;
    font-weight: 700;
    font-size: 24px;
    line-height: 128.34%;
    color: var(--color-white);
    margin-bottom: 5px;
    z-index: 1;
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

  &__number {
    padding: 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    font-family: var(--font-manrope);
    font-weight: 800;
    font-size: 96px;
    line-height: 102px;
    letter-spacing: -0.1em;
    color: #2b324b;

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 26%;
      left: 0;
      top: 100px;
      background-color: var(--color-grey);
    }
  }
}
</style>
