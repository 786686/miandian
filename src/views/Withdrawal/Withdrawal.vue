<style scoped lang="scss">
  .withdrawal{
    padding: 0 16px;
    .item-title{
      font-size: 15px;
      color: #333333;
      line-height: 21px;
      padding: 15px 0;
    }
    .item-card-list{
      display: flex;
      .item-card{
        height: 48px;
        background: #FFFFFF;
        border-radius: 2px;
        font-size: 16px;
        border: 1px solid #D8D8D8;
        color: #999;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active{
          border: 1px solid #D627FA;
          color: #D627FA;
        }
        &:last-child{
          margin-left: 23px;
        }
      }
    }
    .item-inp{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      background: #FFFFFF;
      border-radius: 2px;
      border: 1px solid #D8D8D8;
      font-size: 16px;
      color: #333;
      .van-cell{
        padding: 0;
        ::v-deep .van-field__control{
          text-align: center;
        }
      }
    }
    .item-price-tips{
      font-size: 12px;
      color: #B9B9B9;
      line-height: 17px;
      margin: 8px 0 25px;
      text-align: right;
    }
    .btns{
      display: flex;
      justify-content: center;
      .btn{
        width: 150px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
      }
    }
    .item-tips{
      font-size: 13px;
      color: #999999;
      line-height: 18px;
      margin-bottom: 20px;
    }
    .item-phone-list{
      .item{
        display: flex;
        justify-content: center;
        .item-in{
          padding: 6px;
          border-radius: 2px;
          border: 1px solid #D8D8D8;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;

          
font-size: 16px;
color: #999999;

          .van-image{
            width:28px; height: 28px; margin-right: 7px; 
          }
        }
      }
    }
  }
</style>

<template>
  <div>
    <div class="withdrawal">
      <div class="item-title">选择提现银行：</div>
      <div class="item-card-list">
        <div class="item-card active">银行一</div>
        <div class="item-card">银行二</div>
      </div>
      <div class="item-title">请输入银行卡号：</div>
      <div class="item-inp">
        <van-field placeholder="点击输入银行卡号"></van-field>
      </div>
      <div class="item-title">请输入银行卡号：</div>
      <div class="item-inp">
        <van-field placeholder="点击输入银行卡号"></van-field>
      </div>
      <div class="item-price-tips">提现金额不得超过钱包余额</div>
      <div class="btns">
        <div class="btn" @click="next">下一步</div>
      </div>
      <div class="item-tips">
        常见问题：<br>
        1.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br>
          解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。<br>
        2.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br>
          解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。<br>
        3.问题：这是问题描述，这是问题描述，这是问题描述，这是问题描述。<br>
          解决：这是解决描述，这是解决描述，这是解决描述，这是解决描述。
      </div>
      <div class="item-phone-list">
        <div class="item">
          <div class="item-in">
            <van-image :src="require('@/assets/image/btn_call.png')"></van-image>020-87685948
          </div>
        </div>
        <div class="item">
          <div class="item-in">
            <van-image :src="require('@/assets/image/btn_call.png')"></van-image>020-87685948
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Withdrawal",
  data() {
    return {

    };
  },
  computed: {},
  created() {},
  methods: {
    next(){
      this.$router.push("/InputPwd");      
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>
