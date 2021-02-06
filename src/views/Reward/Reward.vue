<template>
  <div>
    <div class="reward">
      <div class="reward-top">
        <swiper :bannerList="bannerList"></swiper>
      </div>
      <div class="item-title">选择套餐：</div>
      <div class="meal-list" v-for="(item, index) in mealList" :key="index">
        <div class="item" :class="{ active: mealIndex == index }">
          <div class="item-top">
            <div class="item-l">{{ item.name }}</div>
            <div class="item-r">
              <van-image
                :src="require('@/assets/image/ic_jin_small.png')"
              ></van-image>
              <span class="item-unit">{{ item.money }}/1小时</span>
            </div>
          </div>
          <div class="item-con">说明：{{ item.remark }}</div>
        </div>
      </div>
      <div class="item-title">选择时间：</div>
      <div class="sel-time">
        <div class="item current">
          <span class="item-t">今天12/18</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">今天12/18</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">今天12/18</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">周日12/19</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">周日12/19</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">周日12/19</span>
          <span class="item-b no-time">不可约</span>
        </div>
        <div class="item">
          <span class="item-t">周日12/19</span>
          <span class="item-b">可约</span>
        </div>
      </div>
      <div class="reward-tips bottom-tips">
        <span class="item-star">*</span
        >说明：请选择开始时间，系统将根据您选择的套餐自动计算结束时间。
      </div>
      <div class="time-list">
        <div class="item">
          <div class="item-time">00:00</div>
          <div class="item-time">01:00</div>
          <div class="item-time">02:00</div>
          <div class="item-time">03:00</div>
          <div class="item-time">04:00</div>
          <div class="item-time item-start">05:00</div>
        </div>
        <div class="item">
          <div class="item-time active">06:00</div>
          <div class="item-time item-end">07:00</div>
          <div class="item-time">08:00</div>
          <div class="item-time">09:00</div>
          <div class="item-time">10:00</div>
          <div class="item-time">11:00</div>
        </div>
        <div class="item">
          <div class="item-time">12:00</div>
          <div class="item-time">13:00</div>
          <div class="item-time">14:00</div>
          <div class="item-time">15:00</div>
          <div class="item-time">16:00</div>
          <div class="item-time">17:00</div>
        </div>
        <div class="item">
          <div class="item-time">18:00</div>
          <div class="item-time">19:00</div>
          <div class="item-time">20:00</div>
          <div class="item-time">21:00</div>
          <div class="item-time">22:00</div>
          <div class="item-time">23:00</div>
        </div>
      </div>
      <div class="reward-tips">
        下单须知：下单须知下单须知下单须知
      </div>
    </div>
    <div class="reward-bottom-replace"></div>
    <div class="reward-bottom">
      <div class="item-l"><span class="item-dec">合计金币：</span>500</div>
      <div class="item-r" @click="rightPay">立即支付</div>
    </div>

    <van-popup v-model="popSuccess" round closeable>
      <div class="center-pop">
        <van-image
          :src="require('@/assets/image/tan_ic_success.png')"
        ></van-image>
        <div class="pop-msg">支付成功</div>
        <div class="pop-dec">支付成功，尽快电话联系哦</div>
        <div class="pop-phone">
          {{ phone }}
          <van-image
            :src="require('@/assets/image/tan_ic_success.png')"
          ></van-image>
        </div>
        <div class="bottom-pop-btn" @click="confirmSuccess">确认</div>
      </div>
    </van-popup>

    <van-popup v-model="popForgetPwd" round closeable>
      <div class="center-pop">
        <div class="pop-msg">{{ warnTips }}</div>
        <div class="bottom-pop-btn">
          <div class="item-bottom-pop-btn">忘记密码</div>
          <div class="item-bottom-pop-btn">重试</div>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="lessMoney" round closeable>
      <div class="center-pop">
        <div class="pop-msg">{{ warnTips }}</div>
        <div class="bottom-pop-btn">
          <div class="item-bottom-pop-btn" @click="goRecharge">去充值</div>
        </div>
      </div>
    </van-popup>

    <van-popup v-model="inputPwdPop" round closeable>
      <div class="center-pop">
        <div class="pop-title">请输入支付密码</div>
        <div class="pop-price">
          <span class="item-unit">$</span> {{ totalMoney }}
        </div>
        <div class="pop-operate">
          <div class="item-operate">支付方式</div>
          <div class="item-operate" @click="onWallet">
            <van-image :src="require('@/assets/image/ic_card.png')"></van-image
            >我的钱包
          </div>
        </div>
        <div class="pwd-inp">
          <div
            class="item"
            @click="setFocus"
            v-for="(item, index) in 6"
            :key="index"
          >
            <div class="item-dot" v-if="pwdVal.length > index"></div>
          </div>
        </div>
      </div>
    </van-popup>

    <input
      ref="passwordref"
      v-model="pwdVal"
      :focus="focus"
      maxlength="6"
      type="number"
      class="hidden-input"
      @input="inputVal"
      @blur="setBlur"
    />
  </div>
</template>
<script>
import User from "@/api/user";
import Order from "@/api/order";
import Goods from "@/api/goods";

