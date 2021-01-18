<template>
  <div class="carInfo">
    <!-- <img :src="carInfo.image" alt="" class="car-image" /> -->
    <div class="car-detail">
      <p class="name">{{ carInfo.brandName }}</p>
      <p class="vin">vin：{{ carInfo.vin }}</p>
      <p class="date">报告生成日期：{{ carInfo.createtime }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "carInfo",
  props: {
    carInfo: {
      default: () => {},
      type: Object
    }
  }
};
</script>
<style lang="scss" scoped>
.carInfo {
  display: flex;
  padding: 16px 20px;
  background-color: #fff !important;
  .car-image {
    width: 144px;
    height: 144px;
  }
  .car-detail {
    padding-left: 18px;
    padding-top: 12px;
    .name {
      color: #171717;
      font-weight: bold;
      font-size: 28px;
      padding-bottom: 20px;
    }
    .date,
    .vin {
      font-size: 26px;
      padding-bottom: 22px;
      color: #666;
    }
  }
}
</style>
