<template>
  <div class="brands-popup">
    <div class="brands-popup__wrapper">
      <span class="brands-popup__description">Все бренды</span>
      <ul class="brands-popup__list">
        <li
          v-for="(item, index) in MAIN_DATA.brandsContent.allBrands"
          :key="index"
          class="brands-popup__item"
        >
          <NuxtLink class="brands-popup__linc" :to="item.linc">
            {{ item.brand }}
          </NuxtLink>
        </li>
      </ul>
      <div @click="onButton" class="brands-popup__button"></div>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs'

export default {
  name: 'BrandsPopUp',

  data() {
    return {
      MAIN_DATA,
    }
  },

  methods: {
    onButton() {
      this.$emit('on-button')
    },
  },
}
</script>

<style lang="scss" scoped>
.brands-popup {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    opacity: 0.5;
  }

  &__wrapper {
    min-width: 328px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    position: relative;
    padding: 60px 30px;
    background-color: var(--color-grey);

    @media (min-width: 600px) {
      padding: 71px 68px;
      width: 80%;
      max-width: 950px;
    }
  }

  &__description {
    width: 194px;
    margin-bottom: 26px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-white);

    @media (min-width: 600px) {
      font-size: 36px;
      line-height: 28px;
      width: 100%;
      margin-bottom: 65px;
    }
  }

  &__button {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 12px;
    transform: rotate(45deg);
    transition: transform 0.2s ease-out;
    cursor: pointer;

    @media (min-width: 600px) {
      padding: 12px;
    }

    &:hover {
      transform: rotate(135deg);
    }

    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      left: 0;
      top: 50%;
      background-color: var(--color-white);
      border-radius: 20px;
    }

    &::before {
      transform: translate(0, -50%);
      width: 100%;
      height: 2px;
    }

    &::after {
      left: 50%;
      top: 50%;
      height: 100%;
      width: 2px;
      transform: translate(-50%, -50%);
    }
  }
  &__list {
    height: 382px;
    overflow: auto;
    width: 100%;
    @media (min-width: 600px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }

  &__item {
    position: relative;
    margin-right: 20px;
    margin-bottom: 34px;
    cursor: pointer;

    @media (min-width: 600px) {
      width: fit-content;
    }

    &:hover {
      &::after {
        width: 60%;
      }
    }

    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 2px;
      background-color: var(--color-blue);
      border-radius: 10px;
      bottom: 0;
      left: 0;
      transform: translate(0, 10px);
      transition: width 0.2s ease-out;
    }

    &:last-child {
      margin-bottom: 0;
    }

    & span {
      font-family: var(--font-manrope);
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 33px;
      color: var(--color-blue);
      margin-right: 12px;

      @media (min-width: 600px) {
        margin-right: 20px;
        font-size: 36px;
      }
    }
  }

  &__linc {
    color: var(--color-white);
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 18px;
    line-height: 14px;

    @media (min-width: 600px) {
      font-size: 24px;
      line-height: 15px;
      width: fit-content;
    }
  }
}
</style>
