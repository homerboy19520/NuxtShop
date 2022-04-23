<template>
  <div class="treatment">
    <p class="treatment__title">
      {{ MAIN_DATA.treatmentContent.firstSpan
      }}<span>{{ MAIN_DATA.treatmentContent.secondSpan }}</span
      >{{ MAIN_DATA.treatmentContent.thirdSpan }}
    </p>
    <ul class="treatment__list">
      <li
        v-for="(item, index) in MAIN_DATA.treatmentContent.cards"
        :key="index"
        class="treatment__item"
      >
        <div class="treatment__wrapper">
          <span class="treatment__number">0{{ ++index }}</span>
          <picture v-if="isMobile">
            <source
              type="image"
              :srcset="`${item.imgMobilePng1x} 1x, ${item.imgMobilePng2x} 2x`"
            />
            <img
              :src="item.imgMobilePng1x"
              :srcset="`${item.imgMobilePng2x} 2x`"
              alt="background"
            />
          </picture>
          <picture v-else>
            <source
              type="image"
              :srcset="`${item.imgDesktopPng1x} 1x, ${item.imgDesktopPng2x} 2x`"
            />
            <img
              :src="item.imgDesktopPng1x"
              :srcset="`${item.imgDesktopPng2x} 2x`"
              alt="background"
            />
          </picture>
        </div>
        <div class="treatment__container">
          <p class="treatment__text">{{ item.text }}</p>
        </div>
      </li>
    </ul>
    <img
      class="treatment__grid first"
      alt="grid"
      src="@/assets/img/guaranties-page/guarantees-grid.png"
    />
    <img
      class="treatment__grid second"
      alt="grid"
      src="@/assets/img/guaranties-page/guarantees-grid.png"
    />
    <IconApp class="treatment__star small" name="action-star"></IconApp>
    <IconApp class="treatment__star big" name="treatment-star"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs'
import IconApp from '@/components/ui/Icons'

export default {
  name: 'TreatmentModal',
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
      isMobile: null,
    }
  },

  mounted() {
    this.isMobile = document.documentElement.clientWidth < 1200
  },
}
</script>

<style lang="scss">
.treatment {
  position: relative;
  margin-top: 100px;
  margin-bottom: 167px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    margin-top: 150px;
    margin-bottom: 257px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    background: var(--color-blue);
    filter: blur(7px);

    @media (min-width: 1000px) {
      width: 18px;
      height: 18px;
    }
  }

  &::after {
    left: 12%;
    top: 17%;
    @media (min-width: 1000px) {
      left: 59%;
      top: 29%;
    }
  }

  &::before {
    left: 21%;
    top: 105%;
    @media (min-width: 1000px) {
      left: 48%;
      top: 92%;
    }
  }

  &__title {
    z-index: 1;
    margin-bottom: 31px;
    text-align: center;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: var(--color-white);

    & span {
      display: inline;
      color: var(--color-blue);
    }

    @media (min-width: 1000px) {
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 15px;
    }
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    & li:first-child {
      margin-bottom: 64px;
      &::after {
        content: '';
        right: 0;
        top: 27%;
        position: absolute;
        width: 9px;
        height: 9px;
        background: var(--color-blue);
        filter: blur(7px);

        @media (min-width: 1000px) {
          width: 18px;
          height: 18px;
          right: 80%;
          top: 32%;
        }
      }
      @media (min-width: 1000px) {
        margin-bottom: 0;
        margin-top: 17px;
      }
      .treatment__number {
        @media (min-width: 1000px) {
          left: 44px;
        }
      }
    }

    & li:last-child {
      align-self: flex-end;

      .treatment__number {
        order: 1;

        @media (min-width: 1000px) {
          order: unset;
        }
      }

      @media (min-width: 1200px) {
        align-self: flex-start;
      }
    }

    @media (min-width: 1200px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    max-width: 520px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    & img {
      max-width: none;
    }
  }

  &__number {
    position: relative;
    top: 10px;
    font-family: var(--font-halvar);
    font-style: italic;
    font-weight: 700;
    font-size: 96px;
    line-height: 116px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 96px;
      line-height: 158px;
    }
  }

  &__container {
    padding: 40px 15px 40px 22px;
    width: 100%;
    border: 2px solid #4353ff;
    box-sizing: border-box;
    border-radius: 10px;

    @media (min-width: 1000px) {
      padding: 33px 33px 55px 48px;
    }
  }

  &__text {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: var(--color-white);
    @media (min-width: 1000px) {
      font-size: 24px;
    }
  }

  &__star {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 50%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(205deg, rgb(17, 21, 35) 40%, transparent);
    }

    &.small {
      top: 15%;
      transform: scale(0.8);
      left: 26%;
      @media (min-width: 1000px) {
        top: 28%;
        transform: scale(1);
        left: 43%;
      }
    }

    &.big {
      top: 100%;
      left: 46%;
      transform: scale(0.8);
      &::before {
        background: linear-gradient(156deg, #111523 40%, transparent);
      }
      @media (min-width: 1000px) {
        top: 85%;
        left: 63%;
        transform: scale(1);
      }
    }
  }

  &__grid {
    position: absolute;
    max-width: none;

    &.first {
      left: -354px;
      top: 20%;

      @media (min-width: 1000px) {
        left: -18%;
        top: 26%;
      }
    }

    &.second {
      bottom: -6%;
      right: -343px;
      @media (min-width: 1000px) {
        bottom: 10%;
        right: -177px;
      }
    }
  }
}
</style>
