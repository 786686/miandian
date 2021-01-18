<template>
  <div class="reCharge">
    <swiper :bannerList="bannerList"></swiper>
    <div class="charge-box">
      <div class="money">
        <p class="account">账户余额</p>
        <p class="count">
          <span>￥</span>
          <span>{{ userInfo.money }}</span>
        </p>
      </div>
    </div>
    <div class="option-box">
      <div
        :class="['option-item', { active: index === activeIndex }]"
        v-for="(item, index) in moneyList"
        :key="index"
        @click="activeIndex = index"
      >
        <p>
          ￥
          <span>{{ item.addAcount }}</span>
        </p>
        <div class="tag" v-if="item.sendAcount">
          <img src="@/assets/image/tag.png" alt />
          <span class="give-money-count">送{{ item.sendAcount }}</span>
        </div>
      </div>
    </div>
    <div class="other-money">
      <div class="input-box">
        <p>其他金额：</p>
        <input
          type="number"
          placeholder="请输入10-1000的整数倍金额"
          ref="input"
          v-model="otherMoney"
          @blur="blur"
        />
      </div>
    </div>
    <div class="btn" @click="rechargeMoney">立即充值</div>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import User from "@/api/user";
import { mapState } from "vuex";
import { Toast } from "vant";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "reCharge",
  components: { swiper },
  data() {
    return {
      moneyList: [
        // {
        //   chargeMoney: 1,
        //   sendAcount: 0
        // },
        // {
        //   chargeMoney: 10,
        //   sendAcount: 0
        // },
        // {
        //   chargeMoney: 100,
        //   sendAcount: 0
        // },
        // {
        //   chargeMoney: 200,
        //   sendAcount: 50
        // },
        // {
        //   chargeMoney: 300,
        //   sendAcount: 100
        // },
        // {
        //   chargeMoney: 500,
        //   sendAcount: 200
        // }
      ],
      activeIndex: 0,
      otherMoney: ""
    };
  },
  watch: {
    otherMoney: {
      handler(val) {
        if (val) {
          this.activeIndex = -1;
        }
      }
    }
  },
  computed: {
    ...mapState(["userId", "userInfo"]),
    bannerList() {
      return this.$store.state.bannerList;
    },
    chooseMoney() {
      return (
        this.moneyList.find((_, index) => index === this.activeIndex) || {}
      );
    }
  },
  created() {
    this.getRechargeList();
  },
  methods: {
    // 获取金额列表
    async getRechargeList() {
      const { data, code } = await User.getRechargeList({});
      console.log(data);
      this.moneyList = data;
    },
    // 充值
    async rechargeMoney() {
      const { addAcount, sendAcount } = this.chooseMoney;
      const params = {
        id: this.userId,
        add_money: this.otherMoney || addAcount,
        send_money: sendAcount || 0,
        real_money: this.otherMoney || addAcount
      };
      const { data, code } = await User.rechargeMoney(params);
      if (code === 200) {
        this.wxJsApiPayFn(data);
      }
    },
    // 微信JsApi支付
    wxJsApiPayFn(data) {
      const that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: data.signature.appId, //公众号名称，由商户传入
          timeStamp: String(data.signature.timestamp), //时间戳，自1970年以来的秒数
          nonceStr: data.signature.nonce, //随机串
          package: data.signature.pack,
          signType: "MD5", //微信签名方式：
          paySign: data.signature.signature //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            that.$router.push("/my");
            Toast.success("充值成功");
          } else {
            Toast.fail("充值失败");
          }
        }
      );
    },
    ToastFn(type) {
      type === 1 ? Toast.success(`充值成功`) : Toast.fail(`充值成功`);
    },
    // 修复输入框失焦bug
    blur() {
      window.scrollTo(0, 0);
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
.<style lang="scss" scoped>
.reCharge {
  .charge-box {
    padding: 50px 32px 0;
    .money {
      font-weight: 500;
      padding: 0 32px;
      width: 100%;
      height: 150px;
      border: 1px solid #f2f2f2;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .account {
        font-weight: bold;
        font-size: 30px;
      }
      .count {
        span {
          &:first {
            font-size: 26px;
            color: #333;
          }
          &:last-of-type {
            font-size: 30;
            color: #fe0000;
          }
        }
      }
    }
  }
  .option-box {
    padding: 40px 32px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .option-item {
      width: 214px;
      height: 100px;
      border: 1px solid #f88706;
      border-radius: 10px;
      text-align: center;
      line-height: 100px;
      font-size: 26px;
      margin-bottom: 20px;
      font-weight: bold;
      position: relative;
      span {
        font-size: 30px;
      }
      .tag {
        position: absolute;
        top: 0;
        right: 0;
        img {
          width: 102px;
          height: 62px;
          display: block;
        }
        .give-money-count {
          font-weight: 500;
          font-size: 16px;
          color: #fff;
          position: absolute;
          top: 0px;
          right: 5px;
          line-height: 24px;
        }
      }
    }
    .active {
      background-color: #f88706;
      color: #fff;
    }
  }
  .other-money {
    padding: 0 32px;
    .input-box {
      border: 1px solid #f88706;
      border-radius: 10px;
      height: 100px;
      width: 100%;
      display: flex;
      padding: 0 25px;
      p {
        line-height: 100px;
        font-weight: bold;
        font-size: 30px;
        color: #f88706;
      }
      input {
        width: 450px;
        border: none;
        font-size: 30px;
        line-height: 50px;
        padding-top: 10px;
      }
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
    margin: 40px auto 0;
  }
}
</style>
