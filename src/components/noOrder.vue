<template>
  <div :class="['none', { caleMath: isBar }]">
    <img src="@/assets/image/no-order.png" />
    <p>{{ isBar ? `暂无记录` : `暂无订单` }}</p>
  </div>
</template>
<script>
export default {
  name: "noOrder",
  props: {
    isBar: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.none {
  height: calc(100vh - 230px);
  background-color: #fff;
  display: block;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 150px;
  img {
    display: block;
    width: 246px;
    height: 260px;
  }
  p {
    font-weight: 500;
    color: #999;
    font-size: 30px;
    padding-top: 20px;
  }
}
.caleMath {
  height: calc(100vh - 330px);
}
</style>
