<template>
  <div class="breaking">
    <div class="breaking__modal">
      <p class="breaking__title">{{ data.title }}</p>
      <ul class="breaking__list">
        <li
          v-for="(item, index) in data.breakingCards"
          :key="index"
          class="breaking__item"
        >
          <span class="breaking__content">{{ item.title }}</span>
          <span class="breaking__description">{{ item.time }}</span>
          <span class="breaking__price">{{ item.price }}</span>
        </li>
      </ul>
      <div class="breaking__container">
        <ButtonApp
          @on-button="onButton"
          class="breaking__button secondary"
          modifier="secondary"
          >{{ data.secondary }}</ButtonApp
        >
        <ButtonApp
          @on-button="onButton"
          class="breaking__button primary"
          modifier="primary"
          >{{ data.primary }}</ButtonApp
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonApp from "@/components/ui/Button";
import { mapMutations } from "vuex";
export default {
  name: "BreakingModal",
  components: { ButtonApp },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss">
.breaking {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__modal {
    padding: 40px 36px;
    width: 100%;
    background-color: var(--color-grey);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    @media (min-width: 1000px) {
      padding: 70px 68px;
    }
  }

  &__wrapper {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 150px;

    @media (min-width: 1000px) {
      order: 1;
      margin-bottom: 0;
      margin-left: auto;
    }

    & div:first-child {
      transform: rotate(180deg);
    }
  }

  &__title {
    font-family: var(--font-halvar);
    margin-bottom: 39px;
    font-weight: 700;
    font-size: 31px;
    line-height: 40px;
    text-align: center;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 60px;
      line-height: 81px;
    }
  }

  &__list {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 650px;
    overflow: auto;

    @media (min-width: 1000px) {
      margin-bottom: 48px;
      height: 285px;
    }

    & li {
      margin-bottom: 40px;

      @media (min-width: 1000px) {
        margin-bottom: 18px;
      }
    }

    & li:last-child {
      margin: 0;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 24px;
    width: 100%;
    border: 2px solid var(--color-blue);
    box-sizing: border-box;
    border-radius: 10px;

    @media (min-width: 1000px) {
      padding: 19px 60px;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
  }

  &__content {
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: var(--color-white);
    margin-bottom: 13px;

    @media (min-width: 1000px) {
      margin-bottom: 0;
      font-size: 24px;
      line-height: 40px;
    }
  }
  &__description {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    color: var(--color-white);
    margin-bottom: 13px;
    @media (min-width: 1000px) {
      margin-bottom: 0;
      font-size: 18px;
      line-height: 40px;
    }
  }
  &__price {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: var(--color-white);
    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 40px;
    }
  }

  &__content,
  &__description {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 37px;
      height: 1px;
      background-color: #797979;

      @media (min-width: 1000px) {
        display: none;
      }
    }
  }

  &__content {
    @media (min-width: 1000px) {
      flex: 0 0 30%;
    }
  }

  &__description {
    @media (min-width: 1000px) {
      width: 100%;
      max-width: 264px;
      justify-content: center;
      display: flex;
      align-items: center;
      &::before {
        display: none;
        content: "";
        position: absolute;
        left: 100%;
        bottom: 50%;
        transform: translate(0, 50%);
        height: 37px;
        width: 1px;
        background-color: #797979;

        @media (min-width: 1000px) {
          display: block;
        }
      }

      &::after {
        display: block;
        height: 37px;
        width: 1px;
      }
    }
  }

  &__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    border: 2px solid #4353ff;
    box-sizing: border-box;
    border-radius: 50%;
    transition: background-color 0.2s ease-out;

    & svg path {
      stroke: var(--color-blue);
      transition: stroke 0.2s ease-out;
    }

    &:hover {
      & svg path {
        stroke: var(--color-white);
      }
      background-color: var(--color-blue);
    }
  }

  &__button.button {
    max-width: 500px;
    &.secondary.button {
      padding: 11px 14px;
      width: 100%;
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 18px;
      line-height: 40px;

      @media (min-width: 1000px) {
        max-width: unset;
        margin: 0 21px 0 0;
        width: fit-content;
        min-width: 262px;
      }
    }

    &.primary.button {
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      font-family: var(--font-halvar);
      padding: 12px 20px;

      @media (min-width: 600px) {
        font-size: 18px;
        padding: 12px 20px;
        width: 100%;
      }

      @media (min-width: 1000px) {
        width: fit-content;
        max-width: unset;
        min-width: 262px;
      }
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
}
</style>
