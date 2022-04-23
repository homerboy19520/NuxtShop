<template>
  <div class="calc" id="calc">
    <div
      class="calc__container"
      :style="{
        'background-image':
          'url(' + require('@/assets/img/calc/pointers.png') + ')',
      }"
    >
      <h3 class="calc__title">Рассчитать стоимость ремонта</h3>
      <span class="calc__description"
        >Узнайте стоимость ремонта за 1 минуту!</span
      >
      <CalcForm></CalcForm>
      <IconApp class="calc__img" alt="star" name="calc-star"></IconApp>
    </div>
  </div>
</template>

<script>
import CalcForm from '@/components/modals/calc/CalcForm'
import IconApp from '@/components/ui/Icons'
export default {
  name: 'CalcModal',
  components: { IconApp, CalcForm },
}
</script>

<style lang="scss" scoped>
.calc {
  margin-bottom: 157px;
  width: 100%;

  @media (min-width: 1000px) {
    margin-bottom: 207px;
  }
  &__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    border-radius: 10px;
    padding: 50px 16px 28px 16px;
    background-size: 454px;
    background-color: var(--color-grey);
    position: relative;

    @media (min-width: 1000px) {
      padding: 80px 53px;
      position: relative;
      border-radius: 42px;
    }
  }
  &__title {
    width: 80%;
    font-family: var(--font-halvar);
    font-weight: 700;
    color: var(--color-white);
    margin-bottom: 15px;
    font-size: 36px;
    line-height: 44px;

    @media (min-width: 1000px) {
      width: 69%;
      font-size: 60px;
      line-height: 64px;
      margin-bottom: 60px;
    }
  }

  &__description {
    font-family: var(--font-manrope);
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: var(--color-white);
    margin-bottom: 29px;
    display: block;

    @media (min-width: 1000px) {
      position: absolute;
      top: 0;
      right: 0;
      padding: 139px 71px;
      font-size: 24px;
      line-height: 32px;
      max-width: 419px;
      margin-bottom: 0;
    }
  }

  &__img {
    width: 397.07px;
    height: 364.38px;
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scale(0.6) translate(-54%, 82%);

    @media (min-width: 1000px) {
      transform: scale(0.6) translate(-116%, 101%);
      left: 100%;
      width: 460px;
      height: 428px;
    }
  }
}
</style>
