<template>
  <div class="contacts">
    <div class="contacts__wrapper main__container">
      <div class="contacts__card">
        <p class="contacts__text">
          {{ MAIN_DATA.contactsContent.title
          }}<span>{{ MAIN_DATA.contactsContent.span }}</span>
        </p>
        <a
          href="https://goo.gl/maps/qMGnimcTWY4oTHe88"
          class="contacts__geolocation"
          ><IconApp
            class="contacts__icon"
            name="contact__geolocation"
          ></IconApp>
          {{ MAIN_DATA.contactsContent.address }}</a
        >
      </div>
    </div>
    <div class="contacts__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d999.3712869762932!2d30.33526703927386!3d59.936413660236774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631090ec39985%3A0x7f5858a97f7084fb!2z0KHQsNC00L7QstCw0Y8g0YPQuy4sIDMsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1649591518308!5m2!1sru!2sru"
        width="540"
        height="387"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { MAIN_DATA } from "@/helpers/mocs";
import IconApp from "@/components/ui/Icons";

export default {
  name: "ContactsModal",
  components: { IconApp },
  data() {
    return {
      MAIN_DATA,
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 100px;

  @media (min-width: 1300px) {
    margin-bottom: 356px;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 1000px) {
      justify-content: flex-start;
      padding: 0;
      margin: unset;
    }
  }

  &__card {
    position: relative;
    top: 20px;
    padding: 34px 24px;
    border-radius: 10px;
    background-color: var(--color-grey);
    max-width: 380px;

    @media (min-width: 1000px) {
      align-self: flex-start;
      max-width: 780px;
      z-index: 1;
      padding: 57px 169px;
    }
  }

  &__text {
    margin-bottom: 34px;
    font-family: var(--font-halvar);
    font-weight: 700;
    font-size: 36px;
    line-height: 38px;
    color: var(--color-white);

    @media (min-width: 1000px) {
      margin-bottom: 55px;
      font-size: 60px;
      line-height: 68px;
    }

    & span {
      position: relative;
      display: block;
      z-index: 1;
      width: fit-content;
      &::after {
        z-index: -1;
        content: "";
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 7px;
        border-radius: 31px;
        background-color: var(--color-blue);

        @media (min-width: 1000px) {
          height: 14px;
        }
      }
    }
  }

  &__geolocation {
    display: block;
    position: relative;
    padding-left: 58px;
    font-family: var(--font-manrope);
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-white);
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--color-blue);
    }

    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 39px;
      padding-left: 78px;
    }
  }

  &__map {
    width: 540px;
    height: 387px;
    align-self: center;
    overflow: hidden;
    border-radius: 10px;

    & iframe {
      width: 100%;
      height: 100%;

      & .place-card {
        display: none;
      }
    }
    @media (min-width: 1000px) {
      min-width: 780px;
      min-height: 528px;
      align-self: flex-end;
    }

    @media (min-width: 1300px) {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0px, -235px);
      min-width: 791px;
      min-height: 528px;
    }
  }

  &__icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    height: 80%;
  }
}
</style>
