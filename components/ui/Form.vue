<template>
  <div class="form-wrapper" :class="[`m-${modifier}`]">
    <form v-on:submit.prevent class="form" method="post">
      <InputApp
        input-type="text"
        modifier="white"
        :placeholder="name"
        :value="userName"
        @on-input="saveName"
      ></InputApp>
      <InputApp
        input-type="number"
        modifier="white"
        :placeholder="tel"
        :value="userTel"
        @on-input="saveNumber"
      ></InputApp>
      <input
        :disabled="isSubmit"
        :class="{ 'm-error': isSubmit }"
        @click="onSubmit"
        :value="button"
        class="form__submit"
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import InputApp from "@/components/ui/Input";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FormApp",
  components: { InputApp },
  props: {
    name: {
      type: String,
      default: "",
    },

    tel: {
      type: String,
      default: "",
    },

    button: {
      type: String,
      default: "",
    },

    modifier: {
      type: String,
      default: "",
    },
  },

  methods: {
    ...mapMutations(["saveUserName", "saveUserNumber"]),
    onSubmit() {
      this.$emit("on-submit");
    },

    saveName(name) {
      this.saveUserName(name);
    },

    saveNumber(tel) {
      this.saveUserNumber(tel);
    },
  },

  computed: {
    ...mapGetters(["isSubmit", "userName", "userTel"]),
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  @media (min-width: 1000px) {
    max-width: 620px;
    display: flex;
    height: 79px;
    background-color: var(--color-white);
    border-radius: 10px;
    margin: 31px 0 41px 0;
  }

  &.m-popup {
    @media (min-width: 1000px) {
      display: unset;
      height: unset;
      background-color: unset;
      border-radius: unset;
      margin: 0;
    }

    form {
      margin: 0;
      & div {
        margin-bottom: 16px;
      }

      & .form__submit {
        padding: 23px 0 20px 0;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        font-family: var(--font-halvar);
        color: var(--color-white);
      }

      @media (min-width: 1000px) {
        display: unset;
        justify-content: unset;
        align-items: unset;
        flex-direction: unset;
        min-width: unset;
      }
    }
  }
}

.form {
  margin: 24px auto 28px auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding-right: 4px;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    flex-direction: row;
    box-sizing: border-box;
    min-width: 100%;
  }

  & div {
    margin-bottom: 17px;

    @media (min-width: 1000px) {
      margin-bottom: 0;
    }
  }

  & input:last-child {
    margin-bottom: 0;
  }

  &__name,
  &__tel {
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

  //&__name {
  //  border-bottom-left-radius: 10px;
  //  border-top-left-radius: 10px;
  //}

  &__submit {
    width: 100%;
    padding: 13px 0 17px 0;
    background-color: var(--color-blue);
    box-sizing: border-box;
    border: 1px solid transparent;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 18px;
    line-height: 39px;
    color: var(--color-white);
    border-radius: 10px;
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
      color 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      border-color: var(--color-blue);
      color: var(--color-blue);
    }

    &.m-error {
      background-color: transparent;
      color: var(--color-blue);
      border-color: var(--color-blue);
      cursor: not-allowed;
    }

    @media (min-width: 1000px) {
      height: fit-content;
      padding: 11px 18px 11px 16px;
    }
  }
}
</style>
