<template>
  <nav class="nav" :class="{ 'm-open': isShow }">
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="(item, index) in this.HEADER_DATA.navContent"
        :key="index"
      >
        <a :href="item.link" class="nav__link">{{ item.content }}</a>
      </li>
    </ul>
    <ButtonApp class="nav__button" modifier="primary"
      >Обратный звонок</ButtonApp
    >
  </nav>
</template>
<script>
import ButtonApp from "@/components/ui/Button";
import { HEADER_DATA } from "@/helpers/mocs.js";
export default {
  name: "NavBlock",
  data() {
    return {
      HEADER_DATA,
    };
  },
  components: { ButtonApp },

  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100%, 0);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  transition: transform 0.2s ease-out;

  @media (max-width: 600px) {
    &.m-open {
      transform: translate(0, 0);
    }
  }

  @media (min-width: 600px) {
    padding: 0;
    position: inherit;
    transform: none;
    flex-direction: row;
    min-height: 0;
    width: auto;
    background-color: transparent;
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;

    @media (min-width: 600px) {
      display: none;
    }

    @media (min-width: 1200px) {
      display: flex;
      flex-direction: row;
      padding: 0;
      justify-content: flex-start;
    }
  }

  &__item {
    width: 100%;

    @media (min-width: 600px) {
      width: fit-content;
      margin-right: 20px;
      &:last-child {
        margin: 0;
      }
    }
  }

  &__button {
    @media (min-width: 600px) {
      display: none;
    }
  }

  &__link {
    position: relative;
    font-family: var(--font-manrope);
    font-weight: 500;
    border-bottom: 2px solid var(--color-blue);
    font-size: 20px;
    line-height: 32px;
    color: var(--color-white);
    transition: color 0.2s ease-out;
    padding: 25px;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      opacity: 0;
      height: 1px;
      transform: translate(-10px, 0);
      background-color: var(--color-black);
      transition: width 0.2s ease-out, opacity 0.2s ease-out;
    }

    &:hover {
      color: var(--color-blue);

      &::after {
        background-color: var(--color-blue);
        width: 65%;
        opacity: 1;
      }
    }

    @media (min-width: 600px) {
      font-size: 13px;
      line-height: 32px;
      border: none;
      padding: 0;
      width: fit-content;
    }
  }
}
</style>
