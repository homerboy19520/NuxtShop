<template>
  <div class="discount-list">
    <h5 class="discount-list__title">{{ MAIN_DATA.discountContent.title }}</h5>
    <ul class="discount-list__list">
      <li
        v-for="(item, index) in MAIN_DATA.discountContent.cards"
        :key="index"
        class="discount-list__item"
        :class="[`m-${item.modifier}`]"
      >
        <span class="discount-list__content">{{ item.title }}</span>
        <p class="discount-list__description">{{ item.text }}</p>
      </li>
    </ul>
    <IconApp class="discount-list__icon" name="discount-dashed"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import IconApp from "@/components/ui/Icons";

export default {
  name: "DiscountList",
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.discount-list {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &__title {
    width: 68%;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: var(--color-white);
    margin: 0 0 40px 0;

    @media (min-width: 1000px) {
      font-size: 60px;
      line-height: 68px;
      margin-bottom: 70px;
      text-align: left;
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto;
    gap: 24px;
    box-sizing: border-box;
  }

  &__item {
    position: relative;
    padding: 40px 36px;
    background-color: var(--color-grey);
    flex: 1 0 0;
    min-width: 264px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: padding 0.2s ease-out;
    cursor: pointer;

    &:hover {
      padding-top: 25px;
    }

    &::after {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      content: "";
      position: absolute;
      width: 99%;
      height: 100%;
      box-sizing: border-box;
      border-radius: 10px;
    }

    &::before {
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      z-index: 1;
      content: "";
      position: absolute;
      width: 100%;
      height: 90%;
      box-sizing: border-box;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border: 8px solid var(--color-grey);
    }

    @media (min-width: 600px) {
      margin-bottom: 0;
      padding: 38px 14px 0 14px;
      height: 100%;
      min-height: 361px;
      max-width: 31%;
      flex: 1 0 31%;
    }

    @media (min-width: 1000px) {
      max-width: 264px;
      min-width: 264px;
    }

    &.m-pink {
      span {
        color: #6270ff;
      }

      &::after {
        border: 3px solid #6270ff;
      }
    }
    &.m-blue {
      span {
        color: #62d9ff;
      }

      &::after {
        border: 3px solid #62d9ff;
      }
    }
    &.m-purple {
      span {
        color: #9e62ff;
      }

      &::after {
        border: 3px solid #9e62ff;
      }
    }
    &.m-green {
      span {
        color: #62ffc6;
      }

      &::after {
        border: 3px solid #62ffc6;
      }
    }
  }

  &__content {
    display: block;
    margin-bottom: 24px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: var(--color-blue);
  }

  &__description {
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    color: var(--color-white);
    height: 200px;
    overflow: auto;
  }

  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 376px;
    height: 48px;
    transform: translate(50%, 54px);
    @media (min-width: 1000px) {
      width: 728px;
      height: 70px;
      transform: translate(156px, -21px);
    }
  }
}
</style>
