<template>
  <div class="share-code">
    <div class="share-code-top"></div>
    <div class="share-code-bottom">
      <div class="share-code-bottom-in">
        <!-- <div class="item-name">维保出险查询助手</div>
        <div class="item-code">
          <img
            :src="'http://www.baidu.com/shareMoney/getCode?id=' + id"
            alt
          />
        </div>
        <div class="item-dec">长按二维码，关注可领取红包查询维保出险记录</div> -->
      </div>
    </div>
    <div class="red-pop" v-if="bagBool">
      <img
        src="@/assets/image/icon-bag-close.png"
        alt
        class="icon-close"
        @click="closeBag"
      />
      <div class="item-logo">
        <img src="@/assets/image/icon-logo.png" alt />
      </div>
      <div class="item-dec">已领取红包</div>
      <div class="item-price">
        {{ price }}
        <span class="item-unit">元</span>
      </div>
      <div class="item-tips">已存入账号</div>
      <div class="btn-use" @click="rightUse">立即使用</div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import User from "@/api/user";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "ShareCode",
  data() {
    return {
      id: this.$route.query.id,
      bagBool: false,
      price: ""
    };
  },
  methods: {
    rightUse() {
      this.$router.push("/");
    },
    closeBag() {
      // this.closeBag = false;
      this.$router.push("/");
    },
    async getBag() {
      let that = this;
      const { data, code } = await User.getRedBag({
        id: that.id
      });
      if (code == 200) {
        this.price = data;
        this.bagBool = true;
      } else if (code == 201) {
        Toast("红包已经领完了!");
        setTimeout(function() {
          that.$router.push("/");
        }, 2000);
      } else if (code == 202) {
        Toast("您已经领取过红包了!");
        setTimeout(function() {
          that.$router.push("/");
        }, 2000);
      }
    },
    backIndex() {
      this.$router.push("/");
    },
    async sharePage() {
      const { data } = await User.getWxSign({
        url: window.location.href
      });
      wxPageShare(data);
    }
  },
  mounted() {
    this.getBag();
    //this.sharePage();
  }
};
</script>
<style lang="scss" scoped>
.share-code {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  .share-code-top {
    height: 223px;
    background: url("../../assets/image/bag-top.png") no-repeat;
    background-size: 750px 223px;
  }
  .share-code-bottom {
    padding-top: 223px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    .share-code-bottom-in {
      width: 100%;
      height: 100%;
      background: url("../../assets/image/bag-bottom.png") no-repeat;
      background-size: cover;
      padding-top: 97px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .item-name {
        font-size: 60px;
        font-family: AliHYAiHei;
        font-weight: bold;
        color: #ffc74b;
      }
      .item-code {
        width: 550px;
        height: 550px;
        background-color: #fff;
        border-radius: 15px;
        padding: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px 0 13px;
        img {
          width: 460px;
          height: 460px;
        }
      }
      .item-dec {
        font-size: 24px;
        font-family: AliHYAiHei;
        font-weight: bold;
        color: #ce3e35;
      }
    }
  }

  .red-pop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 553px;
    height: 753px;
    padding-top: 67px;
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("../../assets/image/bag-bg.png") no-repeat;
    background-size: 553px 753px;
    .icon-close {
      width: 27px;
      height: 27px;
      position: absolute;
      left: 18px;
      top: 28px;
    }
    .item-logo {
      width: 93px;
      height: 93px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item-dec {
      margin: 25px 0 97px;
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
    .item-price {
      line-height: 1;
      font-size: 160px;
      color: #fff;
      display: flex;
      align-items: center;
      .item-unit {
        margin-top: 50px;
        font-size: 60px;
        color: #ffe629;
      }
    }
    .item-tips {
      color: #ffe629;
      font-size: 30px;
      margin: 30px 0 105px;
    }
    .btn-use {
      width: 404px;
      height: 86px;
      line-height: 86px;
      text-align: center;
      background: url("../../assets/image/btn-use.png") no-repeat;
      background-size: 404px 86px;
      border-radius: 10px;
      font-size: 34px;
      color: #fff;
    }
  }
}
</style>
