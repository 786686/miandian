<style scoped lang="scss">
  .item-top{
    margin: 4px 16px 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #D627FA;
    .van-image{
      width: 24px;
      height: 24px;
    }
  }
  .item-price{
    margin: 0 16px;
    border-bottom: 1px solid #E1E4E8;
    .item-num{
      text-align: center;
      font-weight: bold;
      .item-unit{
        font-size: 16px;
      }
      font-size: 34px;
      color: #333;
    }
    .item-btns{
      margin: 28px auto;
      display: flex;
      justify-content: center;
      .item-btn{
        width: 120px; height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 16px;
        margin-right: 48px; border-radius: 6px;
        background: linear-gradient(to right, #F02DFF,  #53C8E1 );
        &:nth-child(2){
          border: 1px solid #D627FA;
          background: #fff;
          color: #D627FA;
          margin-right: 0;
        }
      }
    }
  }
  .wallet-tips{
    margin: 12px 16px 0;
    .item-tip{
      margin-bottom: 11px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999999;
      .item-dec{
        text-decoration: underline;
      }
      .van-image{
        width: 20px; height: 20px; margin-right: 8px;
      }
    }
  }
  .item-recharge{
    margin: 0 16px;
    border-radius: 4px;
      border: 1px solid #ddd;
    .item-title{
      padding: 12px 0;
      text-align: center;
      font-size: 15px;
      color: #333333;
      line-height: 21px;
      font-weight: bold;
    }
    .item-dec{
      font-size: 13px;
      color: #999999;
      line-height: 18px;
      border-bottom: 1px solid #E1E4E8;;
      padding: 0 15px 13px;
    }
    .item-recharge-list{
      margin: 17px 15px 0;
      .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        .item-l{
          .van-image{
            width: 36px; height: 36px; margin-right: 10px;
          }
          .item-name{
            font-size: 14px;
            color: #333333;
            line-height: 20px;
          }
          .item-num{
            font-size: 13px;
            color: #999999;
            line-height: 18px;
          }
          display: flex;
          align-items: center;
        }
        .item-r{
          width: 74px;
          height: 26px;
          border-radius: 2px;
          border: 1px solid #D627FA;
          color: #D627FA;
          text-align: center;
          line-height: 24px;
          border-radius: 2px;
          font-size: 13px;
        }
      }
    }
  }
</style>

<template>
  <div>
    <div class="wallet">
      <div class="item-top">
        <van-image :src="require('@/assets/image/btn_set.png')"></van-image>
        余额明细
      </div>
      <div class="item-price">
        <div class="item-num"><span class="item-unit">$ </span>500.00</div>
        <div class="item-btns">
          <div class="item-btn" @click="recharge">充值</div>
          <div class="item-btn" @click="withdrawal">提现</div>
        </div>
      </div>
      <div class="wallet-tips">
        <div class="item-tip"><van-image :src="require('@/assets/image/ic_vedio.png')"></van-image><span class="item-dec">平台如何提现？</span></div>
        <div class="item-tip"><van-image :src="require('@/assets/image/ic_vedio.png')"></van-image><span class="item-dec">平台如何充值？</span></div>
      </div>
      <div class="item-recharge">
        <div class="item-title">接收充值银行卡</div>
        <div class="item-dec">
          这是说明，这是说明，这是说明，这是说明，这是说明，这是说明，这是说明，这是说明，这是说明
        </div>
        <div class="item-recharge-list">
          <div class="item">
            <div class="item-l">
              <van-image :src="require('@/assets/image/ic_card.png')"></van-image>
              <div class="item-msg">
                <div class="item-name">银行卡</div>
                <div class="item-num">121212121212</div>
              </div>
            </div>
            <div class="item-r">一键复制</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "wallet",
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    recharge(){
      this.$router.push("/recharge");      
    },
    withdrawal(){
      this.$router.push("/withdrawal");      
    },
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>

</style>