import swiper from "@/components/swiper";
export default {
  name: "reward",
  components: {
    swiper
  },
  data() {
    return {
      id: "",
      phone: "",
      bannerList: [],
      totalMoney: 0,
      warnTips: "", //支付密码错误，请重试     /     余额不足，请充值
      pwdVal: "",
      focus: false,
      popSuccess: false,
      popForgetPwd: false,
      inputPwdPop: true,
      isAndroid: /android/.test(window.navigator.userAgent.toLocaleLowerCase()),
      mealList: [],
      mealIndex: 0,
      lessMoney: false
    };
  },
  computed: {},
  created() {
    this.getMealList();
  },
  methods: {
    async getDetail() {
      const params = {
        teaID: this.$route.query.id
      };
      const { data, code } = await Goods.getDetail(params);
      if (code === 200) {
        this.bannerList = data.imgList;
        this.phone = data.teaTeacher.telephone;
      }
    },
    confirmSuccess() {
      this.$router.push("/order");
    },
    onWallet() {
      this.$router.push("/wallet");
    },
    goRecharge() {
      this.$router.push("/recharge");
    },
    async getMealList() {
      let params = {};
      let { code, data } = await User.getMealList(params);
      if (code == 200) {
        for (let i in data) {
          data[i].checked = false;
          data[i].price = "";
        }
        this.mealList = data;
        this.totalMoney = this.mealList && this.mealList[0].money;
      }
    },
    // 立即支付
    async rightPay() {
      let param = {
        order: {
          city: "广州",
          money: 1112321,
          setmealId: 1,
          setmealSize: 1,
          teaId: 8
        },
        timeList: ["2021-02-16 22:00:00"]
      };
      let { code, data } = await Order.addOrder(param);
      if (code == 200) {
        this.inputPwdPop = true;
        this.focus = true;
        this.id = data;
      }
    },
    getFocus() {
      this.focus = true;
    },
    setBlur() {
      this.focus = false;
    },
    setFocus() {
      this.focus = true;
      if (this.isAndroid) {
        window.addEventListener("resize", function() {
          if (
            document.activeElement.tagName === "input" ||
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "textarea" ||
            document.activeElement.tagName === "TEXTAREA"
          ) {
            window.setTimeout(function() {
              document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
          }
        });
      }
      this.$refs.passwordref.focus();
    },
    async inputVal() {
      if (this.pwdVal.length > 6) {
        this.pwdVal = this.pwdVal.substr(0, 6);
      }
      setTimeout(() => {
        this.pwdVal = this.pwdVal.replace(".", "");
      }, 0);
      if (this.pwdVal.length == 6) {
        let param = {
          id: this.id,
          telephone: this.pwdVal
        };
        let { code, message } = await Order.pay(param);
        if (code == 200) {
          this.popSuccess = true;
        } else if (code == 500) {
          this.warnTips = message;
          this.lessMoney = true;
        }
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pwd-inp {
  display: flex;
  margin: 0 10px 22px;
  border: 1px solid #d4d4d4;
  .item {
    flex: 1;
    height: 44px;
    border-right: 1px solid #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child {
      border-right: 0;
    }
    .item-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #000;
    }
  }
}

.reward {
  .reward-top {
    .van-image {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  }
  .item-title {
    margin: 0 16px 12px;
    font-size: 15px;
    color: #333333;
    line-height: 21px;
  }
  .meal-list {
    margin: 0 16px 20px;
    .item {
      &.active {
        border: 1px solid #d627fa;
        background: url("../../assets/image/choose_ic_gou.png") no-repeat top
          right;
        background-size: 30px;
      }
      border-radius: 2px;
      border: 1px solid #ececec;
      padding: 8px 12px;
      margin-bottom: 10px;
      .item-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #333333;
        line-height: 22px;

        .item-r {
          display: flex;
          align-items: center;
          line-height: 22px;
          .van-image {
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
        }
      }
      .item-con {
        margin-top: 10px;
        font-size: 13px;
        color: #999;
        line-height: 18px;
      }
    }
  }
}
.sel-time {
  display: flex;
  .item {
    flex: 1;
    font-size: 10px;
    color: #333;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.current {
      color: #d627fa;
    }
    .no-time {
      color: #f53838;
    }
  }
}
.reward-tips {
  margin: 8px 16px 12px;
  &.bottom-tips {
    margin-bottom: 30px;
  }
  font-size: 10px;
  color: #999;
  line-height: 14px;
  .item-star {
    color: #f53838;
  }
}
.time-list {
  margin: 0 16px;
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .item-time {
      width: 46px;
      height: 24px;
      border: 1px solid #d9d9d9;
      font-size: 13px;
      color: #333333;
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;

      &.item-start {
        border: 1px solid #d627fa;
        background: url("../../assets/image/choose_ic_shi.png") no-repeat top
          right;
        background-size: 16px;
      }
      &.item-end {
        border: 1px solid #d627fa;
        background: url("../../assets/image/choose_ic_zhong.png") no-repeat top
          right;
        background-size: 16px;
      }
      &.active {
        border: 1px solid #d627fa;
        background: url("../../assets/image/choose_ic_gou.png") no-repeat top
          right;
        background-size: 16px;
      }
    }
  }
}
.reward-bottom-replace {
  height: 100px;
}
.reward-bottom {
  box-shadow: 0px -4px 8px 0px rgba(58, 58, 58, 0.05);
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  align-items: center;
  height: 49px;
  padding-left: 16px;
  .item-l {
    color: #d627fa;
    flex: 1;
    font-size: 16px;

    .item-dec {
      font-size: 12px;
      color: #999;
    }
  }
  .item-r {
    width: 110px;
    height: 49px;
    background: linear-gradient(270deg, #53c8e1 0%, #f02dff 100%);

    font-size: 16px;
    color: #ffffff;
    line-height: 22px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
