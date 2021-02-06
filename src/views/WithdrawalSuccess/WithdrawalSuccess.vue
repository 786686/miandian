<style scoped lang="scss">
.withdrawal-success {
  padding: 56px 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .van-image {
    width: 90px;
    height: 90px;
    margin-bottom: 30px;
  }
  font-size: 16px;
  color: #525050;
  line-height: 22px;
  font-weight: bold;
}
</style>

<template>
  <div>
    <div class="withdrawal-success">
      <van-image :src="require('@/assets/image/tan_ic_success.png')"></van-image
      >020-87685948 申请提现成功，系统将在xx工作日内将
      金额转至您的银行卡上，请耐心等待
    </div>
  </div>
</template>
<script>
export default {
  name: "Withdrawal",
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss"></style>
