<template>
  <div class="payMent">
    <div class="desc-box">
      <div class="item">
        <div>订单金额</div>
        <div class="money">
          ￥
          <span>{{ price }}</span>
        </div>
      </div>
      <div class="item van-hairline--top" v-if="red_money > 0">
        <div>可使用红包抵扣</div>
        <div class="discount">
          <span class="discount-text" v-if="!checked"
            >红包可抵扣￥{{ red_money }}</span
          >
          <p class="discount-money" v-else>
            ￥
            <span>-{{ red_money }}</span>
          </p>
          <van-checkbox
            v-model="checked"
            checked-color="#F88706"
            icon-size="20"
            @change="changeRed"
          ></van-checkbox>
        </div>
      </div>
      <van-radio-group v-model="pay_type">
        <van-cell-group>
          <van-cell title="钱包支付" clickable @click="pay_type = 0">
            <van-radio slot="right-icon" :name="0" icon-size="20" />
          </van-cell>
          <van-cell title="微信支付" clickable @click="pay_type = 1">
            <van-radio slot="right-icon" :name="1" icon-size="20" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <!-- <div class="item">
        <span></span>
        <span class="share" @click="shaerFriends">分享可获取红包>></span>
      </div>-->
    </div>
    <p class="actual-pay">
      实付
      <span class="tag">￥</span>
      <span class="money">{{ realMoney }}</span>
    </p>
    <button class="btn" @click="payNow" :disabled="disabled">立即支付</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Order from "@/api/order";
import { Toast } from "vant";
import User from "@/api/user";
import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "PayMent",
  data() {
    return {
      disabled: false,
      checked: false,
      price: this.$route.query.price,
      red_money:
        parseFloat(this.$route.query.red_money) >
        parseFloat(this.$route.query.price)
          ? this.$route.query.price
          : this.$route.query.red_money,
      type: this.$route.query.type, // 1保修 2出险
      vin: this.$route.query.vin || "",
      carNumber: this.$route.query.carNumber || "",
      engineNumber: this.$route.query.engineNumber || "",
      band: this.$route.query.band || "",
      pay_type: 0,
      orderNumber: this.$route.query.orderNumber || ""
    };
  },
  computed: {
    ...mapState(["userInfo", "userId"]),
    realMoney() {
      if (this.checked) {
        if ((this.price * 100 - this.red_money * 100) / 100 <= 0) {
          return 0;
        } else {
          return (this.price * 100 - this.red_money * 100) / 100;
        }
      } else {
        return this.price;
      }
    }
  },
  methods: {
    changeRed() {},
    // 分享
    async shaerFriends() {
      Toast("点击右上角分享给朋友或朋友圈可获取红包");
      const { data, code } = await User.getWxSign({
        url: window.location.href
      });
      console.log(code);
      // wxShareFn(data, this.userId);
    },
    // 立即支付
    async payNow() {
      this.disabled = true;
      let that = this;
      const params = {
        id: this.userId,
        pay_type: this.pay_type,
        vin: this.vin,
        price: this.realMoney,
        money: this.$route.query.price,
        carNumber: this.carNumber,
        engineNumber: this.engineNumber,
        brand: this.band,
        orderNumber: this.orderNumber,
        red_money: this.checked ? this.red_money : 0
      };
      const { data, code } =
        Number(this.type) === 1
          ? await Order.getWeiBaoOrder(params)
          : await Order.getChuXianOrder(params);
      if (code === 0 || code === 200) {
        if (this.pay_type === 1) {
          this.wxJsApiPayFn(data);
        } else if (this.pay_type === 0) {
          // if (that.type == 2) {
          //   this.pollingFn(data);
          // } else {
          //   that.pollingFn(that.orderNumber);
          // }

          // Toast("成功提交订单，请5分钟内不要关闭网页");
          // this.$router.push("/");
          Toast("查询结果请留意短信");
          that.paySuccess();
        }
      } else if (code === 400) {
        this.disabled = false;
        Toast("已为您申请退款");
        this.$router.go(-1);
      } else if (code === 401) {
        Toast("余额不足");
        this.$router.push({ path: "/Recharge" });
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
        async function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // type == 2出险
            if (that.type == 2) {
              const orderNumber = await that.getOrderNumber(data.orderId);
              // that.pollingFn(orderNumber);
            } else {
              const orderNumber = await that.getOrderNumber(data.orderId);
              // that.pollingFn(that.orderNumber);
            }
            // Toast("成功提交订单，请5分钟内不要关闭网页");
            // that.$router.push("/");
            Toast("查询结果请留意短信");
            that.paySuccess();
          } else {
            Toast.fail("支付失败");
            that.disabled = false;
          }
        }
      );
    },
    paySuccess() {
      let that = this;
      this.$router.push({
        path: "/PaySuccess",
        query: { price: that.price }
      });
    },
    // 轮询
    pollingFn(orderNumber) {
      const timeR = setInterval(async () => {
        const { data, code } =
          this.type === 1
            ? await Order.getWblistInfo({
                orderNumber,
                id: this.userId,
                pay_type: this.pay_type
              })
            : Order.getCxlistInfo({
                orderNumber,
                id: this.userId,
                pay_type: this.pay_type
              });
        if (code === 200) {
          if ([1, 2].includes(Number(data.status))) {
            Toast.success("查询成功,刷新我的记录查看");
            window.clearInterval(timeR);
          }
        } else if (code === 400) {
          Toast("已为您申请退款");
          this.disabled = false;
        }
      }, 50000);
    },
    //  判断跳转详情页
    toDetail(orderNumber, type, status) {
      if (Number(status) !== 2) return Toast.fail("该状态不可查看");
      const path = type === 1 ? "/RepairDetail" : "InsureDetail";
      this.$router.push({ path, query: { orderNumber } });
    },
    // 假订单号获取订单号
    async getOrderNumber(orderId) {
      // const params = { orderId, id: this.userId };
      console.log(orderId);
      const { data, code } =
        this.type === 1
          ? await Order.getwbcxOrderNumber()
          : await Order.getcxOrderNumber();
      if (code === 200) {
        return data;
      }
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
.payMent {
  .desc-box {
    .item {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 140px;
      font-size: 30px;
      font-weight: 500;
      .money {
        font-size: 24px;
        span {
          color: #fe0000;
          font-size: 30px;
        }
      }
      .discount {
        display: flex;
        line-height: 40px;
        .discount-text {
          font-size: 22px;
          color: #999;
        }
        .discount-money {
          font-size: 26px;
          span {
            color: #fe0000;
            font-size: 30px;
            font-weight: 500;
          }
        }
        span {
          margin-right: 10px;
        }
      }
      .share {
        color: #f88706;
        font-weight: 500;
        font-size: 22px;
      }
    }
    /deep/.van-cell {
      line-height: 80px;
      font-size: 30px;
      padding-left: 30px;
      padding-right: 30px;
      font-weight: 500;
    }
  }
  .actual-pay {
    padding: 0 32px;
    font-size: 40px;
    text-align: right;
    padding-top: 110px;
    .tag {
      padding-left: 20px;
    }
    .money {
      color: #fe0000;
    }
  }
  .btn {
    width: 686px;
    height: 100px;
    background: #2aa146;
    border-radius: 50px;
    text-align: center;
    line-height: 100px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    // margin: 350px auto 60px;
    margin: 0 auto 60px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
  }
}
</style>
