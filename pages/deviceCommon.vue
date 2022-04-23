<template>
  <div class="device-common">
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
    <div class="device-common__wrapper">
      <!--      <HeroApp-->
      <!--        class="device-common__hero"-->
      <!--        :data="MAIN_DATA.breakingDeviceHero.hero"-->
      <!--      ></HeroApp>-->
      <!--      <BreakingSpoiler-->
      <!--        class="main__container device-common__breaking-modal"-->
      <!--      ></BreakingSpoiler>-->
      <SwiperModal
        modifier="device"
        class="device-common__swiper main__container"
        :data="MAIN_DATA.swiperDeviceCommon"
      ></SwiperModal>
      <BreakingModal
        class="device-common__breaking main__container"
        :data="MAIN_DATA.breakingContent"
      ></BreakingModal>
      <div class="main__container">
        <FormModal
          class="device-common__form-modal"
          :data="MAIN_DATA.formContent.commonForm"
        ></FormModal>
      </div>
      <div class="main__container">
        <GridModal class="device-common__grid"></GridModal>
        <CalcModal class="device-common__calc"></CalcModal>
      </div>
      <div class="video-wrapper">
        <VideoModal class="main__container"></VideoModal>
        <LineApp></LineApp>
      </div>
      <div class="main__container">
        <GraphicModal></GraphicModal>
        <SpoilerModal
          class="device-common__spoiler"
          :data="MAIN_DATA.spoilerContent"
        ></SpoilerModal>
        <SchemeModal class="device-common__scheme"></SchemeModal>
        <FormModal
          class="device-common__form-modal second"
          :data="MAIN_DATA.formContent.secondModal"
        ></FormModal>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from '@/components/modals/PopUp'
import { MAIN_DATA, PAGE_DATA } from '@/helpers/mocs.js'
import { mapGetters, mapMutations } from 'vuex'
import CityModal from '@/components/modals/CityModal'
// import HeroApp from "@/components/Hero";
import SwiperModal from '@/components/modals/SwiperModal'
import BreakingModal from '@/components/modals/device/BreakingModal'
import FormModal from '@/components/modals/FormModal'
import GridModal from '@/components/modals/GridModal'
import CalcModal from '@/components/modals/CalcModal'
import VideoModal from '@/components/modals/VideoModal'
import GraphicModal from '@/components/modals/GraphicModal'
import SpoilerModal from '@/components/modals/SpoilerModal'
import SchemeModal from '@/components/modals/SchemeModal'
// import BreakingSpoiler from "@/components/BreakingSpoiler";
import LineApp from '@/components/modals/Line'

export default {
  name: 'device-common',

  data() {
    return {
      MAIN_DATA,
      PAGE_DATA,
    }
  },
  components: {
    LineApp,
    // BreakingSpoiler,
    SchemeModal,
    SpoilerModal,
    GraphicModal,
    VideoModal,
    CalcModal,
    GridModal,
    FormModal,
    BreakingModal,
    SwiperModal,

    // HeroApp,
    CityModal,
    PopUp,
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

<style lang="scss">
.device-common {
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
      margin-bottom: 150px;
    }
  }

  &__hero {
    max-width: 1440px;
    margin-bottom: 100px;
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
      margin-bottom: 300px;
    }
  }

  &__breaking-modal {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 150px;
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
