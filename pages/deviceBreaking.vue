<template>
  <div class="device-breaking">
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
    <div class="device-breaking__wrapper">
      <HeroApp
        class="device-breaking__hero"
        :data="MAIN_DATA.breakingDeviceHero.hero"
      ></HeroApp>
      <SwiperModal
        modifier="device"
        class="device-breaking__swiper main__container"
        :data="MAIN_DATA.swiperBreakingModal"
      ></SwiperModal>
      <BreakingModal
        class="device-breaking__breaking main__container"
        :data="MAIN_DATA.breakingContent"
      ></BreakingModal>
      <SwiperModal
        modifier="models"
        class="device-breaking__swiper main__container"
        :data="MAIN_DATA.swiperModelsPage"
      ></SwiperModal>
      <div class="main__container">
        <FormModal
          class="device-breaking__form-modal"
          :data="MAIN_DATA.formContent.firstModal"
        ></FormModal>
        <GridModal class="device-breaking__grid"></GridModal>
        <CalcModal class="device-breaking__calc"></CalcModal>
      </div>
      <div class="video-wrapper">
        <VideoModal class="main__container"></VideoModal>
        <LineApp></LineApp>
      </div>
      <div class="main__container">
        <GraphicModal></GraphicModal>
        <SpoilerModal
          class="device-breaking__spoiler"
          :data="MAIN_DATA.spoilerContent"
        ></SpoilerModal>
        <SchemeModal class="device-breaking__scheme"></SchemeModal>
        <FormModal
          class="device-breaking__form-modal second"
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
import FormModal from "@/components/modals/FormModal";
import GridModal from "@/components/modals/GridModal";
import CalcModal from "@/components/modals/CalcModal";
import VideoModal from "@/components/modals/VideoModal";
import GraphicModal from "@/components/modals/GraphicModal";
import SpoilerModal from "@/components/modals/SpoilerModal";
import SchemeModal from "@/components/modals/SchemeModal";
import LineApp from "@/components/modals/Line";

export default {
  name: "device-breaking",

  data() {
    return {
      MAIN_DATA,
      PAGE_DATA,
    };
  },
  components: {
    LineApp,
    SchemeModal,
    SpoilerModal,
    GraphicModal,
    VideoModal,
    CalcModal,
    GridModal,
    FormModal,
    BreakingModal,
    SwiperModal,
    HeroApp,
    CityModal,
    PopUp,
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
.device-breaking {
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
      margin-bottom: 139px;
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
