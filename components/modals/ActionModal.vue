<template>
  <div class="action">
    <span class="action__title">{{ title }}</span>
    <div class="action__wrapper">
      <span class="action__text">{{ subtitle }}</span>
      <ButtonApp @on-button="onButton" modifier="secondary">{{
        button
      }}</ButtonApp>
    </div>
    <img
      class="action__grid"
      alt="grid"
      src="@/assets/img/price-page/action-grid.png"
    />
    <IconApp class="action__star" name="action-star"></IconApp>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import ButtonApp from "@/components/ui/Button";
import IconApp from "@/components/ui/Icons";
import { mapMutations } from "vuex";

export default {
  name: "ActionModal",

  components: { IconApp, ButtonApp },

  props: {
    title: {
      type: String,
      required: "",
    },

    subtitle: {
      type: String,
      required: "",
    },
    button: {
      type: String,
      required: "",
    },
  },

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
.action {
  margin-bottom: 65px;
  position: relative;
  padding: 134px 0 43px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &::after,
  &::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    width: 9px;
    height: 9px;
    background: #483aec;
    filter: blur(3px);

    @media (min-width: 1000px) {
      width: 14px;
      height: 14px;
      filter: blur(4px);
    }
  }
  &::after {
    left: 0;
    top: 0;

    @media (min-width: 1000px) {
      left: 22%;
      top: -4%;
    }
  }
  &::before {
    bottom: 0;
    left: 40%;
    @media (min-width: 1000px) {
      bottom: 7%;
      left: 46%;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto 74px auto;
    padding-bottom: 75px;
  }

  &__title {
    display: block;
    position: relative;
    margin-bottom: 24px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 0;
      font-size: 60px;
      line-height: 64px;
      max-width: 490px;
    }

    &::after {
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 9px;
      height: 9px;
      background: #483aec;
      filter: blur(3px);
      right: 34%;
      bottom: 0;

      @media (min-width: 1000px) {
        width: 14px;
        height: 14px;
        filter: blur(4px);
        right: 100%;
        bottom: -40%;
      }
    }
  }

  &__wrapper {
    width: 100%;

    @media (min-width: 1000px) {
      max-width: 294px;
    }

    @media (min-width: 1100px) {
      margin: 8px 82px 0 0;
    }
  }

  &__text {
    display: block;
    margin-bottom: 24px;
    font-family: var(--font-manrope);
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    width: 98%;

    @media (min-width: 1000px) {
      margin-bottom: 44px;
      font-size: 24px;
      line-height: 32px;
    }
  }

  &__grid {
    z-index: -1;
    position: absolute;
    min-width: 492px;
    min-height: 220px;
    max-width: 492px;
    max-height: 220px;
    left: -328px;
    top: 38px;
  }

  &__star {
    position: absolute;
    right: 0;
    top: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(205deg, rgb(17, 21, 35) 40%, transparent);
    }

    &::after {
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 9px;
      height: 9px;
      background: #483aec;
      filter: blur(3px);
      left: 14%;
      top: 33%;

      @media (min-width: 1000px) {
        width: 14px;
        height: 14px;
        left: 121%;
        top: -26%;
        filter: blur(4px);
      }
    }

    @media (min-width: 1000px) {
      right: 47%;
      top: 15%;
    }
  }
}
</style>
