<template>
  <div class="result">
    <div class="result__valid" v-if="pageContent.valid">
      <div class="result__wrapper main__container">
        <span class="result__title"
          >{{ pageContent.title }}<span>{{ pageContent.span }}</span></span
        >
        <ul class="result__list">
          <li
            v-for="(item, index) in pageContent.result"
            :key="index"
            class="result__item"
          >
            <NuxtLink class="result__linc" :to="item.linc"
              >{{ item.text }} ({{ item.number }})</NuxtLink
            >
          </li>
        </ul>
      </div>
      <img class="result__img" :alt="pageContent.alt" :src="pageContent.img" />
    </div>
    <div v-else class="result__empty main__container">
      <p class="result__text">
        {{ MAIN_DATA.emptyResultContent.firstText
        }}<span>"{{ MAIN_DATA.emptyResultContent.searchText }}"</span>
        {{ MAIN_DATA.emptyResultContent.secondText }}
      </p>
      <span class="result__action">
        {{ MAIN_DATA.emptyResultContent.actionText }}</span
      >
      <ul class="result__device-list">
        <li
          class="result__device-item"
          v-for="(item, index) in MAIN_DATA.emptyResultContent.devices"
          :key="index"
        >
          <NuxtLink :to="item.linc">
            <ButtonApp class="result__button" modifier="primary">{{
              item.button
            }}</ButtonApp>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs'
import ButtonApp from '@/components/ui/Button'

export default {
  name: 'ResultModal',
  components: { ButtonApp },
  data() {
    return {
      MAIN_DATA,
    }
  },

  props: {
    pageContent: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.result {
  overflow: hidden;
  margin-bottom: 100px;
  position: relative;
  padding-top: 100px;
  background-color: var(--color-black);
  height: 100%;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 800px) {
    padding-top: 150px;
    padding-bottom: 201px;
  }

  &__valid {
    z-index: 0;
    padding-bottom: 458px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 600px;
    overflow: hidden;

    @media (min-width: 800px) {
      overflow: unset;
      max-width: unset;
      flex-direction: row;
    }
    @media (min-width: 800px) {
      padding-bottom: 0;
    }
  }

  &__wrapper {
    z-index: 1;
    @media (min-width: 800px) {
      padding-right: 0;
    }
  }

  &__title {
    display: block;
    margin-bottom: 46px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 32px;
    color: var(--color-white);
    width: 50%;
    & span {
      position: relative;
      display: block;
      width: fit-content;
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        height: 7px;
        width: 100%;
        background-color: var(--color-blue);
        border-radius: 31px;

        @media (min-width: 1000px) {
          height: 17px;
        }
      }
    }

    @media (min-width: 1000px) {
      margin-bottom: 39px;
      font-size: 60px;
      line-height: 62px;
    }
  }

  &__item {
    cursor: pointer;

    &:hover {
      .result__linc {
        color: var(--color-blue);
      }
    }

    @media (min-width: 800px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  &__linc {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 18px;
    line-height: 44px;
    color: var(--color-white);
    transition: color 0.2s ease-out;
    @media (min-width: 800px) {
      font-size: 24px;
    }
  }

  &__img {
    max-width: unset;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    @media (min-width: 800px) {
      min-width: 861px;
      top: 50%;
      left: 100%;
      transform: translate(-100%, 29px);
    }
    @media (min-width: 800px) {
      top: 0;
    }
  }

  &__empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;

    @media (min-width: 1000px) {
      max-width: 976px;
      padding: 0;
    }
  }

  &__text {
    margin-bottom: 24px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    text-align: center;
    color: var(--color-white);

    & span {
      margin: 0 auto;
      width: fit-content;
      position: relative;
      display: block;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 7px;
        left: 0;
        bottom: -7px;
        background-color: var(--color-blue);
        border-radius: 31px;
        @media (min-width: 1000px) {
          height: 14px;
        }
      }
      @media (min-width: 1000px) {
        display: inline;
      }
    }

    @media (min-width: 1000px) {
      display: inline;
      margin-bottom: 54px;
      font-size: 60px;
      line-height: 56px;
    }
  }

  &__action {
    margin-bottom: 56px;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.055em;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0.055em;
    }
  }

  &__device-list {
    display: flex;
    flex-wrap: wrap;

    & li:nth-child(odd) {
      margin-right: 14px;
    }
    & li {
      flex: 1 0 33%;
      margin-bottom: 14px;
    }

    & li:last-child {
      margin: 0;
    }

    @media (min-width: 1000px) {
      max-width: 880px;
      margin: 0 auto;
      justify-content: flex-start;

      & li {
        max-width: 236px;
        flex: 0;
        margin-bottom: 24px;
        margin-right: 30px;
      }
      & li:nth-child(odd) {
        margin-right: 30px;
      }
      & li:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  &__button.button {
    min-width: 183px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;

    @media (min-width: 600px) {
      padding: 12px 0;
      width: 100%;
      font-family: var(--font-halvar);
      font-weight: 700;
      font-size: 15px;
      line-height: 32px;
    }
    @media (min-width: 1000px) {
      font-size: 15px;
      line-height: 32px;
      max-width: 196px;
      min-width: 196px;
    }
  }
}
</style>
