<template>
  <div class="discount">
    <div class="discount__wrapper">
      <DiscountBanner></DiscountBanner>
      <DiscountList></DiscountList>
    </div>
  </div>
</template>

<script>
import DiscountBanner from "@/components/modals/promotion-page/DiscountBanner";
import DiscountList from "@/components/modals/promotion-page/DiscountList";
export default {
  name: "DiscountModal",
  components: { DiscountList, DiscountBanner },
};
</script>

<style lang="scss" scoped>
.discount {
  width: 100%;
  margin-bottom: 100px;

  @media (min-width: 1000px) {
    margin-bottom: 149px;
  }

  &__wrapper {
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
