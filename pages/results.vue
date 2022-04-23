<template>
  <div class="results-page">
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
    <div class="results-page__wrapper">
      <ResultModal :page-content="MAIN_DATA.resultsContent"></ResultModal>
      <div class="main__container">
        <FormModal :data="MAIN_DATA.formContent.secondModal"></FormModal>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from "@/components/modals/PopUp";
import { MAIN_DATA, PAGE_DATA } from "@/helpers/mocs.js";
import { mapGetters, mapMutations } from "vuex";
import CityModal from "@/components/modals/CityModal";
import ResultModal from "@/components/modals/result-page/ResultModal";
import FormModal from "@/components/modals/FormModal";

export default {
  name: "results-page",
  components: { FormModal, ResultModal, CityModal, PopUp },

  data() {
    return {
      PAGE_DATA,
      MAIN_DATA,
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
.results-page {
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--color-black);
    max-width: 1440px;
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
