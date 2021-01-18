<template>
  <div class="pay-success">
    <img class="logo" src="@/assets/image/zfcg.png" alt />
    <div class="pay-dec">支付成功</div>
    <div class="pay-price">￥ {{ price }}</div>
    <div class="btns">
      <div class="btn" @click="shareBag">分享领红包</div>
      <div class="btn btn-white" @click="backIndex">返回首页</div>
    </div>
    <div class="share-pop" v-if="successBool">
      <img src="@/assets/image/share-arrow.png" alt="" class="icon-arrow" />
      <div class="share-pop-in">
        <img
          src="@/assets/image/icon_close.png"
          alt
          class="icon-close"
          @click="successBool = false"
        />
        <div class="item-tit">
          <img src="@/assets/image/icon_yes.png" alt />
          支付成功
        </div>
        <div class="item-dec">邀请好友加入维保出险一起抢红包 ！</div>
        <div class="item-bag">
          <img src="@/assets/image/icon_bag.png" alt="" />
        </div>
        <div class="btn-share">分享领红包</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import User from "@/api/user";
import { wxShareFn } from "@/utils/wxSdk.js";
import { mapState } from "vuex";
export default {
  name: "PaySuccess",
  data() {
    return {
      successBool: true,
      price: this.$route.query.price
    };
  },
  computed: {
    ...mapState(["userId"])
  },
  methods: {
    backIndex() {
      this.$router.push("/");
    },

    async shareBag() {
      Toast("点击右上角分享给朋友或朋友圈可获取红包");
      const { data } = await User.getWxSign({
        url: window.location.href
      });
      wxShareFn(data, this.userId);
    }
  },
  mounted() {
    this.shareBag();
  }
};
</script>
<style lang="scss" scoped>
.share-pop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 6, 6, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-arrow {
    position: absolute;
    width: 129px;
    height: 219px;
    top: 26px;
    right: 30px;
  }
  .share-pop-in {
    padding-bottom: 45px;
    width: 457px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    padding-top: 32px;
    .icon-close {
      position: absolute;
      right: -25px;
      top: -25px;
      width: 50px;
      height: 50px;
    }
    .item-tit {
      margin-bottom: 15px;
      font-size: 26px;
      color: #f88706;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 21px;
        height: 21px;
        margin-right: 11px;
      }
    }
    .item-dec {
      padding: 0 93px;
      font-size: 26px;
      margin-bottom: 20px;
      color: #999;
      line-height: 38px;
      text-align: center;
    }
    .item-bag {
      display: flex;
      justify-content: center;
      margin-bottom: 26px;
      img {
        width: 155px;
        height: 165px;
      }
    }
    .btn-share {
      background-color: #f88706;
      width: 312px;
      height: 54px;
      line-height: 54px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.pay-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 126px 46px 0;
  .logo {
    width: 120px;
    height: 120px;
    display: block;
  }
  .pay-dec {
    margin: 23px 0 40px;
    font-size: 28px;
    color: #333;
  }
  .pay-price {
    font-size: 48px;
    color: #333;
    font-weight: bold;
  }
  .btns {
    margin-top: 160px;
  }
  .btn {
    width: 480px;
    height: 88px;
    background: linear-gradient(
      90deg,
      rgba(248, 133, 4, 1),
      rgba(253, 180, 52, 1)
    );
    border-radius: 44px;
    text-align: center;
    line-height: 88px;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    margin-top: 38px;
    // position: fixed;
    // bottom: 200px;
    // left: 50%;
    // transform: translateX(-50%);
    &.btn-white {
      color: #fa9a19;
      background: rgba(255, 255, 255, 1);
      border: 2px solid #fa9a19;

      border-radius: 40px;
    }
  }
}
</style>
