<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" :class="[`m-${modifier}`]">
      <div v-for="(item, index) in mass" :key="index" class="swiper-slide">
        <SlideDevice
          v-if="modifier === 'models'"
          :index="++index"
          :modifier="modifier"
          :price="item.price"
          :service="item.service"
          :time="item.time"
          :title="item.title"
          :description="item.description"
          :img="item.img"
        ></SlideDevice>
        <SwiperItem
          :modifier="modifier"
          :price="item.price"
          :service="item.service"
          :time="item.time"
          :title="item.title"
          :description="item.description"
          :img="item.img"
        ></SwiperItem>
      </div>
    </div>
    <div class="swiper-pagination" :class="[`m-${modifier}`]">
      <div class="swiper-pagination__next">
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00037 18.2665L10.4078 9.8283L1.45045 1.00051"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="swiper-pagination__prev">
        <svg
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00037 18.2665L10.4078 9.8283L1.45045 1.00051"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper, { Thumbs, Navigation } from 'swiper'\
import SwiperItem from '@/components/modals/SiperSlide'
import { MAIN_DATA } from '@/helpers/mocs.js'
import SlideDevice from '@/components/modals/SlideDevice'
import Swiper from 'swiper'
// Swiper.use([Thumbs, Navigation])

export default {
  name: 'SwiperApp',
  components: { SlideDevice, SwiperItem },
  data() {
    return {
      MAIN_DATA,
      thumbsSwiper: null,
    }
  },

  props: {
    mass: {
      type: Array,
      required: true,
    },

    modifier: {
      type: String,
      required: 'default',
    },
  },

  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loopedSlides: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-pagination__prev',
        prevEl: '.swiper-pagination__next',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide {
  height: fit-content;
  width: fit-content;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-wrapper {
  padding-bottom: 136px;

  &.m-main {
    padding-bottom: 50px;

    @media (min-width: 1000px) {
      padding-bottom: 0;
    }
  }

  &.m-models {
    padding-bottom: 40px;
    @media (min-width: 1000px) {
      padding-bottom: 61px;
    }
  }
}
.swiper-pagination {
  z-index: 1;
  display: flex;
  &.m-models {
    justify-content: center;
    @media (min-width: 1000px) {
      position: relative;
      justify-content: flex-end;
      transform: unset;
      left: unset;
      top: unset;
    }
  }
  @media (min-width: 1000px) {
    position: absolute;
    top: 10%;
    left: 100%;
    transform: translate(-200%, 0);
  }

  &__prev,
  &__next {
    border-radius: 50%;
    width: 66px;
    height: 66px;
    background-color: var(--color-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid transparent;
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out;

    & svg path {
      transition: stroke 0.2s ease-out;
    }

    &:hover {
      border-color: var(--color-blue);
      background-color: transparent;

      & svg path {
        stroke: var(--color-blue);
      }
    }
  }

  &__next {
    margin-right: 18px;
    & svg {
      transform: rotate(180deg);
    }
  }
}
</style>
