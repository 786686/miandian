<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
      <img :src="item.mainPic" alt="" class="banner-img" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: "swiper",
  props: {
    bannerList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.banner-img {
  width: 100%;
  height: 280px;
  display: block;
}
</style>
