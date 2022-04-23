<template>
  <p
    class="paragraph"
    :class="[`m-${this.size} m-${this.weight} m-${this.color}`]"
  >
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: "ParagraphApp",
  props: {
    size: {
      type: String,
      default: "14",
    },
    weight: {
      type: String,
      default: "regular",
    },
    color: {
      type: String,
      default: "black",
    },
  },
  computed: {
    classes() {
      return [
        "paragraph",
        `m-${this.size}`,
        `m-${this.weight}`,
        `m-${this.color}`,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  &.m-18 {
    font-size: 18px;
    line-height: 32px;
  }

  &.m-20 {
    font-size: 20px;
    line-height: 32px;
  }

  &.m-400 {
    font-weight: 400;
  }

  &.m-700 {
    font-weight: 700;
  }

  &.m-white {
    color: var(--color-white);
  }
}
</style>
