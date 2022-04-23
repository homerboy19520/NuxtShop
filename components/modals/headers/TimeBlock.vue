<template>
  <div class="time">
    <a class="time__number" :href="`tel:${formatTel}`">{{
      HEADER_DATA.timeContent.number
    }}</a>
    <div class="time__wrapper">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.88889 0.48594C4.04 0.811619 3.25356 1.36827 2.31378 2.3084C0.584 4.03928 0 5.47515 0 7.99699C0 10.519 0.584 11.9547 2.31378 13.6854C4.04378 15.4158 5.47889 16 8 16C10.5211 16 11.9562 15.4158 13.6862 13.6854C15.416 11.9547 16 10.519 16 7.99699C16 5.62054 15.4333 4.14687 13.8707 2.45824C12.8373 1.3416 12.7149 1.11996 13.0007 0.882534C13.6264 0.363227 13.3324 0.216283 11.6667 0.216283C10.5487 0.216283 10 0.301426 10 0.474603C10 0.732255 10.6958 3.13538 10.8204 3.30878C10.8567 3.3588 11.0673 3.23586 11.2889 3.03534C11.652 2.70678 11.7396 2.70411 12.1753 3.00956C13.334 3.82142 14.9229 7.0593 14.2693 7.27738C13.9158 7.39521 13.9202 8.60033 14.2749 8.71859C14.4838 8.78817 14.4516 9.12097 14.1404 10.1087C13.5711 11.9154 11.9169 13.5702 10.1109 14.1397C9.12356 14.451 8.79089 14.4832 8.72133 14.2742C8.602 13.9165 7.398 13.9165 7.27867 14.2742C7.20911 14.4832 6.87644 14.451 5.88911 14.1397C4.08311 13.5702 2.42889 11.9154 1.85956 10.1087C1.54844 9.12097 1.51622 8.78817 1.72511 8.71859C2.08267 8.59921 2.08267 7.39476 1.72511 7.27538C1.51622 7.2058 1.54844 6.87301 1.85956 5.8853C2.16844 4.90516 2.55333 4.30227 3.43 3.42527C4.6 2.25483 5.67889 1.76598 7.81178 1.43985C8.64311 1.3127 8.974 0.918992 8.74711 0.327436C8.55511 -0.173197 6.37356 -0.0836072 4.88889 0.48594ZM7.61111 3.2721C7.41533 3.3379 7.33333 3.97859 7.33333 5.44025V7.51481L6.00644 8.4785C4.94778 9.24724 4.67822 9.56558 4.67311 10.0533C4.66311 11.0046 5.53867 10.8516 7.22 9.60871L8.64844 8.55275L8.65756 5.96667C8.66556 3.68559 8.62067 3.36858 8.27778 3.27944C8.064 3.22408 7.764 3.22075 7.61111 3.2721Z"
          fill="#483AEC"
        />
      </svg>
      <span class="time__description">{{
        HEADER_DATA.timeContent.timetable
      }}</span>
    </div>
  </div>
</template>
<script>
import { HEADER_DATA } from "@/helpers/mocs.js";
export default {
  name: "TimeBlock",
  data() {
    return {
      HEADER_DATA,
    };
  },
  computed: {
    formatTel() {
      return HEADER_DATA.timeContent.number.split(" ").join("");
    },
  },
};
</script>

<style lang="scss" scoped>
.time {
  font-family: var(--font-manrope);
  @media (min-width: 600px) {
    display: flex;
    margin-right: 20px;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__description {
    color: var(--color-white);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  &__number {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    color: var(--color-white);

    @media (min-width: 600px) {
      margin: 0;
    }
  }
}
</style>
