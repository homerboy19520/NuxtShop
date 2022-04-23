<template>
  <div class="card">
    <div class="card__circle">
      <IconApp name="button"></IconApp>
      <IconApp class="card__icon" :name="icon"></IconApp>
      <span class="card__description">{{ title }}</span>
    </div>
    <div class="card__hover">
      <p class="card__title">{{ hoverTitle }}</p>
      <p class="card__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
import IconApp from "@/components/ui/Icons";
export default {
  name: "GraphicCard",
  components: { IconApp },
  props: {
    title: {
      type: String,
      default: "",
    },

    hoverTitle: {
      type: String,
      default: "",
    },

    subtitle: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 40px 11px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border-radius: 20px;
  transition: background-color 0.3s ease-out;
  cursor: pointer;

  @media (min-width: 600px) {
    justify-content: center;
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: var(--color-grey);
    .card__circle {
      background-color: var(--color-black);
    }

    .card__description {
      opacity: 0;
    }

    .card__hover {
      opacity: 1;
    }
  }

  &__circle {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 125px;
    min-height: 125px;
    background-color: var(--color-grey);
    border-radius: 50%;
    transition: background-color 0.3s ease-out;
    margin-right: 24px;
    @media (min-width: 1000px) {
      margin: 0 0 23px 0;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__description {
    width: 200%;
    position: absolute;
    left: calc(100% + 24px);
    top: 50%;
    transform: translate(0, -50%);
    font-family: var(--font-manrope);
    color: var(--color-white);
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;

    @media (min-width: 1000px) {
      text-align: center;
      top: calc(100% + 39px);
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &__hover {
    transition: opacity 0.2s ease-out;
    opacity: 0;
  }

  &__title {
    font-family: var(--font-manrope);
    font-weight: 800;
    font-size: 20px;
    line-height: 32px;
    color: var(--color-white);
    @media (min-width: 1000px) {
      text-align: center;
      margin-bottom: 17px;
    }
  }
  &__subtitle {
    font-family: var(--font-manrope);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-white);
    @media (min-width: 1000px) {
      text-align: center;
    }
  }
}
</style>
