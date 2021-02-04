<style scoped lang="scss">
  .details-top{
    padding-left: 16px;
    height: 60px;
    background: #F6F6F6;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .item-top{
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #333333;
      line-height: 21px;
    }
    .item-bottom{
      margin-top: 5px;
      font-size: 13px;
      color: #999999;
      line-height: 18px;
      display: flex;
      .item-dec{
        margin-right: 20px;
      }
    }
  }
  .details-list{
    .item{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      margin: 0 16px;
      border-bottom: 1px solid #E1E4E8;
      .van-image{
        width: 44px;
        height: 44px; margin-right: 12px;
        border-radius: 50%;
      }
      .item-l{
        display: flex;
        .item-l-msg{
          display: flex;
        flex-direction: column;
        }
      }
      .item-name{
          font-size: 14px;
          color: #333333;
          line-height: 20px;
          margin-bottom: 4px;
      }
      .item-time{
        
        font-size: 14px;
        color: #999999;
        line-height: 20px;
      }
      .item-r{
        &.item-red{
          color: #F53838;
        }
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          line-height: 22px;
          
      }
.item-status{
  
        font-size: 12px;
        color: #F53838;
        line-height: 17px;

            position: absolute;
            right: 0;
            bottom: 6px;
          }
    }
  }
</style>

<template>
  <div>
    <div class="details-top">
      <div class="item-top">
        2020年10月
        <van-icon name="arrow-down" size="14"></van-icon>
      </div>
      <div class="item-bottom">
        <div class="item-dec">支出&nbsp;&nbsp;500.00</div>
        <div class="item-dec">充值&nbsp;&nbsp;10000.00</div>
      </div>
    </div>
    <div class="details-list">
      <div class="item">
        <div class="item-l">
          <van-image src=""></van-image>
          <div class="item-l-msg">
            <div class="item-name">王强</div>
            <div class="item-time">2020-10-10 10:00</div>
          </div>
        </div>
        <div class="item-r">
          -500.00
        </div>
        <div class="item-status">审核中…</div>
      </div>
      <div class="item">
        <div class="item-l">
          <van-image src=""></van-image>
          <div class="item-l-msg">
            <div class="item-name">王强</div>
            <div class="item-time">2020-10-10 10:00</div>
          </div>
        </div>
        <div class="item-r item-red">
          <!-- 价格变多就红色 -->
          +500.00
        </div>
        <div class="item-status">审核中…</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BalanceDetails",
  data() {
    return {

    };
  },
  computed: {},
  created() {},
  methods: {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">

</style>
