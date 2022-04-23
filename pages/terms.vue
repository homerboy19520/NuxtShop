<template>
  <div class="terms-page">
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
    <div class="terms-page__wrapper">
      <MainApp :page-data="PAGE_DATA.terms"></MainApp>
    </div>
  </div>
</template>

<script>
import MainApp from "@/components/Main";
import PopUp from "@/components/modals/PopUp";
import { PAGE_DATA } from "@/helpers/mocs.js";
import { mapGetters, mapMutations } from "vuex";
import CityModal from "@/components/modals/CityModal";

export default {
  name: "terms-page",
  components: { CityModal, PopUp, MainApp },

  data() {
    return {
      PAGE_DATA,
    };
  },

  methods: {
    ...mapMutations(["toggleCityModal"]),
    toggle() {
      this.isPopUpShow = !this.isPopUpShow;
    },

    onButton() {
      this.toggleCityModal();
    },
  },

  computed: {
    ...mapGetters(["isPopUpShow", "isCityModal"]),
  },
};
</script>

<style lang="scss">
.terms-page {
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
