<template>
  <div class="main">
    <div class="hero-wrapper">
      <hero-app
        v-if="pageData.heroModal.isShow"
        :data="pageData.heroModal.hero"
      ></hero-app>
      <ContactsHero v-if="pageData.heroContact"></ContactsHero>
    </div>
    <GraphicModal v-if="pageData.termsGraphicModal"></GraphicModal>
    <ContactsModal v-if="pageData.contactsModal"></ContactsModal>
    <FindModal v-if="pageData.findModal.isShow"></FindModal>
    <div class="main__container">
      <GuaranteesModal v-if="pageData.guaranteesModal"></GuaranteesModal>
      <SpoilerModal
        :data="pageData.spoilerGuaranteesModal"
        v-if="pageData.spoilerGuaranteesModal.isShow"
      ></SpoilerModal>
      <TreatmentModal v-if="pageData.treatmentModal"></TreatmentModal>
    </div>
    <InfoModal v-if="pageData.infoModal"></InfoModal>
    <div class="main__container">
      <ActionModal
        :button="pageData.actionModal.button"
        :title="pageData.actionModal.title"
        :subtitle="pageData.actionModal.subtitle"
        v-if="pageData.actionModal.isShow"
      ></ActionModal>
      <SwiperModal
        class="main__swiper"
        modifier="main"
        :data="MAIN_DATA.swiperContent"
        v-if="pageData.swiperModal"
      ></SwiperModal>
      <FormModal
        v-if="pageData.formModal.first"
        :data="MAIN_DATA.formContent.firstModal"
      ></FormModal>
      <DiscountModal v-if="pageData.discountsModal"></DiscountModal>
      <GridModal v-if="pageData.gridModal"></GridModal>
      <FormModal
        class="main__first-modal"
        v-if="pageData.formModal.second"
        :data="MAIN_DATA.formContent.firstModal"
      ></FormModal>
      <FormModal
        class="main__second-modal"
        v-if="pageData.formModal.fourth"
        :data="MAIN_DATA.formContent.secondModal"
      ></FormModal>
    </div>
    <div class="calc-container">
      <CalcModal v-if="pageData.calcModal"></CalcModal>
    </div>
    <div v-if="pageData.videoModal" class="video-wrapper">
      <VideoModal class="main__container"></VideoModal>
      <LineApp></LineApp>
    </div>
    <div class="main__container">
      <GraphicModal v-if="pageData.graphicModal"></GraphicModal>
      <SpoilerModal
        class="main__spoiler"
        :data="pageData.spoilerModal"
        v-if="pageData.spoilerModal.isShow"
      ></SpoilerModal>
      <SchemeModal v-if="pageData.schemeModal"></SchemeModal>
      <FormModal
        v-if="pageData.formModal.third"
        :data="MAIN_DATA.formContent.secondModal"
      ></FormModal>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs.js'
import SwiperModal from '@/components/modals/SwiperModal'
import FormModal from '@/components/modals/FormModal'
import GridModal from '@/components/modals/GridModal'
import CalcModal from '@/components/modals/CalcModal'
import VideoModal from '@/components/modals/VideoModal'
import GraphicModal from '@/components/modals/GraphicModal'
import SpoilerModal from '@/components/modals/SpoilerModal'
import SchemeModal from '@/components/modals/SchemeModal'
import DiscountModal from '@/components/modals/promotion-page/DiscountModal'
import FindModal from '@/components/modals/price-page/FindModal'
import ActionModal from '@/components/modals/ActionModal'
import GuaranteesModal from '@/components/modals/guarantees-page/GuaranteesModal'
import TreatmentModal from '@/components/modals/guarantees-page/TreatmentModal'
import InfoModal from '@/components/modals/guarantees-page/InfoModal'
import ContactsHero from '@/components/modals/contacts-page/ContactsHero'
import ContactsModal from '@/components/modals/contacts-page/ContactsModal'
import LineApp from '@/components/modals/Line'
import HeroApp from '@/components/Hero'
export default {
  data() {
    return {
      MAIN_DATA,
    }
  },
  name: 'MainApp',

  props: {
    pageData: {
      type: Object,
      required: true,
    },
  },
  components: {
    HeroApp,
    LineApp,
    ContactsModal,
    ContactsHero,
    InfoModal,
    TreatmentModal,
    GuaranteesModal,
    ActionModal,
    FindModal,
    DiscountModal,
    SchemeModal,
    SpoilerModal,
    GraphicModal,
    VideoModal,
    CalcModal,
    GridModal,
    FormModal,
    SwiperModal,
  },
}
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  width: 100%;
  background-color: var(--color-black);

  &__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;

    @media (min-width: 800px) {
      padding: 0 60px;
    }

    @media (min-width: 1430px) {
      padding: 0 147px;
    }
  }

  &__swiper {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 352px;
    }
  }

  &__spoiler {
    margin-bottom: 100px;

    @media (min-width: 1000px) {
      margin-bottom: 194px;
    }
  }

  &__second-modal {
    margin-top: 300px;
  }

  &__first-modal {
  }
}
.hero-wrapper {
  position: relative;
  margin-bottom: 100px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1000px) {
    margin-bottom: 134px;
  }
}

.calc-container {
  width: 100%;
  padding: 0 24px;
  @media (min-width: 1000px) {
    padding: 0 94px;
  }
}
.video-wrapper {
  margin-bottom: 100px;
  position: relative;
  max-width: unset;
  width: 100%;

  @media (min-width: 1000px) {
    margin-bottom: 150px;
  }
}
</style>
