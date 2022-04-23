<template>
  <div class="nav-wrapper">
    <div class="nav-footer main__container">
      <div class="logo-wrapper">
        <a class="nav-footer__logo"><h1>Альтхаус</h1></a>
        <p>Заявки на сайте принимаем круглосуточно</p>
      </div>
      <div class="nav-footer__box">
        <ul class="nav-footer__list">
          <li class="nav-footer__item menu">Меню:</li>
          <li
            class="nav-footer__item"
            v-for="(item, index) in this.HEADER_DATA.navContent"
            :key="index"
          >
            <a :href="item.link" class="nav-footer__link">{{ item.content }}</a>
          </li>
        </ul>
      </div>
      <div class="city-wrapper">
        <span>Город:</span>
        <div class="city__container">
          <IconApp
            @on-icon="onSearch"
            class="nav-footer__icon"
            name="search"
          ></IconApp>
          <SelectApp
            @on-button="onSelect"
            modifier="cities"
            :mass="HEADER_DATA.cities.mass"
          >
            <template v-slot:icon-nav>
              <IconApp class="nav-footer__chevron" name="chevron-nav"></IconApp>
            </template>
            ></SelectApp
          >
        </div>
      </div>
      <div class="time-wrapper">
        <TimeBlock></TimeBlock>
        <ButtonApp @on-button="onButton" modifier="primary"
          >Обратный звонок</ButtonApp
        >
      </div>
    </div>
    <div class="select-container main__container">
      <span class="select-menu">Техника:</span>
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
import SelectApp from "@/components/ui/Select";
import { HEADER_DATA } from "@/helpers/mocs.js";
import { MAIN_DATA } from "@/helpers/mocs.js";
import IconApp from "@/components/ui/Icons";
import TimeBlock from "@/components/modals/headers/TimeBlock";
import ButtonApp from "@/components/ui/Button";
import { mapMutations } from "vuex";

export default {
  name: "NavFooter",
  data() {
    return {
      HEADER_DATA,
      MAIN_DATA,
    };
  },
  components: { ButtonApp, TimeBlock, IconApp, SelectApp },

  methods: {
    ...mapMutations(["togglePopUp", "toggleCityModal", "toggleFooterInput"]),
    onButton() {
      this.togglePopUp();
    },

    onSelect() {
      this.toggleCityModal();
    },

    onSearch() {
      this.toggleFooterInput();
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  width: 100%;
  background-color: transparent;
  @media (min-width: 600px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 600px) {
    z-index: 1;
    background-color: var(--color-str-black);
  }
}

.nav-footer {
  //width: 75%;
  width: 100%;
  @media (min-width: 600px) {
    width: 100%;
    justify-content: space-evenly;
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
  }

  @media (min-width: 1430px) {
    justify-content: space-between;
  }

  &__logo {
    & h1 {
      width: fit-content;
      position: relative;
      font-family: var(--font-halvar);
      font-weight: 700;
      font-size: 20px;
      line-height: 32px;
      color: var(--color-white);
      margin: 0;

      &::after {
        content: "";
        position: absolute;
        right: -12px;
        top: 0;
        height: 34px;
        width: 1px;
        background-color: #7c7c7c;
      }

      @media (min-width: 1000px) {
        font-size: 18px;
      }
    }
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;

    @media (min-width: 600px) {
      display: none;
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
      margin-right: 17px;
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
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      opacity: 0;
      height: 1px;
      transform: translate(0, 5px);
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
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 68px;
    display: none;
    @media (min-width: 600px) {
      padding-right: 0;
      display: flex;
    }
  }

  &__icon {
    width: 22px;
    height: 22px;
    margin-right: 30px;
    cursor: pointer;
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.5;
    }
  }

  &__chevron {
    width: 8px;
    height: 8px;
    transform: rotate(90deg);
    margin-right: 6px;
  }
}

.select-container {
  display: none;
  @media (min-width: 600px) {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  @media (min-width: 1430px) {
    justify-content: space-between;
  }
}

.time-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    justify-content: flex-end;
    width: fit-content;
  }

  @media (min-width: 900px) {
    justify-content: space-evenly;
  }

  @media (min-width: 1300px) {
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

    @media (min-width: 600px) {
      display: none;
    }

    @media (min-width: 900px) {
      display: block;
    }
  }
}
.select-menu {
  font-family: var(--font-halvar);
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  color: var(--color-white);

  @media (min-width: 600px) {
    display: none;
  }
}

.city-wrapper {
  & span {
    display: block;
    margin-bottom: 25px;
    width: 206px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 600px) {
      display: none;
    }
  }

  .city__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 45px;
    @media (min-width: 600px) {
      margin-bottom: 0;
    }
    &::after {
      content: "";
      width: 1px;
      height: 34px;
      position: absolute;
      transform: translate(0, -50%);
      background-color: #7c7c7c;
      left: 35px;
      top: 50%;
    }
  }

  @media (min-width: 600px) {
    padding: 0;
    order: 3;
  }
}

.logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }

  & p {
    width: 206px;
    font-family: var(--font-halvar);
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: var(--color-white);

    @media (min-width: 600px) {
      display: none;
    }
  }
}
</style>
