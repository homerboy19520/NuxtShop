<template>
  <div class="contacts-page">
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
    <div class="contacts-page__wrapper">
      <MainApp :page-data="PAGE_DATA.contacts"></MainApp>
    </div>
  </div>
</template>

<script>
import MainApp from '@/components/Main'
import PopUp from '@/components/modals/PopUp'
import { MAIN_DATA, PAGE_DATA } from '@/helpers/mocs.js'

import { mapGetters, mapMutations } from 'vuex'
import CityModal from '@/components/modals/CityModal'

export default {
  name: 'contacts',

  data() {
    return {
      MAIN_DATA,
      PAGE_DATA,
    }
  },
  components: { CityModal, PopUp, MainApp },

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

<style lang="scss">
.contacts-page {
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
