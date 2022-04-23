<template>
  <div class="spoilers" :class="[`m-${modifier}`]">
    <ul class="spoilers__list">
      <li
        v-for="(item, index) in spoilers.spoilers"
        :key="index"
        class="spoilers__item"
        @click="check(index)"
      >
        <div class="spoilers__header">
          <p v-if="modifier === 'breaking'" class="spoilers__title">
            <span>{{ item.title }}</span>
          </p>
          <p v-else class="spoilers__title">
            {{ listNumber(index) }}. <span>{{ item.title }}</span>
          </p>
          <div
            class="spoilers__icon"
            :class="{ 'm-closed': item.isShow }"
          ></div>
        </div>
        <div v-if="item.isShow" class="spoilers__main">
          <p class="spoilers__description">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs.js";
export default {
  name: "SpoilersApp",

  data() {
    return {
      MAIN_DATA,
    };
  },

  props: {
    spoilers: {
      type: Object,
    },

    modifier: {
      type: String,
      default: "default",
    },
  },

  methods: {
    check(indexSpoiler) {
      this.spoilers.spoilers.forEach((item, index) => {
        indexSpoiler !== index
          ? (item.isShow = false)
          : (item.isShow = !item.isShow);
      });
    },

    listNumber(index) {
      return ++index;
    },
  },
};
</script>

<style lang="scss">
.spoilers {
  font-family: var(--font-halvar);

  &.m-breaking {
    width: 100%;
    .spoilers__list {
    }

    .spoilers__item {
      background-color: var(--color-grey);
      border-radius: 10px;
      padding: 28px 20px;

      &::after {
        display: none;
      }

      @media (min-width: 1000px) {
        padding: 25px 42px 31px 42px;
      }
    }

    .spoilers__header {
    }

    .spoilers__title {
      font-family: var(--font-manrope);
      font-weight: 600;
      font-size: 18px;
      line-height: 32px;
      color: var(--color-white);

      @media (min-width: 1000px) {
        font-size: 20px;
        line-height: 32px;
      }
    }

    .spoilers__description {
      font-family: var(--font-manrope);
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--color-white);

      &::after {
        background-color: var(--color-blue);
        height: 3px;
      }
    }

    .spoilers__icon {
      @media (min-width: 1000px) {
        min-width: unset;
        min-height: unset;
        width: 20px;
        height: 20px;
        &::after {
          height: 2px;
          border-radius: 0;
        }

        &::before {
          width: 2px;
          border-radius: 0;
        }
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__item {
    position: relative;
    padding-bottom: 26px;
    margin-bottom: 26px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    cursor: pointer;

    &:hover {
      .spoilers__title span::after {
        width: 100%;
      }
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      background-color: var(--color-white);
      border-radius: 10px;
      width: 100%;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 36px;
      line-height: 60px;
    }

    & span {
      position: relative;
      &::after {
        content: "";
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 7px;
        border-radius: 31px;
        background-color: var(--color-blue);
        transform: translate(0px, 4px);
        width: 0;
        transition: width 0.4s ease-out;
      }
    }
  }

  &__description {
    font-family: var(--font-manrope);
    position: relative;
    margin-top: 27px;
    padding-top: 27px;
    color: var(--color-white);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 4px;
      background-color: var(--color-white);
      border-radius: 10px;
      width: 100%;
    }

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__icon {
    position: relative;
    min-width: 20px;
    min-height: 20px;
    transition: transform 0.2s ease-out;
    margin-right: 8px;

    @media (min-width: 1000px) {
      margin-right: 38px;
      min-width: 30px;
      min-height: 30px;
    }

    &:after,
    &:before {
      content: "";
      position: absolute;
      background-color: var(--color-white);
      border-radius: 50px;
    }

    &:after {
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 100%;
      height: 2px;
      @media (min-width: 1000px) {
        height: 5px;
      }
    }

    &:before {
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      height: 100%;
      width: 2px;

      @media (min-width: 1000px) {
        width: 5px;
      }
    }

    &.m-closed {
      transform: rotate(135deg);
    }
  }
}
</style>
