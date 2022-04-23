<template>
  <div class="contacts-hero">
    <div class="contacts-hero__container main__container">
      <h5 class="contacts-hero__title">
        {{ MAIN_DATA.contactsHeroContent.title }}
      </h5>
      <div class="contacts-hero__wrapper first">
        <span class="contacts-hero__text">{{
          MAIN_DATA.contactsHeroContent.action
        }}</span>
        <div>
          <IconApp
            class="contacts-hero__icon"
            :name="MAIN_DATA.contactsHeroContent.numberIconName"
          ></IconApp>
          <a
            :href="`tel:${MAIN_DATA.contactsHeroContent.link}`"
            class="contacts-hero__description"
            >{{ MAIN_DATA.contactsHeroContent.number }}</a
          >
        </div>
      </div>
      <div class="contacts-hero__wrapper">
        <span class="contacts-hero__text">{{
          MAIN_DATA.contactsHeroContent.text
        }}</span>
        <div>
          <IconApp
            class="contacts-hero__icon"
            :name="MAIN_DATA.contactsHeroContent.timeIconName"
          ></IconApp>
          <span class="contacts-hero__description">{{
            MAIN_DATA.contactsHeroContent.workTime
          }}</span>
        </div>
      </div>
    </div>
    <picture v-if="isMobile">
      <source
        type="image"
        :srcset="`${MAIN_DATA.contactsHeroContent.imgMobilePng1x} 1x, ${MAIN_DATA.contactsHeroContent.imgMobilePng2x} 2x`"
      />
      <img
        class="contacts-hero__img"
        :src="MAIN_DATA.contactsHeroContent.imgMobilePng1x"
        :srcset="`${MAIN_DATA.contactsHeroContent.imgMobilePng2x} 2x`"
        alt="background"
      />
    </picture>
    <picture v-else>
      <source
        type="image"
        :srcset="`${MAIN_DATA.contactsHeroContent.imgDesktopPng1x} 1x, ${MAIN_DATA.contactsHeroContent.imgDesktopPng2x} 2x`"
      />
      <img
        class="contacts-hero__img"
        :src="MAIN_DATA.contactsHeroContent.imgDesktopPng1x"
        :srcset="`${MAIN_DATA.contactsHeroContent.imgDesktopPng2x} 2x`"
        alt="background"
      />
    </picture>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs'
import IconApp from '@/components/ui/Icons'

export default {
  name: 'ContactsHero',
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

<style lang="scss" scoped>
.contacts-hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
  margin-top: 79px;

  @media (min-width: 600px) {
    margin-top: 45px;
  }

  @media (min-width: 700px) {
    align-items: flex-start;
    flex-direction: row;
  }

  @media (min-width: 1000px) {
    min-height: 670px;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 20px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }

  &__container {
    margin: 0;
    width: fit-content;

    @media (min-width: 1000px) {
      padding-right: 0;
    }
  }

  &__title {
    width: fit-content;
    position: relative;
    margin: 0 0 33px 0;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 32px;
    line-height: 28px;
    color: var(--color-white);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -7px;
      width: 100%;
      height: 7px;
      border-radius: 31px;
      background-color: var(--color-blue);

      @media (min-width: 1000px) {
        height: 14px;
        bottom: -10px;
      }
    }

    @media (min-width: 1000px) {
      margin-bottom: 67px;
      font-size: 60px;
      line-height: 68px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    &.first {
      margin-bottom: 24px;

      @media (min-width: 1000px) {
        margin-bottom: 36px;
      }
    }
    @media (min-width: 1000px) {
      max-width: 450px;
    }

    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__text {
    margin-bottom: 4px;
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.055em;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 25px;
      font-size: 36px;
      line-height: 39px;
    }
  }

  &__description {
    padding-left: 12px;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 16px;
    line-height: 128.34%;
    color: var(--color-white);

    @media (min-width: 1000px) {
      padding-left: 24px;
      font-size: 24px;
      line-height: 128.34%;
    }
  }

  &__img {
    align-self: center;
    max-width: unset;
  }

  &__icon {
    width: 16px;
    height: 16px;

    @media (min-width: 1000px) {
      width: 31px;
      height: 31px;
    }
  }
}
</style>
