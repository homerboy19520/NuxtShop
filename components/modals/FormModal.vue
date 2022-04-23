<template>
  <div class="form-modal">
    <div class="form-modal__container">
      <h2 class="form-modal__title">
        <span>{{ data.firstText }}</span>
        <span>{{ data.secondText }}</span>
        <span>{{ data.thirdText }}</span>
      </h2>
      <p class="form-modal__description">
        {{ data.description }}
      </p>
      <FormApp
        :name="data.namePlaceholder"
        :tel="data.telPlaceholder"
        :button="data.button"
        @on-submit="onSubmit"
      ></FormApp>
      <div class="form-modal__wrapper">
        <TermApp
          v-for="(item, index) in data.terms"
          :key="index"
          :text="item.text"
        ></TermApp>
      </div>
    </div>
    <img
      src="@/assets/img/guaranties-page/guarantees-grid.png"
      class="form-modal__grid"
      alt="grid"
      v-if="data.modifier === 'first'"
    />
    <picture v-if="isMobile">
      <source
        type="image"
        :srcset="`${data.imgMobilePng1x} 1x, ${data.imgMobilePng2x} 2x`"
      />
      <img
        class="form-modal__img"
        :src="data.imgMobilePng1x"
        :srcset="`${data.imgMobilePng2x} 2x`"
        alt="background"
      />
    </picture>
    <picture v-else>
      <source
        type="image"
        :srcset="`${data.imgDesktopPng1x} 1x, ${data.imgDesktopPng2x} 2x`"
      />
      <img
        class="form-modal__img"
        :src="data.imgDesktopPng1x"
        :srcset="`${data.imgDesktopPng2x} 2x`"
        alt="background"
      />
    </picture>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs.js'
import FormApp from '@/components/ui/Form'
import TermApp from '@/components/ui/Term'
import { mapActions } from 'vuex'
export default {
  name: 'FormModal',
  components: { TermApp, FormApp },
  data() {
    return {
      MAIN_DATA,
      isMobile: null,
    }
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(['submit']),
    onSubmit() {
      this.submit()
    },
  },

  mounted() {
    this.isMobile = document.documentElement.clientWidth < 1200
  },
}
</script>

<style lang="scss" scoped>
.form-modal {
  position: relative;
  margin-bottom: 114px;

  @media (min-width: 1000px) {
    margin-bottom: 195px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &__container {
    z-index: 1;
    & span {
      display: block;
    }
    @media (min-width: 1000px) {
      max-width: 691px;
      padding: 0;
    }
  }

  &__title {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: var(--color-white);
    margin-bottom: 24px;

    @media (min-width: 1000px) {
      font-size: 60px;
      line-height: 66px;
      margin-bottom: 28px;
      text-align: left;
    }
  }

  &__description {
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 20px;
      line-height: 32px;
      text-align: left;
    }
  }

  &__name,
  &__tel {
    font-family: var(--font-manrope);
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    color: var(--color-str-black);
  }

  &__wrapper {
    margin-bottom: 50px;
    & div {
      margin-bottom: 17px;
      @media (min-width: 1000px) {
        margin-bottom: 4px;
      }
    }

    & div:last-child {
      margin-bottom: 0;
    }
  }

  &__img {
    max-width: unset;
    margin: 0 auto;
    position: relative;

    @media (min-width: 1000px) {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }

    @media (min-width: 1200px) {
      transform: translate(-25%, -30%);
    }
  }

  &__grid {
    position: absolute;
    max-width: none;
    left: 50%;
    top: 100%;
    z-index: -1;
    transform: translate(-50%, -200%);

    @media (min-width: 1000px) {
      transform: translate(25%, -50%);
      left: 0;
      top: 0;
    }
  }
}
</style>
