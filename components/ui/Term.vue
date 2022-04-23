<template>
  <div class="term">
    <span class="term__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "TermApp",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.term {
  position: relative;
  padding-left: 19px;
  width: 94%;

  @media (min-width: 1000px) {
    width: 100%;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 100%);
    content: "";
    width: 6px;
    height: 6px;
    background: #1400ff;
    filter: blur(4px);
  }

  &__text {
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 14px;
    color: var(--color-white);
  }
}
</style>
