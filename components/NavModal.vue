<template>
  <div class="header-wrapper">
    <div class="nav-header">
      <div class="logo-wrapper">
        <NuxtLink to="/">
          <h1 class="nav-header__logo">Альтхаус</h1>
        </NuxtLink>
      </div>
      <div class="nav-header__box">
        <ul class="nav-header__list">
          <li
            class="nav-header__item"
            v-for="(item, index) in this.HEADER_DATA.navContent"
            :key="index"
          >
            <NuxtLink class="nav-header__link" :to="item.link">
              {{ item.content }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="city-wrapper">
        <div class="city__container">
          <IconApp class="nav-header__icon" @on-icon="onSearch" name="search" />
          <SelectApp
            @on-button="openModal"
            class="nav-header__select"
            modifier="cities"
            :mass="HEADER_DATA.cities.mass"
          >
            <template v-slot:icon-nav>
              <IconApp
                :class="{ 'm-open': isShow }"
                class="nav-header__chevron"
                name="chevron-nav"
              ></IconApp>
            </template>
            ></SelectApp
          >
        </div>
      </div>
      <div class="time-wrapper">
        <TimeBlock></TimeBlock>
        <ButtonApp
          @on-button="onButton"
          class="nav-header__button"
          modifier="primary"
          >Обратный звонок</ButtonApp
        >
      </div>
    </div>
    <div class="select-container">
      <SelectApp
        class="select-container__item"
        v-for="(item, index) in MAIN_DATA.selectContent"
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
  </div>
</template>
<script>
import SelectApp from '@/components/ui/Select'
import { HEADER_DATA } from '@/helpers/mocs.js'
import { MAIN_DATA } from '@/helpers/mocs.js'
import IconApp from '@/components/ui/Icons'
import TimeBlock from '@/components/modals/headers/TimeBlock'
import ButtonApp from '@/components/ui/Button'
import { mapMutations } from 'vuex'

export default {
  name: 'NavModal',
  data() {
    return {
      isOpen: false,
      isShow: false,
      HEADER_DATA,
      MAIN_DATA,
    }
  },
  components: { ButtonApp, TimeBlock, IconApp, SelectApp },

  methods: {
    ...mapMutations(['togglePopUp']),
    onSearch() {
      this.$emit('on-search')
    },

    openModal() {
      this.$emit('on-select')
    },

    onButton() {
      this.togglePopUp()
    },
  },
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: relative;
  @media (min-width: 1000px) {
    position: unset;
  }
}
.nav-header {
  align-items: center;
  position: relative;
  background-color: transparent;
  justify-content: space-between;
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;

  @media (min-width: 600px) {
    padding-bottom: 0;
  }

  @media (min-width: 1000px) {
    width: 100%;
    z-index: 1;
  }

  &__logo {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    width: fit-content;
    position: relative;
    font-family: var(--font-manrope);
    color: var(--color-white);
    margin: 0;

    &::after {
      content: '';
      position: absolute;
      right: -20px;
      top: 0;
      height: 34px;
      width: 1px;
      background-color: #7c7c7c;
    }

    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }

  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: fit-content;
    @media (min-width: 600px) {
      max-height: 32px;
      overflow: auto;
      flex-wrap: wrap;
    }

    @media (min-width: 1000px) {
      max-height: none;
      overflow: unset;
      width: 100%;
      flex-direction: row;
      padding: 0;
      justify-content: flex-start;
    }

    @media (min-width: 1300px) {
      display: flex;
    }
  }

  &__item {
    width: 100%;

    @media (min-width: 600px) {
      width: fit-content;
      margin-right: 17px;
    }

    @media (min-width: 1000px) {
      white-space: nowrap;
      &:last-child {
        margin-right: 0;
      }
    }

    &.menu {
      font-family: var(--font-halvar);
      font-weight: 700;
      font-size: 15px;
      line-height: 32px;
      color: var(--color-white);

      @media (min-width: 1000px) {
        display: none;
      }
    }
  }

  &__link {
    font-weight: 800;
    font-size: 13px;
    line-height: 32px;
    position: relative;
    font-family: var(--font-manrope);
    color: var(--color-white);
    transition: color 0.2s ease-out;
    padding: 0;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      opacity: 0;
      height: 1px;
      transform: translate(0px, 4px);
      background-color: var(--color-black);
      transition: width 0.2s ease-out, opacity 0.2s ease-out;
    }

    &:hover {
      color: var(--color-blue);

      &::after {
        background-color: var(--color-blue);
        width: 65%;
        opacity: 1;
      }
    }
  }

  &__box {
    display: none;
    @media (min-width: 600px) {
      display: flex;
      padding-right: 0;
    }

    &.mobile {
      padding: 0;
      display: flex;
      flex-direction: column;
    }
  }

  &__icon {
    width: 22px;
    height: 22px;
    margin-right: 20px;
    transition: opacity 0.2s ease-out;
    cursor: pointer;

    @media (min-width: 500px) {
      margin-right: 30px;
    }
  }

  &__chevron {
    width: 8px;
    height: 8px;
    transform: rotate(90deg);
    margin-right: 6px;
    transition: transform 0.2s ease-out;

    &.m-open {
      transform: rotate(270deg);
    }
  }

  &__button {
    display: none;
    @media (min-width: 870px) {
      display: block;
    }
  }
}

.select-container {
  max-width: 1440px;
  margin: 0 auto;
  white-space: nowrap;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      padding: 0;
    }
  }
}

.time-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 14px;
  white-space: nowrap;

  @media (min-width: 500px) {
    margin-right: 20px;
  }

  @media (min-width: 600px) {
    display: none;
  }

  @media (min-width: 1000px) {
    margin-right: 20px;
    width: fit-content;
  }

  @media (min-width: 1100px) {
    display: flex;
  }

  @media (min-width: 1300px) {
    margin: 0;
    width: auto;
    justify-content: space-between;
  }

  & div {
    width: fit-content;
  }

  & .button {
    width: fit-content;
    padding: 6px 33px;
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color: var(--color-white);
  }
}
.select-menu {
  font-family: var(--font-halvar);
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  color: var(--color-white);

  @media (min-width: 1000px) {
    display: none;
  }
}

.city-wrapper {
  margin-right: 20px;
  order: 1;
  @media (min-width: 1000px) {
    margin-right: 0;
  }

  &.mobile {
    margin: 0;
    @media (min-width: 1000px) {
      display: none;
    }
  }

  & span {
    width: 206px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .city__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    white-space: nowrap;

    & .nav-header__select {
      display: none;
    }

    @media (min-width: 600px) {
      & .nav-header__select {
        display: block;
      }
    }

    @media (min-width: 1000px) {
      padding-bottom: 0;
    }

    &::after {
      content: '';
      width: 1px;
      height: 34px;
      position: absolute;
      background-color: #7c7c7c;
      left: 35px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  @media (min-width: 1000px) {
    padding: 0;
    order: 3;
  }
}

.logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;

  & p {
    width: 206px;
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 13px;
    line-height: 11px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      display: none;
    }
  }
}
</style>
