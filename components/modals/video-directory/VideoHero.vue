<template>
  <div class="video-hero">
    <p class="video-hero__title">{{ MAIN_DATA.videoContent.title }}</p>
    <p class="video-hero__subtitle">{{ MAIN_DATA.videoContent.subtitle }}</p>
    <ButtonApp
      @on-button="onButton"
      class="video-hero__button"
      modifier="secondary"
      >{{ MAIN_DATA.videoContent.button }}</ButtonApp
    >
  </div>
</template>
<script>
import { MAIN_DATA } from "@/helpers/mocs.js";
import ButtonApp from "@/components/ui/Button";
import { mapMutations } from "vuex";
export default {
  name: "VideoHero",
  components: { ButtonApp },
  data() {
    return {
      MAIN_DATA,
    };
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss" scoped>
.video-hero {
  margin-bottom: 249px;

  @media (min-width: 1000px) {
    margin-bottom: 40px;
  }
  &__title {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 39px;
    color: var(--color-white);
    margin-bottom: 18px;

    @media (min-width: 1000px) {
      margin-bottom: 36px;
      font-size: 60px;
      line-height: 72px;
      max-width: 800px;
    }
  }

  &__subtitle {
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-white);
    margin-bottom: 40px;

    @media (min-width: 1000px) {
      max-width: 640px;
      margin-bottom: 49px;
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__button.m-secondary {
    @media (min-width: 1000px) {
      max-width: 283px;
      font-size: 18px;
      line-height: 68px;
      padding: 0 19px;
    }
  }
}
</style>
