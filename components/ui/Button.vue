<template>
  <button
    :disabled="isDisabled"
    class="button"
    :class="[`m-${modifier}`]"
    @click="onButton"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonApp",

  data() {
    return {};
  },

  props: {
    modifier: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onButton() {
      this.$emit("on-button");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 0;

  &.m-primary {
    padding: 15px;
    border: 2px solid var(--color-blue);
    box-sizing: border-box;
    border-radius: 10px;
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: var(--color-white);
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
    width: 100%;

    &:hover {
      background-color: var(--color-blue);
      border-color: transparent;
    }

    @media (min-width: 600px) {
      font-size: 15px;
      padding: 4px 15px;
      width: fit-content;
    }
  }

  &.m-primary-nav {
    width: fit-content;
    margin: 24px 0 0 24px;
    padding: 12px 34px;
    border: 2px solid var(--color-blue);
    box-sizing: border-box;
    border-radius: 10px;
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: var(--color-white);
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

    &:hover {
      background-color: var(--color-blue);
      border-color: transparent;
    }

    @media (min-width: 600px) {
      font-size: 15px;
      padding: 4px 15px;
      width: fit-content;
    }
  }

  &.m-primary-swiper {
    padding: 9px 3px;
    border: 1px solid var(--color-white);
    border-radius: 10px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: var(--color-white);
    transition: background-color 0.2s ease-out, color 0.2s ease-out,
      border-color 0.2s ease-out;
    max-width: 197px;
    width: 100%;
    z-index: 1;

    &:hover {
      background-color: var(--color-white);
      color: #161a27;
      border-color: transparent;
    }
  }

  &.m-primary-calc {
    margin: 0 0 15px 0;
    padding: 12px;
    width: 100%;
    border: 1px solid var(--color-white);
    border-radius: 10px;
    transition: background-color 0.2s ease-out, color 0.2s ease-out,
      border-color 0.2s ease-out;
    z-index: 1;
    font-family: var(--font-halvar);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: var(--color-white);

    &.m-active {
      background-color: var(--color-blue);
      color: var(--color-white);
      border-color: var(--color-blue);
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
      border-color: var(--color-blue);
    }

    @media (min-width: 680px) {
      width: 100%;
      max-width: 230px;
      margin: 0 15px 15px 0;
    }

    @media (min-width: 1000px) {
      width: 100%;
      max-width: 209px;
      margin-right: 30px;
    }
  }

  &.m-secondary {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 18px;
    line-height: 68px;
    color: var(--color-white);
    background-color: var(--color-blue);
    border-radius: 10px;
    border: 1px solid transparent;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;
    width: 100%;

    @media (min-width: 500px) {
      padding: 0 75px;
      width: fit-content;
    }

    @media (min-width: 800px) {
      padding: 0 40px;
    }

    &:hover {
      background-color: transparent;
      border-color: var(--color-blue);
    }
  }

  &.m-burger {
    max-height: 19.5px;
    order: 2;
    display: block;
    z-index: 4;
    position: relative;
    width: 46px;
    padding: 10px 0;
    border-top: 2px solid var(--color-white);
    border-bottom: 2px solid var(--color-white);
    transition: padding 0.2s ease-out, transform 0.2s ease-out;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 2px;
      background-color: var(--color-white);
      transition: transform 0.2s ease-out, left 0.2s ease-out,
        height 0.2s ease-out;
    }

    @media (min-width: 600px) {
      display: none;
    }
  }

  &.m-search {
    position: relative;
    padding: 10px;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: var(--color-white);
    }
  }
}
</style>
