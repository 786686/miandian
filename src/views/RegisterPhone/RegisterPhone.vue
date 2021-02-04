<template>
  <div>
      <div class="logo">
        <van-image :src="require('@/assets/image/btn_add_photo.png')"></van-image>
      </div>
      <div class="item-sex">
        <van-image :class="{active:sex == 1}" @click="sexChange(1)" :src="require('@/assets/image/tx_man_n.png')"></van-image>
        <van-image :class="{active:sex == 2}" @click="sexChange(2)" :src="require('@/assets/image/tx_woman_n.png')"></van-image>
      </div>
      <div class="login-inp">
        <div class="item-inp">
          <van-image :src="require('@/assets/image/login_ic_phone.png')"></van-image>
          <van-field placeholder="请输入手机号" v-model="telPhone"></van-field>
        </div>
      </div>
      <div class="btns">
        <div class="btn" @click="next">下一步</div>
      </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      sex:1,
      type: 1,
      telPhone:"",
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    sexChange(sex){
      this.type = this.sex = sex;
    },
    next(){
      if(!this.telPhone){
        Toast("请先输入手机号")
        return;
      }
      if(this.sex == 1){
        this.$router.push({ path:"/RegisterPwd", query: { sex:this.sex,type:this.type,telPhone:this.telPhone } });
      }
      
    }
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
    margin: 50px auto;
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
      border-radius: 50%;
      display: block;
      &.active{
        border: 1px solid #D627FA;
      }
    }
  }
</style>
