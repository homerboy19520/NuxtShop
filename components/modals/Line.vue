<template>
  <div class="video-line">
    <div class="video-line__item">
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
      <span class="video-line__container">
        <IconApp class="video-line__icon" name="video-star"></IconApp>
        <span>Только посмотрите!</span>
      </span>
    </div>
  </div>
</template>

<script>
import IconApp from "@/components/ui/Icons";
export default {
  name: "LineApp",
  components: { IconApp },
};
</script>
<style lang="scss">
.video-line {
  left: 50%;
  transform: translateX(-50%) rotate(343deg);
  top: 264px;
  position: absolute;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  min-width: 1700px;
  width: 110%;
  min-height: 82px;
  flex-direction: row;
  background-color: #848eff;

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: var(--font-halvar);
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 58px;
    color: var(--color-white);
    animation: marquee 15s linear infinite;
    &:nth-child(1) {
      position: absolute;
      left: -100%;
      animation: marquee 15s linear infinite;
    }
    &:nth-child(2) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 2s linear infinite;
    }
    &:nth-child(3) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 4s linear infinite;
    }
    &:nth-child(4) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 6s linear infinite;
    }
    &:nth-child(5) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 8s linear infinite;
    }
    &:nth-child(6) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 10s linear infinite;
    }
    &:nth-child(7) {
      position: absolute;
      left: -100%;
      animation: marquee 15s 12s linear infinite;
    }
  }

  &__icon {
    left: -100px;
    position: fixed;
    width: 24px;
    height: 24px;
    transform: rotate(14deg);
    margin-right: 20px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@keyframes marquee {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 0;
    transform: translateX(100%);
  }
}
</style>
