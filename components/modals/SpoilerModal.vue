<template>
  <div class="spoiler">
    <div class="spoiler__wrapper">
      <p class="spoiler__title">{{ data.title }}</p>
      <span class="spoiler__description">{{ data.subtitle }}</span>
    </div>
    <SpoilersApp :spoilers="data"></SpoilersApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs.js";
import SpoilersApp from "@/components/modals/spoiler/Spoilers";
export default {
  name: "SpoilerModal",
  components: { SpoilersApp },
  data() {
    return {
      MAIN_DATA,
    };
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.spoiler {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }

  &__wrapper {
    @media (min-width: 1200px) {
      width: 88%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__title {
    width: 80%;
    font-family: var(--font-halvar);
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 44px;

    @media (min-width: 1000px) {
      width: 100%;
      max-width: 648px;
      font-size: 60px;
      line-height: 64px;
      margin-bottom: 60px;
    }
  }

  &__description {
    margin-bottom: 65px;
    display: block;
    width: 74%;
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 32px;
    }

    @media (min-width: 1200px) {
      width: 230px;
    }
  }
}
</style>
