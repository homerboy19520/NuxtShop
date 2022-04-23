<template>
  <div class="find" id="find">
    <span class="find__title">{{
      PAGE_DATA.price.findModal.content.title
    }}</span>
    <span class="find__subtitle">{{
      PAGE_DATA.price.findModal.content.subtitle
    }}</span>
    <ul class="find__list">
      <li
        v-for="(item, index) in PAGE_DATA.price.findModal.content.repair"
        :key="index"
        class="find__item"
      >
        <span class="find__repair">{{ ++index }}. {{ item.name }}</span>
        <span class="find__price">{{ item.price }} </span>
      </li>
    </ul>
    <div class="find__wrapper">
      <ButtonApp @on-button="onButton" class="find__form" modifier="secondary"
        >Оставить заявку</ButtonApp
      >
    </div>
  </div>
</template>

<script>
import { PAGE_DATA } from "@/helpers/mocs";
import ButtonApp from "@/components/ui/Button";
import { mapMutations } from "vuex";

export default {
  name: "FindModal",
  components: { ButtonApp },
  data() {
    return {
      PAGE_DATA,
    };
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss" scoped>
.find {
  margin: 0 12px 53px 12px;
  padding: 40px 12px;
  background-color: var(--color-grey);
  border-radius: 10px;

  @media (min-width: 600px) {
    margin: 0 24px 53px 24px;
    padding: 60px 25px;
    border-radius: 40px;
  }

  @media (min-width: 800px) {
    padding: 86px 62px 80px 62px;
  }

  @media (min-width: 1000px) {
    margin: 0 94px 90px 94px;
  }

  @media (min-width: 1252px) {
    margin: 0 auto 90px auto;
    max-width: 1252px;
  }

  &__title {
    display: block;
    margin-bottom: 45px;
    font-family: var(--font-halvar);
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: var(--color-white);
    width: 80%;

    @media (min-width: 1000px) {
      margin-bottom: 15px;
      width: 100%;
      font-size: 60px;
      line-height: 64px;
    }
  }

  &__subtitle {
    display: none;
    margin-bottom: 50px;
    font-family: var(--font-manrope);
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      display: block;
    }
  }

  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
    height: 520px;
    overflow: auto;

    @media (min-width: 1000px) {
      margin-bottom: 51px;
      height: 790px;
    }
  }

  &__item {
    width: 100%;
    position: relative;
    display: flex;
    margin-bottom: 35px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

    &:last-child {
      margin-bottom: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-white);
      border-radius: 20px;
    }

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 22px;
    }

    @media (min-width: 1000px) {
      padding: 0 27px 0 38px;
    }
  }

  &__repair {
    max-width: 461px;
    margin-bottom: 10px;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 18px;
    line-height: normal;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 64px;
      margin-bottom: 3px;
    }
  }

  &__price {
    margin-bottom: 14px;
    font-family: var(--font-manrope);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: normal;
    color: var(--color-white);
    padding-left: 50px;

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 64px;
      margin-bottom: 3px;
    }
  }

  &__form {
    min-width: 275px;
    margin-right: 36px;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-blue);
    border-radius: 50%;
    min-width: 70px;
    min-height: 70px;
    cursor: pointer;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

    &:hover {
      background-color: var(--color-blue);
      .find__chevron {
        & path {
          stroke: var(--color-white);
        }
      }
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
      margin-left: 28px;
    }
  }

  &__chevron {
    transition: stroke 0.2s ease-out;
  }
}
</style>
