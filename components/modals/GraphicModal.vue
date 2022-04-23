<template>
  <div class="graphic" id="graphic">
    <p class="graphic__title">{{ MAIN_DATA.graphicContent.title }}</p>
    <div class="graphic__wrapper">
      <graphic-card
        v-for="(item, index) in MAIN_DATA.graphicContent.buttons"
        :key="index"
        :title="item.title"
        :hover-title="item.hoverTitle"
        :subtitle="item.hoverSubtitle"
        :icon="item.icon"
      ></graphic-card>
    </div>
    <IconApp class="graphic__background" name="background"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs.js";
import GraphicCard from "@/components/modals/graphic-directory/GraphicCard";
import IconApp from "@/components/ui/Icons";

export default {
  name: "GraphicModal",
  components: { IconApp, GraphicCard },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.graphic {
  position: relative;
  padding-bottom: 276px;

  @media (min-width: 700px) {
    padding-bottom: 378px;
  }

  &__title {
    margin-bottom: 40px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 28px;
    text-align: center;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 70px;
      font-size: 48px;
      line-height: 58px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__background {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 900px;
    z-index: -1;

    @media (min-width: 700px) {
      width: 1440px;
    }
  }
}
</style>
