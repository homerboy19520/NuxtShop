<template>
  <div class="repair-page">
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
      <BrandsPopUp
        v-body-scroll-lock="isBrandsPopUp"
        @on-button="onBrands"
        v-if="isBrandsPopUp"
      ></BrandsPopUp>
    </transition>
    <div class="repair-page__wrapper">
      <HeroApp
        class="repair-page__hero"
        :data="MAIN_DATA.deviceHero.hero"
      ></HeroApp>
      <SwiperModal
        modifier="default"
        class="repair-page__swiper main__container"
        :data="MAIN_DATA.swiperDevice"
      ></SwiperModal>
      <BreakingModal
        class="repair-page__breaking main__container"
        :data="MAIN_DATA.breakingContent"
      ></BreakingModal>
      <SwiperModal
        modifier="models"
        class="repair-page__swiper main__container"
        :data="MAIN_DATA.swiperModels"
      ></SwiperModal>
      <BrandsModal class="repair-page__brands"></BrandsModal>
      <div class="main__container">
        <FormModal
          class="repair-page__form-modal"
          :data="MAIN_DATA.formContent.firstModal"
        ></FormModal>
        <GridModal class="repair-page__grid"></GridModal>
        <CalcModal class="repair-page__calc"></CalcModal>
      </div>
      <div class="video-wrapper">
        <VideoModal class="main__container"></VideoModal>
        <LineApp></LineApp>
      </div>
      <div class="main__container">
        <GraphicModal></GraphicModal>
        <SpoilerModal
          class="repair-page__spoiler"
          :data="MAIN_DATA.spoilerContent"
        ></SpoilerModal>
        <SchemeModal class="repair-page__scheme"></SchemeModal>
        <FormModal
          class="repair-page__form-modal second"
          :data="MAIN_DATA.formContent.secondModal"
        ></FormModal>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from "@/components/modals/PopUp";
import { MAIN_DATA, PAGE_DATA } from "@/helpers/mocs.js";
import { mapGetters, mapMutations } from "vuex";
import CityModal from "@/components/modals/CityModal";
import HeroApp from "@/components/Hero";
import SwiperModal from "@/components/modals/SwiperModal";
import BreakingModal from "@/components/modals/device/BreakingModal";
import BrandsModal from "@/components/modals/device/BrandsModal";
import FormModal from "@/components/modals/FormModal";
import GridModal from "@/components/modals/GridModal";
import CalcModal from "@/components/modals/CalcModal";
import VideoModal from "@/components/modals/VideoModal";
import GraphicModal from "@/components/modals/GraphicModal";
import SpoilerModal from "@/components/modals/SpoilerModal";
import SchemeModal from "@/components/modals/SchemeModal";
import LineApp from "@/components/modals/Line";
import BrandsPopUp from "@/components/modals/BrandsPopUp";

export default {
  name: "device-page",

  data() {
    return {
      MAIN_DATA,
      PAGE_DATA,
    };
  },
  components: {
    BrandsPopUp,
    LineApp,
    SchemeModal,
    SpoilerModal,
    GraphicModal,
    VideoModal,
    CalcModal,
    GridModal,
    FormModal,
    BrandsModal,
    BreakingModal,
    SwiperModal,
    HeroApp,
    CityModal,
    PopUp,
  },

  methods: {
    ...mapMutations(["toggleCityModal", "toggleBrandsPopUp"]),
    toggle() {
      this.isPopUpShow = !this.isPopUpShow;
    },

    onButton() {
      this.toggleCityModal();
    },

    onBrands() {
      this.toggleBrandsPopUp();
    },
  },

  computed: {
    ...mapGetters(["isPopUpShow", "isCityModal", "isBrandsPopUp"]),
  },
};
</script>

<style lang="scss">
.repair-page {
  overflow: hidden;

  &__wrapper {
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--color-black);
  }

  &__swiper {
    width: 100%;
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 140px;
    }
  }

  &__hero {
    max-width: 1440px;
    margin-bottom: 220px;

    @media (min-width: 1000px) {
      margin-bottom: 141px;
    }
  }

  &__brands {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 305px;
    }
  }

  &__form-modal {
    margin-bottom: 100px;
    @media (min-width: 1000px) {
      margin-bottom: 225px;
    }

    &.m-second {
      margin-bottom: 174px;

      @media (min-width: 1000px) {
        margin-bottom: 149px;
      }
    }
  }

  &__grid {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 150px;
    }
  }

  &__calc {
    margin-bottom: 157px;

    @media (min-width: 1000px) {
      margin-bottom: 173px;
    }
  }

  &__video {
    margin-bottom: 100px;
    @media (min-width: 1000px) {
      margin-bottom: 192px;
    }
  }

  &__spoiler {
    margin-bottom: 100px;
    @media (min-width: 1000px) {
      margin-bottom: 142px;
    }
  }

  &__scheme {
    margin-bottom: 150px;
    @media (min-width: 1000px) {
      margin-bottom: 300px;
    }
  }

  &__breaking {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 137px;
    }
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
