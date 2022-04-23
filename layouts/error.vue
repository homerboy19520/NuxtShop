<template>
  <div class="main-page">
    <transition name="modal">
      <PopUp
        v-body-scroll-lock="isPopUpShow"
        v-if="isPopUpShow"
        @on-button="toggle"
      ></PopUp>
      <CityModal
        v-body-scroll-lock="isCityModal"
        @on-button="onButton"
        v-if="isCityModal"
      ></CityModal>
    </transition>
    <div class="main-page__wrapper">
      <div class="not-found main__container">
        <div class="not-found__wrapper">
          <span class="not-found__text">{{
            MAIN_DATA.notFoundContent.span
          }}</span>
          <p class="not-found__title">{{ MAIN_DATA.notFoundContent.title }}</p>
          <NuxtLink to="/">
            <ButtonApp modifier="secondary">{{
              MAIN_DATA.notFoundContent.button
            }}</ButtonApp>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA, PAGE_DATA } from '@/helpers/mocs'
import ButtonApp from '@/components/ui/Button'
import PopUp from '@/components/modals/PopUp'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'NotFoundComponent',
  components: { PopUp, ButtonApp },
  data() {
    return {
      MAIN_DATA,
      PAGE_DATA,
    }
  },

  methods: {
    ...mapMutations(['toggleCityModal']),
    toggle() {
      this.isPopUpShow = !this.isPopUpShow
    },

    onButton() {
      this.toggleCityModal()
    },
  },

  computed: {
    ...mapGetters(['isPopUpShow', 'isCityModal']),
  },
}
</script>

<style lang="scss" scoped>
.not-found {
  height: 100%;
  width: 100%;
  padding: 100px 0 140px 0;
  justify-content: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-black);
  max-width: none;

  &__wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    max-width: 391px;

    @media (min-width: 1000px) {
      max-width: 620px;
    }

    a {
      width: 100%;
      max-width: 295px;

      & .button.m-secondary {
        width: 100%;
        padding: 13px 24px 17px 24px;
        font-weight: 700;
        font-size: 18px;
        line-height: 39px;
      }
    }
  }

  &__text {
    position: relative;
    margin-bottom: 24px;
    display: inline;
    text-align: center;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 48px;
    line-height: 28px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 60px;
      line-height: 56px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -14px;
      width: 100%;
      height: 7px;
      background-color: var(--color-blue);
      border-radius: 31px;

      @media (min-width: 1000px) {
        height: 14px;
        bottom: -15px;
      }
    }

    @media (min-width: 1000px) {
      margin-bottom: 54px;
    }
  }

  &__title {
    margin-bottom: 40px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
}

.main-page {
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    background-color: var(--color-black);
  }
}

.modal-enter-active {
  transition: opacity 0.2s ease;
}
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
