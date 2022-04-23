<template>
  <div class="calc-form">
    <div class="calc-form__main">
      <SlideForm
        :active-page="activePage"
        :slideObject="calcContent.slides[activePage]"
        @on-button="onButton"
        @on-submit="onSubmit"
      ></SlideForm>
    </div>
    <div class="calc-form__footer">
      <div class="calc-progress">
        <span class="calc-progress__line" :class="[`m-${activePage}`]"></span>
        <div class="calc-progress__wrapper">
          <IconApp class="calc-progress__icon" name="download"></IconApp>
          <span class="calc-progress__pages">{{ activePage }}/3</span>
        </div>
      </div>
      <div class="calc-nav">
        <button
          @click="onPastButton"
          class="calc-nav__prev"
          :class="{ 'm-error': isPrevButtonError }"
          :disabled="isPrevButtonError"
        >
          <svg
            class="calc-nav__icon"
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.00037 18.2665L10.4078 9.8283L1.45045 1.00051"
              stroke="#4353FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button
          v-if="activePage !== 3"
          @click="onNextButton"
          class="calc-nav__second"
          :class="{ 'm-error': isNextButtonError }"
          :disabled="isNextButtonError"
        >
          Далее
        </button>
        <button
          v-else
          class="calc-nav__second"
          :class="{ 'm-error': isNextButtonError }"
          :disabled="isNextButtonError"
          @click="onSubmit"
        >
          Отправить
        </button>
      </div>
    </div>
    <IconApp class="calc-form__dashed" name="calc-dashed"></IconApp>
  </div>
</template>

<script>
import SlideForm from '@/components/modals/calc/SlideForm'
import IconApp from '~/components/ui/Icons'
import { MAIN_DATA } from '~/helpers/mocs.js'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CalcForm',
  components: { IconApp, SlideForm },
  data() {
    return {
      MAIN_DATA,
      list: 0,
      isError: true,
    }
  },

  methods: {
    ...mapActions(['choseItem', 'submit']),
    ...mapMutations(['toNextPage', 'toPastPage', 'setButton']),
    onNextButton() {
      this.toNextPage()
    },

    onPastButton() {
      this.toPastPage()
    },

    onSubmit() {
      this.submit()
    },

    onButton(index) {
      this.choseItem(index)
    },
  },

  computed: {
    ...mapGetters([
      'isNextButtonError',
      'isPrevButtonError',
      'activePage',
      'calcContent',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.calc-form {
  width: 100%;
  position: relative;
  background-color: var(--color-grey);
  border: 3px solid var(--color-blue);
  border-radius: 20px;
  padding: 24px 13px 20px 13px;
  min-height: 779px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    min-height: 0;
  }

  @media (min-width: 1000px) {
    position: relative;
    border-width: 6px;
    padding: 40px 61px 44px 60px;
    height: 100%;
    max-height: 415px;
  }

  &__main {
    z-index: 1;
  }

  &__dashed {
    z-index: 1;
    transform: translate(100%, 30%) rotate(90deg);
    width: 54px;
    height: 194.66px;
    position: absolute;
    bottom: 0;
    right: 100%;

    @media (min-width: 1000px) {
      z-index: 0;
      bottom: 100%;
      right: 0;
      transform: translate(-100%, 95%) rotate(0deg);
    }
  }
}

.calc-progress {
  margin: 24px 0 53px 0;

  @media (min-width: 1000px) {
    margin: 17px 0 0 0;
  }
  &__line {
    position: relative;
    display: block;
    background-color: #686d8b;
    width: 100%;
    height: 7px;
    border-radius: 63px;
    max-width: 327px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 30%;
      background-color: var(--color-blue);
      border-radius: 63px;
      max-width: 327px;
      transition: width 0.2s ease-out;
    }

    &.m-0 {
      &::after {
        width: 0;
      }
    }
    &.m-1 {
      &::after {
        width: 30%;
      }
    }

    &.m-2 {
      &::after {
        width: 60%;
      }
    }

    &.m-3 {
      &::after {
        width: 100%;
      }
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    animation: loading 1s infinite linear;
    animation-delay: 0s;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &__pages {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 15px;
    line-height: 32px;
    color: var(--color-white);
  }
}

.calc-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1000px) {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 62px 50px 0;
  }

  &__prev {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    width: 49px;
    height: 49px;
    border: 1px solid var(--color-blue);
    border-radius: 50%;
    background-color: var(--color-grey);
    transition: background-color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: var(--color-blue);
      .calc-nav__icon path {
        stroke: var(--color-white);
      }
    }

    &.m-error {
      &:hover {
        background-color: transparent;
      }
      border-color: #686d8b;
      cursor: not-allowed;
      .calc-nav__icon path {
        stroke: #686d8b;
      }
    }
  }

  &__second {
    padding: 7px 25px;
    border: 2px solid var(--color-blue);
    border-radius: 10px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    color: var(--color-white);
    background-color: var(--color-grey);
    transition: background-color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: var(--color-blue);
    }

    &.m-error {
      color: #686d8b;
      border-color: #686d8b;
      cursor: not-allowed;

      &:hover {
        background-color: transparent;
      }
    }
  }

  &__icon {
    transform: rotate(180deg);
    height: 12px;

    & path {
      transition: stroke 0.2s ease-out;
    }
  }
}
</style>
