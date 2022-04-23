<template>
  <div class="grid">
    <h3 class="grid__title">Ремонтируем</h3>
    <div class="grid__list">
      <div class="grid__item item-1">
        <img alt="phone" src="@/assets/img/grid/grid-phone.jpg" />
        <span>Смартфоны</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-2">
        <img alt="camera" src="@/assets/img/grid/grid-camera.jpg" />
        <span>Фотоаппараты</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-3">
        <img alt="warzone" src="@/assets/img/grid/grid-warzone.jpg" />
        <span>Телевизоры</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-4">
        <img alt="mac" src="@/assets/img/grid/grid-mac.jpg" />
        <span>Ноутбуки</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-5">
        <img alt="tablet" src="@/assets/img/grid/grid-tablet.png" />
        <span>Планшеты</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-6">
        <img alt="workplace" src="@/assets/img/grid/grid-workplace.jpg" />
        <span>Моноблоки</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-7">
        <img alt="google" src="@/assets/img/grid/grid-google.jpg" />
        <span>Компьютеры</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
      <div class="grid__item item-8">
        <img alt="coffe" src="@/assets/img/grid/grid-coffe.jpg" />
        <span>Кофемашины</span>
        <NuxtLink class="grid__link" to="#"></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridModal',
}
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  height: 100%;
  margin-bottom: 100px;

  @media (min-width: 1000px) {
    margin-bottom: 148px;
  }

  &__title {
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: right;
    color: var(--color-white);
    margin-bottom: 16px;

    @media (min-width: 1000px) {
      text-align: center;
      font-size: 48px;
      line-height: 54px;
      margin-bottom: 60px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 200px 170px 197px 170px 200px;
    box-sizing: border-box;
    grid-gap: 10px;
    justify-content: center;

    @media (min-width: 1000px) {
      grid-gap: 30px;
      grid-template-rows: repeat(3, 254px);
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(72, 58, 236, 0) 0%,
        #483aec 107.9%
      );
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    &:hover {
      &::after {
        opacity: 0.5;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    & span {
      z-index: 1;
      font-family: var(--font-halvar);
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: var(--color-white);
      padding: 17px 20px;

      @media (min-width: 1000px) {
        font-size: 20px;
      }
    }

    &.item-1 {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      align-items: flex-start;

      & span {
        color: black;
        padding: 25px 17px;
      }

      @media (min-width: 1000px) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        align-items: flex-end;
      }
    }
    &.item-2 {
      grid-column: 4 / 6;
      & span {
        padding: 20px 5px;
        width: 100%;
        text-align: center;
      }
      @media (min-width: 1000px) {
        grid-column: 4 /5;
        text-align: start;

        & span {
          width: fit-content;
          padding: 17px 20px;
        }
      }
    }

    &.item-3 {
      grid-column: 1 / 6;

      @media (min-width: 1000px) {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
      }
    }

    &.item-4 {
      grid-column: 1 / 3;
      @media (min-width: 1000px) {
        grid-column: 3 / 4;
      }
    }

    &.item-5 {
      grid-column: 3 / 6;
      justify-content: space-between;

      & span {
        padding: 20px 5px;
        width: 100%;
        text-align: center;
      }

      @media (min-width: 1000px) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }

    &.item-6 {
      grid-column: 1 / 6;

      @media (min-width: 1000px) {
        grid-column: 3 / 5;
        grid-row: 2 / 3;
      }
    }

    &.item-7 {
      grid-column: 1 / 4;

      @media (min-width: 1000px) {
        grid-column: 4 / 5;
      }
    }

    &.item-8 {
      grid-column: 4 / 6;
      @media (min-width: 1000px) {
        grid-column: 1 / 3;
        grid-row: 3 / 4;
      }
    }
  }

  &__link {
    z-index: 1;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
