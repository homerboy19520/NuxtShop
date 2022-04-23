<template>
  <div class="brands main__container">
    <h5 class="brands__title">{{ MAIN_DATA.brandsContent.title }}</h5>
    <ul class="brands__list">
      <li
        class="brands__item"
        v-for="(item, index) in MAIN_DATA.brandsContent.brands"
        :key="index"
      >
        <div class="brands__mask">
          <NuxtLink class="brands__linc" :to="item.linc">
            <IconApp :name="item.device"></IconApp>
          </NuxtLink>
        </div>
      </li>
    </ul>
    <ButtonApp
      @on-button="onButton"
      class="brands_button"
      modifier="secondary"
      >{{ MAIN_DATA.brandsContent.button }}</ButtonApp
    >
  </div>
</template>

<script>
import { MAIN_DATA } from '@/helpers/mocs'
import ButtonApp from '@/components/ui/Button'
import IconApp from '@/components/ui/Icons'
import { mapMutations } from 'vuex'

export default {
  name: 'BrandsModal',
  components: { IconApp, ButtonApp },
  data() {
    return {
      MAIN_DATA,
    }
  },

  methods: {
    ...mapMutations(['toggleBrandsPopUp']),
    onButton() {
      this.toggleBrandsPopUp()
    },
  },
}
</script>

<style lang="scss" scoped>
.brands {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &__title {
    margin-bottom: 40px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 58px;
    text-align: center;
    color: var(--color-white);
    margin-top: 0;

    @media (min-width: 1000px) {
      margin-bottom: 80px;
      font-size: 48px;
      line-height: 58px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    max-width: 428px;

    @media (min-width: 800px) {
      max-width: 800px;
    }
    @media (min-width: 1200px) {
      max-width: none;
      margin-bottom: 37px;
    }
  }

  &__item {
    justify-content: center;
    flex: 1 0 30%;
    max-width: 30%;
    margin-bottom: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      .brands__mask {
        background-color: var(--color-blue);
      }
    }

    @media (min-width: 800px) {
      flex: 1 0 15%;
      margin-bottom: 33px;
    }
  }

  &__img {
    max-width: unset;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__mask {
    width: 100px;
    height: 100px;
    background-color: var(--color-grey);
    border-radius: 50%;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    transition: background-color 0.2s ease-out;
    @media (min-width: 1200px) {
      width: 152px;
      height: 152px;
      margin-bottom: 33px;
    }
  }

  &__linc {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (min-width: 1200px) {
      width: auto;
      height: auto;
    }
  }
}
</style>
