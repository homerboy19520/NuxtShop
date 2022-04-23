<template>
  <header class="header">
    <div class="header__wrapper main__container">
      <NavModal
        @on-search="toggleInput"
        @on-select="onButton"
        class="header__content"
      ></NavModal>
      <ButtonApp
        class="header__button"
        :class="{ close: isShow }"
        @on-button="toggleNav"
        modifier="burger"
      ></ButtonApp>
      <MobileNav
        @on-select="onButton"
        v-body-scroll-lock="isShow"
        :isShow="isShow"
      />
    </div>
    <HeaderInput @on-close="toggleInput" :isOpen="isOpen"></HeaderInput>
  </header>
</template>
<script>
import NavModal from "@/components/NavModal";
import ButtonApp from "@/components/ui/Button";
import MobileNav from "@/components/modals/MobileNav";
import HeaderInput from "@/components/modals/HeaderInput";
import { mapMutations } from "vuex";
export default {
  name: "HeaderApp",

  components: { HeaderInput, MobileNav, ButtonApp, NavModal },

  data() {
    return {
      isShow: false,
      isOpen: false,
    };
  },
  methods: {
    ...mapMutations(["toggleCityModal"]),
    toggleNav() {
      this.isShow = !this.isShow;
    },

    toggleInput() {
      this.isOpen = !this.isOpen;
    },

    onButton() {
      this.toggleCityModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: var(--color-black);
  width: 100%;
  top: 0;
  z-index: 1;
  position: sticky;

  @media (min-width: 600px) {
    position: relative;
    top: unset;
    background-color: #030513;
  }

  &__wrapper {
    width: 100%;
    align-items: center;
    display: flex;
  }

  &__content {
    flex: 1;
  }

  &__button {
    &.close {
      padding: 0;
      transform: rotate(45deg);

      &::after {
        transform: rotate(90deg);
        left: 0;
        height: 4px;
      }
    }
  }
}
.city-nav-enter-active {
  transition: opacity 0.2s ease;
}
.city-nav-leave-active {
  transition: opacity 0.2s ease;
}
.city-nav-enter,
.city-nav-leave-to {
  opacity: 0;
}
</style>
