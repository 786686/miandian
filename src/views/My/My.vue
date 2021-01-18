<template>
  <div class="my">
    <div class="avator-box">
      <div class="avator-card">
        <img :src="userInfo.main_pic" alt />
        <p class="username">{{ userInfo.name }}</p>
        <p class="phone" @click="toChangePhonne">
          {{ userInfo.mobile ? userInfo.mobile : `（点击此添加手机号）` }}
        </p>
      </div>
    </div>
    <div class="wallet">
      <div class="count-box">
        <p class="desc">我的钱包</p>
        <p class="count">
          ￥ <span>{{ userInfo.money }}</span>
        </p>
      </div>
      <div class="money-box">
        <p class="desc">我的红包</p>
        <p class="count">
          ￥
          <span>{{ userInfo.red_money }}</span>
        </p>
      </div>
    </div>
    <div class="operation">
      <div class="operation-item" @click="toRecharge">
        <span>去充值</span>
        <van-icon name="arrow" />
      </div>
      <div class="operation-item" @click="toOrderDetail">
        <span>订单明细</span>
        <van-icon name="arrow" />
      </div>
      <div class="operation-item" @click="toService">
        <span>联系客服</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { wxPageShare } from "@/utils/wxSdk.js";
import User from "@/api/user";

export default {
  name: "My",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("GET_USER_INFO");
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    // 跳转客服（微信逐渐停止该功能，电脑端复制公众号链接）
    toService() {
      const url = `https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUyOTMwMDIyNA==&scene=124#wechat_redirect`;
      window.location.href = url;
    },
    toOrderDetail() {
      this.$router.push("OrderDetail");
    },
    toRecharge() {
      this.$router.push("/Recharge");
    },
    toChangePhonne() {
      this.$router.push("ChangePhone");
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
.my {
  .avator-box {
    padding: 20px 32px;
    .avator-card {
      width: 100%;
      height: 328px;
      border-radius: 20px;
      background: linear-gradient(#f4af39, #ee8317);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
        display: block;
        border-radius: 50%;
      }
      .username {
        font-size: 32px;
        font-weight: bold;
        color: #fff;
        padding: 23px 0;
      }
      .phone {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        line-height: 30px;
      }
    }
  }
  .wallet {
    display: flex;
    justify-content: space-between;
    padding: 30px 33px;
    .count-box,
    .money-box {
      width: 318px;
      height: 149px;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
      padding: 20px 28px;
      .desc {
        color: #333;
        font-weight: bold;
        font-size: 30px;
      }
      .count {
        text-align: center;
        font-size: 30px;
        padding-top: 28px;
        font-weight: 500;
        span {
          color: #fe0000;
          font-size: 40px;
        }
      }
    }
  }
  .operation {
    padding: 10px 30px 0;
    .operation-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
      line-height: 104px;
      padding: 0 34px;
      align-items: center;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
}
</style>
