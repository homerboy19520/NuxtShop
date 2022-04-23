<template>
  <div @click="onButton" class="select" :class="[`m-${modifier}`]">
    <div @click="toggleSelect" class="select__active">
      <div v-if="linc" class="select__container">
        <NuxtLink class="select__linc" :to="linc">
          <slot name="icon-nav"></slot>
          <p>{{ mass[0].content }}</p>
          <div class="select__icon" :class="{ 'm-open': isShow }">
            <slot name="icon"></slot>
          </div>
        </NuxtLink>
      </div>
      <div class="select__container" v-else>
        <slot name="icon-nav"></slot>
        <p>{{ mass[0].content }}</p>
        <div class="select__icon" :class="{ 'm-open': isShow }">
          <slot name="icon"></slot>
        </div>
      </div>
    </div>
    <ul v-if="isList" v-show="isShow" class="select__list">
      <li class="select__item" v-for="(item, index) in mass" :key="index">
        <NuxtLink class="select__linc" :to="item.linc">
          <p>{{ item.content }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectApp',

  props: {
    modifier: {
      type: String,
      default: '',
    },

    mass: {
      type: Array,
      required: true,
    },

    linc: {
      type: String,
    },

    isList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShow: false,
      dataName: 'Города',
    }
  },

  methods: {
    toggleSelect() {
      this.isShow = !this.isShow
    },

    onButton() {
      this.$emit('on-button')
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  background-color: var(--color-str-black);

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-out;
    &.m-open {
      transform: rotate(180deg);
    }
  }

  &__list {
    width: 100%;
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 100%);
    background-color: var(--color-str-black);
    max-height: 167px;
    overflow: auto;

    &:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  &__item {
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__active {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.m-nav {
    font-family: var(--font-manrope);

    & svg {
      width: 8px;
      height: 4px;
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        margin-right: 8px;
      }
    }

    .select__active,
    .select__item {
      font-weight: 500;
      font-size: 15px;
      line-height: 32px;
      color: #686d8b;
      padding: 19px 10px;
      cursor: pointer;
      transition: color 0.2s ease-out;

      &:hover {
        color: #848eff;
      }
    }

    .select__item {
      border-bottom: 1px solid var(--color-blue);
      &:last-child {
        border-bottom: none;
      }
    }
  }

  &.m-footer {
    background-color: transparent;
    white-space: nowrap;
    & svg {
      width: 8px;
      height: 4px;
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        margin-right: 8px;
      }
    }

    .select__active,
    .select__item {
      padding: 19px 10px;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      color: #686d8b;

      &:hover {
        color: #848eff;
      }

      @media (min-width: 1000px) {
        font-size: 12px;
        z-index: 1;
        background-color: var(--color-str-black);
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__item {
      border-bottom: 1px solid var(--color-blue);
      background-color: var(--color-black);
      &:last-child {
        border-bottom: none;
      }
      @media (min-width: 1000px) {
        background-color: var(--color-str-black);
      }
    }
  }

  &.m-cities {
    background-color: transparent;

    & svg {
      width: 8px;
      height: 4px;
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .select__active,
    .select__item {
      padding: 6px;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      color: var(--color-white);

      &:hover {
        color: #848eff;
      }
    }

    .select__item {
      display: none;
    }
  }

  &.m-cities-mobile {
    background-color: transparent;

    & svg {
      width: 8px;
      height: 4px;
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .select__active,
    .select__item {
      font-family: var(--font-manrope);
      font-weight: 500;
      font-size: 20px;
      line-height: 14px;
      color: var(--color-white);
      padding: 6px;
      cursor: pointer;
      transition: color 0.2s ease-out;

      &:hover {
        color: #848eff;
      }
    }

    .select__item {
      display: none;
      border-bottom: 1px solid var(--color-blue);
      background-color: var(--color-black);
      &:last-child {
        border-bottom: none;
      }
    }
  }

  &.m-header {
    background-color: transparent;
    & svg {
      width: 8px;
      height: 4px;
    }

    .select__list {
      display: none;
      padding: 12px 8px 23px 14px;
      max-height: none;
      overflow: unset;
      border-radius: unset;
      height: fit-content;
      overflow: auto;
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        margin-right: 8px;
      }
    }

    .select__active {
      padding: 0;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      display: none;

      &:hover {
        .select__linc {
          color: #848eff;
        }
      }

      @media (min-width: 600px) {
        display: flex;
        padding: 19px 7px;
      }

      @media (min-width: 1000px) {
        font-size: 12px;
        padding: 19px 10px;
        z-index: 1;
        background-color: var(--color-str-black);
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__item {
      position: relative;
      font-weight: 700;
      font-size: 11px;
      line-height: 30px;
      white-space: break-spaces;
      margin-bottom: 15px;
      font-family: var(--font-manrope);
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-blue);
        transform: translate(0, 10px);
        transition: width 0.2s ease-out;
      }

      &:hover {
        & a {
          color: var(--color-blue);
        }

        &::after {
          width: 35%;
        }
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__icon {
      display: none;
    }

    .select__linc {
      color: #686d8b;
      transition: color 0.2s ease-out;
    }
  }

  &.m-header-list {
    background-color: transparent;
    & svg {
      width: 8px;
      height: 4px;
    }

    .select__list {
      display: block;
      padding: 12px 8px 23px 14px;
      max-height: none;
      overflow: unset;
      border-radius: unset;
      height: fit-content;
      overflow: auto;

      @media (min-width: 1000px) {
        max-height: 157px;
      }
    }

    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
        margin-right: 8px;
      }
    }

    .select__active {
      padding: 0;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      font-weight: 500;
      font-size: 13px;
      line-height: 32px;
      color: #686d8b;
      display: none;

      &:hover {
        color: #848eff;
      }

      @media (min-width: 600px) {
        display: flex;
        padding: 19px 7px;
      }

      @media (min-width: 1000px) {
        font-size: 12px;
        padding: 19px 10px;
        z-index: 1;
        background-color: var(--color-str-black);
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__item {
      position: relative;
      font-weight: 700;
      font-size: 11px;
      line-height: 30px;
      white-space: break-spaces;
      margin-bottom: 15px;
      font-family: var(--font-manrope);
      cursor: pointer;

      color: #686d8b;
      transition: color 0.2s ease-out;

      &:last-child {
        margin-bottom: 0;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-blue);
        transform: translate(0, 10px);
        transition: width 0.2s ease-out;
      }

      &:hover {
        .select__linc {
          color: var(--color-blue);
        }

        &::after {
          width: 35%;
        }
      }

      @media (min-width: 1130px) {
        font-size: 13px;
      }
    }

    .select__linc {
      color: #686d8b;
      transition: color 0.2s ease-out;
    }
  }

  &.m-header-mobile {
    background-color: transparent;

    .select__list {
      width: 100%;
      z-index: 1;
      position: unset;
      bottom: unset;
      left: unset;
      transform: none;
      background-color: transparent;
      max-height: none;
    }
    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      padding: 0;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      color: #686d8b;
      margin-bottom: 6px;

      & p {
        margin-right: 16px;
      }

      &:hover {
        .select__linc {
          color: #848eff;
        }
      }

      @media (min-width: 1000px) {
        font-size: 12px;
        padding: 19px 10px;
        z-index: 1;
        background-color: var(--color-str-black);
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__linc {
      color: #686d8b;
      transition: color 0.2s ease-out;
    }
    .select__item {
      font-family: var(--font-manrope);
      font-weight: 700;
      font-size: 15px;
      line-height: 30px;
      color: #686d8b;
      margin-bottom: 12px;

      &:hover {
        & p::after {
          width: 35%;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      & p {
        position: relative;
        width: fit-content;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          background-color: var(--color-blue);
          transition: width 0.2s ease-out;
        }
      }
    }
    .select__icon {
      display: none;
    }
  }

  &.m-header-mobile-list {
    background-color: transparent;

    .select__list {
      width: 100%;
      z-index: 1;
      position: unset;
      bottom: unset;
      left: unset;
      transform: none;
      background-color: transparent;
      max-height: none;
    }
    & svg {
      width: 8px;
      height: 4px;
    }
    .select__active {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      padding: 0;
      cursor: pointer;
      transition: color 0.2s ease-out;
      font-family: var(--font-manrope);
      color: #686d8b;
      margin-bottom: 6px;

      & p {
        margin-right: 16px;
      }

      &:hover {
        .select__linc {
          color: #848eff;
        }
      }

      @media (min-width: 1000px) {
        font-size: 12px;
        padding: 19px 10px;
        z-index: 1;
        background-color: var(--color-str-black);
      }

      @media (min-width: 1130px) {
        font-size: 15px;
      }
    }

    .select__item {
      font-family: var(--font-manrope);
      font-weight: 700;
      font-size: 15px;
      line-height: 30px;
      color: #686d8b;
      margin-bottom: 12px;

      &:hover {
        & p::after {
          width: 35%;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

      & p {
        position: relative;
        width: fit-content;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          background-color: var(--color-blue);
          transition: width 0.2s ease-out;
        }
      }
    }
    .select__linc {
      color: #686d8b;
      transition: color 0.2s ease-out;
    }
  }
}
</style>
