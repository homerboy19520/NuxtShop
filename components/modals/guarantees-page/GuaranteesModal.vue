<template>
  <div class="guarantees" id="guarantees">
    <div class="guarantees__card first">
      <div class="guarantees__wrapper first">
        <span class="guarantees__title span">{{
          MAIN_DATA.guaranteesContent.firstCard.span
        }}</span>
        <p class="guarantees__title">
          {{ MAIN_DATA.guaranteesContent.firstCard.title }}
        </p>
        <p class="guarantees__content">
          {{ MAIN_DATA.guaranteesContent.firstCard.text }}
        </p>
      </div>
      <div class="guarantees__star-wrapper">
        <IconApp
          class="guarantees__star first"
          name="guarantees-star"
        ></IconApp>
        <IconApp
          class="guarantees__star second"
          name="guarantees-star"
        ></IconApp>
      </div>
      <div class="guarantees__img-wrapper list">
        <img
          class="guarantees__list"
          :alt="MAIN_DATA.guaranteesContent.firstCard.alt"
          :src="MAIN_DATA.guaranteesContent.firstCard.img"
        />
      </div>
    </div>
    <div class="guarantees__card second">
      <div class="guarantees__wrapper clocks">
        <span class="guarantees__subtitle">{{
          MAIN_DATA.guaranteesContent.secondCard.title
        }}</span>
        <p class="guarantees__text first">
          {{ MAIN_DATA.guaranteesContent.secondCard.text }}
        </p>
      </div>
      <div class="guarantees__img-wrapper clocks">
        <img
          class="guarantees__clocks"
          :alt="MAIN_DATA.guaranteesContent.secondCard.alt"
          :src="MAIN_DATA.guaranteesContent.secondCard.img"
        />
        <IconApp
          class="guarantees__star clock"
          name="guarantees-star"
        ></IconApp>
      </div>
      <span class="guarantees__number">01</span>
    </div>
    <div class="guarantees__card third">
      <div class="guarantees__wrapper">
        <span class="guarantees__subtitle">{{
          MAIN_DATA.guaranteesContent.thirdCard.title
        }}</span>
        <div class="guarantees__container">
          <p class="guarantees__text">
            {{ MAIN_DATA.guaranteesContent.thirdCard.firstParagraph }}
          </p>
          <p class="guarantees__text">
            {{ MAIN_DATA.guaranteesContent.thirdCard.secondParagraph }}
          </p>
        </div>
        <span class="guarantees__number">02</span>
      </div>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import IconApp from "@/components/ui/Icons";

export default {
  name: "GuaranteesModal",
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.guarantees {
  display: flex;
  flex-direction: column;
  margin-bottom: 131px;

  @media (min-width: 1000px) {
    margin-bottom: 180px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }

  &__wrapper {
    z-index: 1;
    max-width: 568px;

    & p:first-child {
      margin: 0;
    }

    & p:first-child {
      margin-bottom: 24px;

      @media (min-width: 1000px) {
        margin-bottom: 20px;
      }
    }

    &.first {
      @media (min-width: 1000px) {
        width: 60%;
      }

      @media (min-width: 1200px) {
        width: 100%;
      }
    }

    &.clocks {
      max-width: 404px;
    }
  }

  &__container {
    & p {
      margin-bottom: 24px;

      @media (min-width: 1000px) {
        margin-bottom: 20px;
      }
    }
    & p:last-child {
      margin-bottom: 0;
    }
  }

  &__card {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 40px 24px 0 24px;
    background-color: var(--color-grey);
    border-radius: 10px;
    margin-bottom: 40px;
    overflow: hidden;

    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
    }

    &.first {
      @media (min-width: 1000px) {
        flex: 1 0 100%;
        overflow: unset;
        position: relative;
        padding: 60px;
        margin-bottom: 0;
      }
    }

    &.second {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 52px;
        bottom: 0;
        left: 0;
        border: 3px solid var(--color-blue);
        z-index: 2;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-color: transparent;
      }

      @media (min-width: 1000px) {
        padding: 32px 35px;
        min-height: 361px;
        flex: 1 0 40%;
      }
    }

    &.third {
      padding: 40px 24px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 52px;
        bottom: 0;
        left: 0;
        border: 3px solid #62d9ff;
        z-index: 2;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-color: transparent;
      }
      @media (min-width: 1000px) {
        padding: 32px 35px;
        min-height: 361px;
        flex: 1 0 40%;
      }

      & .guarantees__number {
        z-index: -1;
      }
    }
  }

  &__title {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    color: var(--color-white);
    margin-bottom: 24px;

    @media (min-width: 1000px) {
      margin-bottom: 36px;
      font-size: 48px;
      line-height: 45px;
    }

    &.span {
      color: var(--color-blue);
      margin-bottom: 0;
    }
  }

  &__subtitle {
    margin-bottom: 24px;
    display: block;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 17px;
      width: 67%;
    }
  }

  &__text {
    font-family: var(--font-manrope);
    font-weight: 400;
    color: var(--color-white);
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 1000px) {
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 20px;
    }

    &.first {
      @media (min-width: 1000px) {
        margin-bottom: 154px;
      }
    }
  }

  &__content {
    margin-bottom: 53px;
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 600px) {
      margin-bottom: 0;
    }

    @media (min-width: 1000px) {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 0;
    }
  }

  &__img-wrapper {
    position: relative;

    &.list {
      @media (min-width: 600px) {
        margin: 0 auto;
      }

      @media (min-width: 1000px) {
        position: absolute;
        right: 6px;
        bottom: 0;
        margin: unset;
      }
    }

    &.clocks {
      height: 251px;
      @media (min-width: 1000px) {
        height: unset;
        position: absolute;
        right: 0;
        bottom: -113px;
      }
    }
  }

  &__star-wrapper {
    overflow: hidden;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__star {
    position: absolute;
    &.first {
      left: -25px;
      bottom: -48px;
      @media (min-width: 1000px) {
        left: unset;
        bottom: unset;
        right: 252px;
        top: 132px;
      }
    }

    &.second {
      left: -22px;
      bottom: 135px;
      transform: scale(0.8) rotate(351deg);
      @media (min-width: 1000px) {
        left: unset;
        bottom: unset;
        right: 250px;
        top: -87px;
      }
    }

    &.clock {
      left: -4%;
      bottom: -41%;
      transform: rotate(351deg);
      @media (min-width: 1000px) {
        left: -44%;
        bottom: 0;
      }
    }
  }

  &__list {
    z-index: 1;
    position: relative;
    max-width: 368px;
    max-height: 408px;
    left: 29%;

    @media (min-width: 800px) {
      left: 0;
    }
  }

  &__clocks {
    z-index: 1;
    max-width: none;
    width: 307px;
    left: 52%;
    top: 49px;
    position: relative;

    @media (min-width: 1000px) {
      left: unset;
      top: unset;
    }
  }

  &__number {
    position: absolute;
    top: -16px;
    left: 9px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 96px;
    line-height: 158px;
    color: #2c324e;

    @media (min-width: 1000px) {
      left: 17px;
      top: -10px;
    }
  }
}
</style>
