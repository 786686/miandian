<template>
  <div>
      <div class="jump-look">跳过，先看看></div>
      <div class="logo">
        <van-image src=""></van-image>
      </div>
      <div class="login-inp">
        <div class="item-inp">
          <van-image src=""></van-image>
          <input type="text" placeholder="请输入账号" >
        </div>
        <div class="item-inp">
          <van-image src=""></van-image>
          <input type="text" placeholder="请输入密码" >
        </div>
      </div>
      <div class="login-operate">
        <div class="item-remem">
          <van-image src=""></van-image>记住密码
        </div>
        <div class="item-forget">忘记密码？</div>
      </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>

</style>
