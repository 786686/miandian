<template>
  <div>
    <div class="set-list">
      <div class="item" @click="updateLogin">
        <div class="item-l">
          修改登录密码
        </div>
        <div class="item-r">
          <van-image
            :src="require('@/assets/image/ic_forward.png')"
          ></van-image>
        </div>
      </div>
      <div class="item" @click="forgetLogin">
        <div class="item-l">
          忘记登录密码
        </div>
        <div class="item-r">
          <van-image
            :src="require('@/assets/image/ic_forward.png')"
          ></van-image>
        </div>
      </div>
      <div class="item" @click="updatePay">
        <div class="item-l">
          修改支付密码
        </div>
        <div class="item-r">
          <van-image
            :src="require('@/assets/image/ic_forward.png')"
          ></van-image>
        </div>
      </div>
      <div class="item" @click="forgetPay">
        <div class="item-l">
          忘记支付密码
        </div>
        <div class="item-r">
          <van-image
            :src="require('@/assets/image/ic_forward.png')"
          ></van-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "@/api/user";
import { Toast } from "vant";

export default {
  name: "settings",
  data() {
    return {};
  },
  created() {
    this.setPwd();
  },
  computed: {},
  methods: {
    async setPwd() {
      let params = {
        payPassWord: 123, //	是	string	支付宝密码
        type: localStorage.type //	是	string	用户类型 1为男用户，2为女用户，这个值一定不能传错
      };
      let { code } = await User.setPayPassWord(params);
      if (code == 200) {
        Toast("设置密码成功！");
      }
    },
    updateLogin() {
      this.$router.push("/updatePwd");
    },
    forgetLogin() {
      this.$router.push("/forgetPwd");
    },
    updatePay() {
      this.$router.push("/updatePayPwd");
    },
    forgetPay() {
      this.$router.push("/forgetPwd");
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.set-list {
  .item {
    margin: 0 16px;
    border-bottom: 1px solid #e1e4e8;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-l {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      .van-image {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
    .item-r {
      .van-image {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
