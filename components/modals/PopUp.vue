<template>
  <div class="popup">
    <transition name="opacity">
      <div class="popup__form">
        <div v-if="isForm">
          <h4 class="popup__title">{{ POPUP_DATA.formData.title }}</h4>
          <span class="popup__description">{{
            POPUP_DATA.formData.description
          }}</span>
          <FormApp
            @on-submit="onSubmit"
            modifier="popup"
            :button="POPUP_DATA.formData.button"
            :tel="POPUP_DATA.formData.tel"
            :name="POPUP_DATA.formData.name"
          ></FormApp>
          <ButtonApp @on-button="onButton" class="popup__button"
            ><IconApp name="cross"></IconApp>
          </ButtonApp>
        </div>
        <div class="popup__wrapper" v-else>
          <span class="popup__text">{{ POPUP_DATA.finallyContent.text }}</span>
          <ButtonApp
            class="popup__primary"
            @on-button="closePopUp"
            modifier="primary"
            >{{ POPUP_DATA.finallyContent.button }}</ButtonApp
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FormApp from '@/components/ui/Form'
import { POPUP_DATA } from '@/helpers/mocs'
import ButtonApp from '@/components/ui/Button'
import IconApp from '@/components/ui/Icons'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PopUp',
  components: { IconApp, ButtonApp, FormApp },

  data() {
    return {
      POPUP_DATA,
    }
  },

  methods: {
    ...mapMutations(['togglePopUp', 'toggleIsForm', 'closeIsForm']),
    ...mapActions(['submit']),
    onButton() {
      this.togglePopUp()
    },
    onSubmit() {
      this.submit()
    },

    closePopUp() {
      this.closeIsForm()
      this.togglePopUp()
    },
  },

  computed: {
    ...mapGetters(['isForm']),
  },
}
</script>

<style lang="scss" scoped>
.popup {
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }

  &__form {
    position: relative;
    z-index: 1;
    padding: 88px 19px 80px 19px;
    background-color: var(--color-grey);
    border-radius: 20px;
    width: 100%;
    max-width: 421px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__text {
    width: 80%;
    margin-bottom: 30px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    color: var(--color-white);
  }

  &__title {
    margin-bottom: 13px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 30px;
    text-align: center;
    color: var(--color-white);
  }

  &__description {
    display: block;
    width: 80%;
    margin: 0 auto 40px auto;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: var(--color-white);
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    min-width: 19px;
    min-height: 19px;
  }

  &__primary.m-primary.button {
    padding: 20px 40px 25px 40px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
}

.opacity-enter-active {
  transition: opacity 0.2s ease;
}
.opacity-leave-active {
  transition: opacity 0.2s ease;
}
.opacity-enter,
.opacity-leave-to {
  opacity: 0;
}
</style>
