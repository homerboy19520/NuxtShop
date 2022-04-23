<template>
  <div class="header-input" :class="{ 'm-open': isOpen }">
    <div class="header-input__wrapper main__container">
      <div class="header-input__container">
        <div class="input-container">
          <input placeholder="Поиск" type="text" class="header-input__input" />
        </div>
        <IconApp class="header-input__icon" name="search"></IconApp>
      </div>
      <div @click="onClose" class="header-input__close"></div>
    </div>
  </div>
</template>
<script>
import IconApp from "@/components/ui/Icons";
export default {
  name: "HeaderInput",
  components: { IconApp },

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    onClose() {
      this.$emit("on-close");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-input {
  z-index: 5;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  background-color: var(--color-black);
  width: 100%;
  transform: translate(-50%, -100%);
  transition: transform 0.2s ease-out;

  @media (min-width: 600px) {
    max-height: 77px;
  }

  &.m-open {
    transform: translate(-50%, 0);
  }

  &__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__close {
    position: relative;
    min-width: 32px;
    min-height: 32px;
    transition: transform 0.2s ease-out;
    cursor: pointer;
    margin-left: 18px;
    transform: rotate(45deg);

    &:hover {
      transform: rotate(135deg);
    }

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 3px;
      left: 50%;
      top: 50%;
      background-color: var(--color-white);
      border-radius: 20px;
      transform-origin: center;
      transform: translate(-50%, -50%);
    }

    &::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 3px;
      left: 50%;
      top: 50%;
      background-color: var(--color-white);
      border-radius: 20px;
      transform: translate(-50%, -50%);
    }
  }

  &__container {
    position: relative;
    width: 100%;
  }

  &__icon {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-23px, -50%);
    cursor: pointer;
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &__input {
    position: relative;
    border: none;
    width: 100%;
    padding: 8px 21px;
    background-color: transparent;
    outline: none;
    z-index: 1;
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    color: var(--color-white);

    &::placeholder {
      font-family: var(--font-halvar);
      font-weight: 400;
      font-size: 13px;
      line-height: 32px;
      color: var(--color-white);
      transition: opacity 0.2s ease-out;
      opacity: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }
}

.input-container {
  position: relative;
  box-sizing: border-box;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-white);
    border-radius: 23px;
  }

  &::after {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -1px;
    content: "";
    width: 101%;
    height: 50%;
    background-color: var(--color-black);
  }
}
</style>
