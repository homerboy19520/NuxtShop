<template>
  <div class="hero">
    <div class="hero__wrapper main__container">
      <h2 v-if="data.page === 'main'" class="hero__title">
        <span class="hero__action">{{ data.span }}</span>
        {{ data.title }}
      </h2>
      <h2 v-if="data.page === 'device'" class="hero__title">
        <span>{{ data.action }}</span>
        <span class="hero__action"> {{ data.city }}</span>
        <span class="hero__city"> {{ data.model }}</span>
      </h2>
      <h2 v-if="data.page === 'model'" class="hero__title">
        <span>{{ data.action }}</span>
        <span> {{ data.model }}</span>
        <span class="hero__action"> {{ data.index }}</span>
      </h2>
      <h2 v-if="data.page === 'breaking'" class="hero__title">
        <span class="hero__action">{{ data.action }}</span>
        <span> {{ data.device }}</span>
        <span> {{ data.city }}</span>
        <span class="hero__action"> {{ data.index }}</span>
      </h2>
      <h2 v-if="data.page === 'common'" class="hero__title">
        <span>{{ data.action }}</span>
        <span class="hero__action"> {{ data.device }}</span>
        <span> {{ data.city }}</span>
      </h2>
      <p>{{ data.description }}</p>
      <a
        class="hero__linc"
        v-scroll-to="{
          el: '#calc',
          container: 'body',
          duration: 1000,
          easing: 'ease-out',
          force: false,
          offset: -100,
        }"
      >
        <ButtonApp
          v-if="data.modifier === 'main'"
          class="hero__button"
          modifier="secondary"
          >{{ data.button }}</ButtonApp
        >
      </a>
      <ButtonApp
        v-if="data.modifier === 'promotion'"
        @on-button="showFormPopUp"
        class="hero__button"
        modifier="secondary"
        >{{ data.button }}</ButtonApp
      >
      <a
        class="hero__linc"
        v-scroll-to="{
          el: '#find',
          container: 'body',
          duration: 1000,
          easing: 'ease-out',
          force: false,
          offset: -100,
        }"
      >
        <ButtonApp
          v-if="data.modifier === 'price'"
          class="hero__button"
          modifier="secondary"
          >{{ data.button }}</ButtonApp
        ></a
      >
      <a
        class="hero__linc"
        v-scroll-to="{
          el: '#graphic',
          container: 'body',
          duration: 1000,
          easing: 'ease-out',
          force: false,
          offset: -100,
        }"
      >
        <ButtonApp
          v-if="data.modifier === 'terms'"
          class="hero__button"
          modifier="secondary"
          >{{ data.button }}</ButtonApp
        ></a
      >
      <a
        class="hero__linc"
        v-scroll-to="{
          el: '#guarantees',
          container: 'body',
          duration: 1000,
          easing: 'ease-out',
          force: false,
          offset: -100,
        }"
      >
        <ButtonApp
          v-if="data.modifier === 'guarantees'"
          @on-button="toGuarantees"
          class="hero__button"
          modifier="secondary"
          >{{ data.button }}</ButtonApp
        >
      </a>
      <ButtonApp
        v-if="data.modifier === 'device'"
        @on-button="showFormPopUp"
        class="hero__button"
        modifier="secondary"
        >{{ data.button }}</ButtonApp
      >
    </div>
    <picture v-if="isMobile">
      <source
        type="image"
        :srcset="`${data.imgMobilePng1x} 1x, ${data.imgMobilePng2x} 2x`"
      />
      <img
        class="hero__img"
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
        class="hero__img"
        :src="data.imgDesktopPng1x"
        :srcset="`${data.imgDesktopPng2x} 2x`"
        alt="background"
      />
    </picture>
    <ul class="hero-list">
      <li
        class="hero__item"
        v-for="(item, index) in MAIN_DATA.heroIconsNames"
        :key="index"
      >
        <a :href="item.link"><IconApp :name="item.name"> </IconApp></a>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonApp from '@/components/ui/Button'
import { MAIN_DATA } from '@/helpers/mocs.js'
import { mapMutations } from 'vuex'
import IconApp from '@/components/ui/Icons'

export default {
  name: 'HeroApp',
  components: { IconApp, ButtonApp },
  data() {
    return {
      MAIN_DATA,
      isMobile: true,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations(['togglePopUp']),

    showFormPopUp() {
      this.togglePopUp()
    },
  },

  mounted() {
    this.isMobile = document.documentElement.clientWidth < 1200
  },
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (min-width: 600px) {
    min-height: 614px;
    margin-top: 45px;
  }

  @media (min-width: 1000px) {
    margin-top: 79px;
    padding-bottom: 82px;
  }

  &__title {
    position: relative;
    margin-bottom: 17px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: var(--color-white);
    z-index: 1;
    width: 100%;
    max-width: 428px;

    & span {
      display: block;
    }

    @media (min-width: 700px) {
      width: 89%;
    }

    @media (min-width: 1000px) {
      width: 100%;
      max-width: 855px;
      font-size: 60px;
      line-height: 83px;
    }

    & .hero__action {
      position: relative;
      display: block;
      width: fit-content;
      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 7px;
        border-radius: 31px;
        background-color: var(--color-blue);
        transform: translate(0px, 4px);
        width: 100%;

        @media (min-width: 1000px) {
          height: 14px;
        }
      }
    }
  }

  &__wrapper {
    position: relative;
    padding-top: 46px;
    width: 100%;

    @media (min-width: 700px) {
      max-width: 80%;
    }

    @media (min-width: 800px) {
      padding-top: 73px;
    }

    @media (min-width: 1000px) {
      max-width: 905px;
    }
    & p {
      position: relative;
      font-family: var(--font-manrope);
      max-width: 468px;
      z-index: 1;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.055em;
      color: var(--color-white);
      margin-bottom: 23px;

      @media (min-width: 1000px) {
        padding: 0;
        margin-bottom: 42px;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.055em;
        color: var(--color-white);
      }
    }
  }

  &__img {
    position: relative;
    bottom: 60px;
    margin: 0 auto;

    @media (min-width: 700px) {
      position: absolute;
      bottom: unset;
      right: 0;
      top: -40px;
      margin: unset;
    }
    @media (min-width: 1200px) {
      top: 0;
    }
  }

  &__button {
    position: relative;
    z-index: 1;
  }

  &__linc {
    display: block;
    width: 100%;
    height: fit-content;
    margin-bottom: 100px;
    @media (min-width: 500px) {
      width: fit-content;
    }

    @media (min-width: 1000px) {
      margin: 0;
    }
  }
}

.hero-list {
  min-width: 1440px;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: auto;
  width: 100%;
  justify-content: center;
  & li {
    margin-right: 40px;
    width: fit-content;
    transition: transform 0.2s ease-out;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
