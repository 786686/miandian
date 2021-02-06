<template>
  <div>
    <div class="withdrawal">
      <div class="item-title">选择充值银行：</div>
      <div class="item-card-list">
        <div
          class="item-card"
          :class="{ active: index == bankIndex }"
          v-for="(item, index) in bankList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="item-title">输入充值金额：</div>
      <div class="item-inp">
        <van-field placeholder="点击输入充值金额" v-model="number"></van-field>
      </div>
      <div class="item-title">输入转账编号后6位：</div>
      <div class="item-inp">
        <van-field
          placeholder="点击输入转账编号后6位"
          v-model="code"
        ></van-field>
      </div>
      <div class="item-price-tips">充值金额不得超过钱包余额</div>
      <div class="btns">
        <div class="btn" @click="confirmRecharge">确认充值</div>
      </div>
      <div class="item-tips">
        常见问题：<br />
        1.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br />
        解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。<br />
        2.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br />
        解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。<br />
        3.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br />
        解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。
      </div>
      <div class="item-phone-list">
        <div class="item" v-for="(item, index) in phoneList" :key="index">
          <div class="item-in">
            <van-image :src="require('@/assets/image/btn_call.png')"></van-image
            >{{ item.iPhone }}
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="popShow" closeable round>
      <div class="center-pop">
        <van-image
          :src="require('@/assets/image/tan_ic_success.png')"
        ></van-image>
        <div class="pop-msg">
          您已提交充值确认成功，客服会尽快跟您确认。确认通过后系统将金额转入您的钱包，请耐心等待
        </div>
        <div class="bottom-pop-btn" @click="confirm">确定</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Goods from "@/api/goods";
import User from "@/api/user";
export default {
  name: "Withdrawal",
  data() {
    return {
      bankIndex: 0,
      popShow: false,
      phoneList: [],
      code: "",
      number: "",
      bankList: [{ name: "银行卡一" }]
    };
  },
  computed: {},
  created() {
    this.getPhoneList();
  },
  methods: {
    async getPhoneList() {
      let { code, data } = await Goods.getPhoneList();
      if (code == 200) {
        this.phoneList = data;
      }
    },
    async confirmRecharge() {
      let param = {
        bankName: "", //	是	String	银行名称，充值时不能为空
        bankCode: "", //	是	String	银行卡号，提现时不能为空
        city: "", //	是	String	城市
        code: this.code, //	是	String	转账编号后6位
        number: this.number, //	是	double	金额
        role: localStorage.type, //	是	String	角色，1男用户，2女用户
        type: "0", //	是	String	0充值，1提现
        payPassword: "" //	是	String	支付密码，提现时不能为空
      };
      let { code } = await User.invest(param);
      if (code == 200) {
        this.popShow = true;
      }
    },
    confirm() {
      this.popShow = false;
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.withdrawal {
  padding: 0 16px;
  .item-title {
    font-size: 15px;
    color: #333333;
    line-height: 21px;
    padding: 15px 0;
  }
  .item-card-list {
    display: flex;
    .item-card {
      height: 48px;
      background: #ffffff;
      border-radius: 2px;
      font-size: 16px;
      border: 1px solid #d8d8d8;
      color: #999;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active {
        border: 1px solid #d627fa;
        color: #d627fa;
      }
      &:last-child {
        margin-left: 23px;
      }
    }
  }
  .item-inp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: #ffffff;
    border-radius: 2px;
    border: 1px solid #d8d8d8;
    font-size: 16px;
    color: #333;
    .van-cell {
      padding: 0;
      ::v-deep .van-field__control {
        text-align: center;
      }
    }
  }
  .item-price-tips {
    font-size: 12px;
    color: #b9b9b9;
    line-height: 17px;
    margin: 8px 0 25px;
    text-align: right;
  }
  .btns {
    display: flex;
    justify-content: center;
    .btn {
      width: 150px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }
  }
  .item-tips {
    font-size: 13px;
    color: #999999;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .item-phone-list {
    .item {
      display: flex;
      justify-content: center;
      .item-in {
        padding: 6px;
        border-radius: 2px;
        border: 1px solid #d8d8d8;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        font-size: 16px;
        color: #999999;

        .van-image {
          width: 28px;
          height: 28px;
          margin-right: 7px;
        }
      }
    }
  }
}
</style>
