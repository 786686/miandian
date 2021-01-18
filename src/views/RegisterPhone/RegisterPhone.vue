<template>
  <div>
      <div class="logo">
        <van-image :src="require('@/assets/image/btn_add_photo.png')"></van-image>
      </div>
      <div class="item-sex">
        <van-image :src="require('@/assets/image/tx_man_s.png')"></van-image>
        <van-image :src="require('@/assets/image/tx_woman_s.png')"></van-image>
      </div>
      <div class="login-inp">
        <div class="item-inp">
          <van-image :src="require('@/assets/image/login_ic_phone.png')"></van-image>
          <input type="text" placeholder="请输入账号" >
        </div>
      </div>
      <div class="btns">
        <div class="btn">下一步</div>
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
.btns{
  margin-top: 60px;
}
  .logo{
    .van-image{
    margin: 0 auto;
      width: 90px;
      height: 90px;
      display: block;
    }
  }
  .login-inp{
     margin: 30px 30px 7px;
    .item-inp{
      height: 64px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #E1E4E8;
      font-size: 14px;
      .van-image{
        width: 24px;
        height: 24px;margin-right: 8px;
      }
    }
  }
  .item-sex{
    margin:  50px 52px 40px;
    display: flex;
    justify-content: space-between;
    .van-image{
      width: 100px;
      height: 100px;
    }
  }
</style>
