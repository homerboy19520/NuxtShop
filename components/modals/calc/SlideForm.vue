<template>
  <div class="slide">
    <div v-if="activePage !== 3" class="slide__main">
      <p class="slide__title">
        {{ slideObject.title }}
      </p>
      <ul class="slide__list">
        <li v-for="(item, index) in slideObject.buttons" :key="index">
          <ButtonApp
            @on-button="onButton(index)"
            :class="{ 'm-active': item.chosen }"
            modifier="primary-calc"
            >{{ item.text }}</ButtonApp
          >
        </li>
      </ul>
    </div>
    <div class="slide__wrapper" v-else>
      <p class="slide__title contacts">
        {{ slideObject.title }}
      </p>
      <p class="slide__subtitle">
        {{ slideObject.subtitle }}
      </p>
      <InputApp
        class="slide__input"
        placeholder="Телефон"
        modifier="white-slide"
        input-type="number"
        :value="userTel"
        @on-enter="onSubmit"
        @on-input="onInput"
      ></InputApp>
    </div>
  </div>
</template>

<script>
import ButtonApp from '~/components/ui/Button'
import InputApp from '~/components/ui/Input'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SlideForm',
  components: { InputApp, ButtonApp },
  props: {
    slideObject: {
      type: Object,
      required: true,
    },

    activePage: {
      type: Number,
    },
  },

  methods: {
    ...mapMutations(['saveUserPhone']),

    onButton(index) {
      this.$emit('on-button', index)
    },

    onInput(value) {
      this.saveUserPhone(value)
    },

    onSubmit() {
      this.$emit('on-submit')
    },
  },

  computed: {
    ...mapGetters(['userTel']),
  },
}
</script>

<style lang="scss" scoped>
.slide {
  &__title {
    max-width: 273px;
    margin-bottom: 19px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      max-width: unset;
      margin-bottom: 41px;
      font-size: 36px;
      line-height: 54px;
    }

    &.contacts {
      margin-bottom: 16px;

      @media (min-width: 1000px) {
        margin-bottom: 20px;
        font-size: 36px;
        line-height: 54px;
      }
    }
  }

  &__subtitle {
    margin-bottom: 24px;
    font-family: var(--font-manrope);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: var(--color-white);

    @media (min-width: 1000px) {
      font-size: 18px;
      letter-spacing: 0.15em;
      width: 100%;
      max-width: 684px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 500px;
    height: 500px;
    overflow: auto;

    @media (min-width: 680px) {
      flex-direction: row;
      flex-wrap: wrap;
      min-height: 300px;
      height: 100%;
    }

    @media (min-width: 700px) {
      height: 176px;
      min-height: 176px;
    }

    & li {
      margin-bottom: 13px;

      @media (min-width: 600px) {
        //margin: 0 30px 24px 0;
        margin-bottom: 30px;
      }

      @media (min-width: 680px) {
        display: flex;
        justify-content: center;
        height: fit-content;
        flex: 1 0 40%;
        max-width: 40%;
      }

      @media (min-width: 800px) {
        flex: 1 0 30%;
        max-width: 30%;
      }
      @media (min-width: 1000px) {
        justify-content: flex-start;
        max-width: 38%;
      }
      @media (min-width: 1300px) {
        flex: 1 0 25%;
        max-width: 25%;
      }

      & button {
        @media (min-width: 1000px) {
          min-width: 150px;
        }
        @media (min-width: 1200px) {
          min-width: 196px;
        }
      }
    }

    & li:last-child {
      margin: 0;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 564px;
    height: 100%;
    overflow: auto;

    @media (min-width: 680px) {
      flex-direction: row;
      flex-wrap: wrap;
      min-height: 300px;
    }

    @media (min-width: 700px) {
      max-height: 271px;
      min-height: unset;
    }
  }
}
</style>
