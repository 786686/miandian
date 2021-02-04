<template>
  <div>
      <div class="logo">
        <van-image :src="require('@/assets/image/btn_add_photo.png')"></van-image>
      </div>
      <div class="item-sex">
        <van-image :class="{active:sex == 1}" :src="require('@/assets/image/tx_man_n.png')"></van-image>
        <van-image :class="{active:sex == 2}" :src="require('@/assets/image/tx_woman_n.png')"></van-image>
      </div>
      <div class="login-inp">
        <div class="item-inp">
          <van-image :src="require('@/assets/image/login_ic_password.png')"></van-image>
          <van-field placeholder="请输入密码" v-model="passWord"></van-field>
        </div>
      </div>
      <div class="btns">
        <div class="btn" @click="rightRegister">立即注册</div>
      </div>
      <van-popup v-model="popShow" closeable>
          <div class="center-pop">
            <van-image :src="require('@/assets/image/tan_ic_success.png')"></van-image>
            <div class="pop-msg">恭喜，您已注册成功</div>
            <div class="bottom-pop-btn" @click="login">去登录</div>
          </div>
      </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
import User from "@/api/user";

export default {
  name: "login",
  data() {
    return {
      popShow: false,
      passWord: "",
      sex: "",
      type: "",
      telPhone:""
    };
  },
  computed: {
  },
  created() {
    this.type = this.sex = this.$route.query.sex
    this.telPhone = this.$route.query.telPhone
  },
  methods: {
    // 登录
    login(){
      this.$router.push("/login")
    },  
    async rightRegister(){
      if(!this.passWord){
        Toast("请先输入密码")
        return;
      }
      if(this.sex == 1){
        const params = {
          telPhone: this.telPhone,
          passWord: this.passWord,
          sex:this.sex,//	是	string	性别固定1
          type:this.sex,//	是	string	类型固定1
        };
        const { data, code } = await User.addMan(params);
        if (code === 200) {
          this.popShow = true;
        }
      }else{
        let query = {
          telPhone: this.telPhone,
          passWord: this.passWord,
          sex:this.sex,//	是	string	性别固定1
          type:this.sex,//	是	string	类型固定1
        }
        this.$router.push({path: "/finishmsg",query})
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
  .van-popup{
    border-radius: 6px;

  }
</style>
