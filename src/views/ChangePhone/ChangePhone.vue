<template>
  <div class="change-phone">
    <div class="bind-phone-item van-hairline--bottom">
      <input type="tel" placeholder="请输入新的手机号" v-model="mobile" />
      <p class="current-phone" v-if="type === 2">当前手机号：13729014757</p>
    </div>
    <div class="bind-phone-item van-hairline--bottom">
      <input type="tel" placeholder="请输入短信验证码" v-model="code" />
      <p @click="getCode" class="get-code">
        {{ loadding ? time : `获取验证码` }}
      </p>
    </div>
    <div class="btn" @click="bindPhone">确定</div>
  </div>
</template>
<script>
import User from "@/api/user";
import { Toast } from "vant";
import { wxPageShare } from "@/utils/wxSdk.js";

export default {
  name: "ChangePhone",
  data() {
    return {
      type: 1,
      mobile: "",
      code: "",
      loadding: false,
      time: 60
    };
  },
  methods: {
    // 获取验证码
    async getCode() {
      if (this.loadding) return Toast("请稍后");
      const { code } = await User.captcha({ mobile: this.mobile });
      if (code === 0) {
        Toast.success(`获取验证码成功`);
        this.loadding = true;
        this.countDown();
      }
    },
    // 绑定手机
    async bindPhone() {
      const { code } = await User.bindPhone({
        mobile: this.mobile,
        content: this.code,
        id: this.$store.state.userId
      });
      if (code === 200) {
        Toast.success(`修改成功`);
        this.$router.push("/my");
      }
    },
    // 验证码倒计时
    countDown() {
      let timeR = setInterval(() => {
        this.time = this.time - 1;
        if (this.time === 0) {
          this.time = 60;
          this.loadding = false;
          window.clearInterval(timeR);
        }
      }, 1000);
    },
    async sharePage() {
      const { data } = await User.getWxSign({
        url: window.location.href
      });
      wxPageShare(data);
    }
  },
  mounted() {
    //this.sharePage();
  }
};
</script>
<style lang="scss" scoped>
.change-phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  .bind-phone-item {
    position: relative;
    width: 100%;
    padding: 0 46px;
    input {
      width: 100%;
      height: 90px;
      border: none;
      font-size: 28px;
      line-height: 40px;
    }
    .current-phone {
      line-height: 90px;
      font-size: 28px;
    }
    .get-code {
      position: absolute;
      top: 50%;
      right: 46px;
      transform: translateY(-50%);
      font-weight: bold;
      font-size: 24px;
      color: #ff8800;
      line-height: 50px;
      background-color: #fbdcb8;
      border-radius: 6px;
      width: 150px;
      height: 50px;
      background: rgba(251, 220, 184, 1);
      border: 1px solid rgba(248, 135, 6, 1);
      border-radius: 10px;
      text-align: center;
    }
  }
  .btn {
    width: 686px;
    height: 100px;
    background: linear-gradient(
      76deg,
      rgba(253, 180, 52, 1),
      rgba(248, 133, 4, 1)
    );
    border: 1px solid rgba(248, 135, 6, 1);
    border-radius: 50px;
    text-align: center;
    line-height: 100px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    // position: fixed;
    // bottom: 200px;
    // left: 50%;
    // transform: translateX(-50%);
    margin-top: 700px;
  }
}
</style>
