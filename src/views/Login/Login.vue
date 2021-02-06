<template>
  <div>
    <div class="jump-look" @click="jump">跳过，先看看></div>
    <div class="logo">
      <van-image :src="require('@/assets/image/btn_add_photo.png')"></van-image>
    </div>
    <div class="login-inp">
      <div class="item-inp">
        <van-image
          :src="require('@/assets/image/login_ic_number.png')"
        ></van-image>
        <van-field placeholder="请输入账号" v-model="telPhone"></van-field>
      </div>
      <div class="item-inp">
        <van-image
          :src="require('@/assets/image/login_ic_password.png')"
        ></van-image>
        <van-field
          placeholder="请输入密码"
          type="password"
          v-model="password"
        ></van-field>
      </div>
    </div>
    <div class="login-operate">
      <div class="item-operate">
        <van-checkbox
          v-model="rememChecked"
          checked-color="#D627FA"
          shape="square"
          label-color="#999"
          >记住密码</van-checkbox
        >
      </div>
      <div class="item-operate" @click="forget">忘记密码？</div>
    </div>
    <div class="login-tips">
      <van-checkbox
        v-model="loginChecked"
        checked-color="#D627FA"
        shape="square"
        label-color="#999"
        >登录即表示同意<a
          href="javascript: void(0);"
          @click.stop="protocolClick"
          >《用户协议》</a
        ></van-checkbox
      >
    </div>
    <div class="btns">
      <div class="btn" @click="submit">登录</div>
      <div class="btn" @click="register">注册</div>
    </div>
  </div>
</template>
<script>
import User from "@/api/user";
import { Toast } from "vant";

export default {
  name: "login",
  data() {
    return {
      rememChecked: false,
      loginChecked: false,
      telPhone: "",
      password: ""
    };
  },
  computed: {},
  created() {},
  methods: {
    // 跳过看看
    jump() {
      this.$router.push("/");
    },
    // 跳过看看
    forget() {
      this.$router.push("/ForgetPwd");
    },
    // 登录
    async submit() {
      if (!this.loginChecked) {
        Toast("请先勾选登录即同意");
        return;
      }
      if (this.rememChecked) {
        // 记住密码操作
      }
      const params = {
        telPhone: this.telPhone,
        password: this.password
      };
      const { data, code } = await User.login(params);
      if (code === 200) {
        console.log(data);
        localStorage.setItem("token", data.token);
        this.$store.commit(`SET_USER_INFO`, data.user);
        this.$store.commit(`SET_USER_TYPE`, data.type);
        Toast("登录成功！");
        this.$router.push("/");
      }
    },
    // 注册
    register() {
      this.$router.push("/RegisterPhone");
    },
    // 协议跳转
    protocolClick() {
      window.location.href = "http://www.baidu.com";
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.btns {
  margin: 0 30px;
  .btn {
    background: linear-gradient(to right, #53c8e1, #f02dff);
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 4px;
    &:nth-child(2) {
      border: 1px solid #d627fa;
      background: #fff;
      color: #d627fa;
    }
  }
}
.jump-look {
  margin: 10px 16px 20px;
  text-align: right;
  font-size: 14px;
}
.logo {
  .van-image {
    margin: 0 auto;
    width: 90px;
    height: 90px;
    display: block;
  }
}
.login-inp {
  margin: 30px 30px 7px;
  .item-inp {
    height: 64px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    font-size: 14px;
    .van-image {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
}
.login-operate {
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  align-items: center;
  line-height: 20px;
  .item-operate {
    display: flex;
    align-items: center;
  }
  .van-image {
    width: 20px;
    height: 20px;
  }
}
.login-tips {
  margin-top: 40px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #999;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #d627fa;
  }
  .van-image {
    margin-left: 3px;
    width: 20px;
    height: 20px;
  }
}
// 复选框
/deep/.van-checkbox__icon {
  font-size: 14px;
}
/deep/.van-checkbox__label {
  font-size: inherit;
  color: inherit;
}
/deep/.van-cell.van-field {
  padding: 0;
}
</style>
