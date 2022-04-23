<template>
  <div class="input-block" :class="[`m-${modifier}`]">
    <slot></slot>
    <input
      class="input"
      :type="inputType"
      :disabled="isDisabled"
      :value="localValue"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  name: "InputApp",

  props: {
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modifier: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localValue: "",
    };
  },
  methods: {
    input(value) {
      this.localValue = value;
    },
    onEnter() {
      this.$emit("on-enter");
    },
  },
  mounted() {
    this.localValue = this.value;
  },
  watch: {
    localValue() {
      this.$emit("on-input", this.localValue);
    },

    value() {
      this.localValue = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-block {
  position: relative;
  width: 100%;

  &.m-white,
  &.m-white-slide {
    & input {
      padding: 18px 45px 15px 45px;
      box-sizing: border-box;
      border-radius: 10px;
      border: 1px solid transparent;
      outline: none;
      width: 100%;
      font-family: var(--font-manrope);
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 32px;
      color: var(--color-str-black);

      &::placeholder {
        font-family: var(--font-manrope);
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 32px;
        color: #848eff;
        transition: opacity 0.2s ease-out;
      }

      &:focus::placeholder {
        opacity: 0;
      }
    }
  }

  &.m-white-slide {
    & input {
      margin-bottom: auto;
      font-size: 14px;
      padding: 16px 31px;

      &::placeholder {
        font-size: 14px;
      }

      @media (min-width: 1000px) {
        max-width: 258px;
      }
    }
  }
}
</style>
