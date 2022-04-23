<template>
  <div class="mobile-nav" :class="{ 'm-open': isShow }">
    <div class="mobile-nav__wrapper">
      <div class="mobile-nav__box">
        <SelectApp
          @on-button="onSelect"
          class="mobile-nav__select"
          modifier="cities-mobile"
          :mass="HEADER_DATA.cities.mass"
        >
          <template v-slot:icon-nav>
            <IconApp class="mobile-nav__chevron" name="chevron-nav"></IconApp>
          </template>
          ></SelectApp
        >
      </div>
      <ul class="mobile-nav__list mobile">
        <li
          class="mobile-nav__item"
          v-for="(item, index) in this.HEADER_DATA.navContent"
          :key="index"
        >
          <a :href="item.link" class="mobile-nav__link">{{ item.content }}</a>
        </li>
      </ul>
      <div class="mobile-nav__container">
        <SelectApp
          v-for="(item, index) in MAIN_DATA.selectContentMobile"
          :key="index"
          :mass="item.mass"
          :modifier="item.modifier"
          :linc="item.linc"
          :is-list="item.isList"
          ><template v-slot:icon>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="#686D8B" />
            </svg> </template
        ></SelectApp>
      </div>
      <ButtonApp
        @on-button="onButton"
        class="mobile-nav__button"
        modifier="primary-nav"
        >Обратный звонок</ButtonApp
      >
    </div>
  </div>
</template>

<script>
import ButtonApp from "@/components/ui/Button";
import SelectApp from "@/components/ui/Select";
import IconApp from "@/components/ui/Icons";
import { HEADER_DATA } from "@/helpers/mocs.js";
import { MAIN_DATA } from "@/helpers/mocs.js";
import { mapMutations } from "vuex";

export default {
  name: "MobileNav",

  components: {
    ButtonApp,
    SelectApp,
    IconApp,
  },

  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      HEADER_DATA,
      MAIN_DATA,
    };
  },

  methods: {
    ...mapMutations(["togglePopUp"]),
    onSelect() {
      this.$emit("on-select");
      console.log("h1");
    },
    onButton() {
      this.togglePopUp();
    },
  },
};
</script>

<style lang="scss">
.mobile-nav {
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  z-index: 1;
  background-color: var(--color-black);
  transition: left 0.2s ease-out;

  &.m-open {
    left: 0;
  }

  @media (min-width: 600px) {
    display: none;
  }

  &__container {
    position: relative;
    background-color: var(--color-str-black);
    padding: 24px;

    & div {
      width: fit-content;
    }
  }

  &__wrapper {
    padding: 80px 0 55px 0;
  }

  &__select {
    width: fit-content;
  }

  &__list {
    width: 100%;
    padding: 24px;
    & li {
      margin-bottom: 10px;
    }

    & li:last-child {
      margin-bottom: 0;
    }
  }

  &__link {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    position: relative;
    font-family: var(--font-manrope);
    color: var(--color-white);
    transition: color 0.2s ease-out;
    padding: 0;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      opacity: 0;
      height: 1px;
      transform: translate(0, 3px);
      background-color: var(--color-black);
      transition: width 0.2s ease-out, opacity 0.2s ease-out;
    }

    &:hover {
      color: var(--color-blue);

      &::after {
        background-color: var(--color-blue);
        width: 45%;
        opacity: 1;
      }
    }
  }

  &__container {
    background-color: var(--color-str-black);
  }

  &__box {
    padding: 0 24px;
  }

  &__chevron {
    margin-right: 16px;
    transform: rotate(90deg);
    width: 12px;
    height: 8px;
    transition: transform 0.2s ease-out;
  }
}
</style>
