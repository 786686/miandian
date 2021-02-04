
<style lang="scss" scoped>
  .order{
    .nav{
      border-bottom: 1px solid #E1E4E8;;
      height: 48px;
      align-items: center;
      display: flex;
      justify-content: space-around;
      .item-nav{
        // flex: 1;
        margin: 0 7px;
        color: #666;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        &.active{
          color: #D627FA;
          border-bottom: 4px solid #D627FA;
        }
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
  .order-list{
    .item{
      padding: 0 16px;
      border-bottom: 10px solid #F1F1F1;
      .item-top{
        border-bottom: 1px solid #E1E4E8;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        .item-top-l{
          font-size: 12px;
          color: #999999;
          line-height: 18px;
        }
        .item-top-r{
          font-size: 14px;
          color: #F53838;
          line-height: 20px;
        }
      }

      .item-msg{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        
        .item-msg-l{
          display: flex;
          align-items: center;
          .van-image{
            border-radius: 50%;
            overflow: hidden;
            width: 44px; height: 44px; margin-right: 6px;
          }
        }
        .item-msg-r{
          font-weight: bold;
          font-size: 20px;
          color: #333333;
          line-height: 28px;
          .item-unit{
          line-height: 22px;
            font-size: 16px;
          }
        }
        .item-name{
          font-size: 16px;
          color: #333333;
          line-height: 22px;
        }
        .item-phone{
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #999999;
          line-height: 18px;
          .van-image{
            border-radius: 50%;
            overflow: hidden;
            margin-left: 6px;
            width: 28px;
            height: 28px;
          }
        }
      }
      .item-comment{
        background: #FDF6FF;
        border-radius: 4px;
        display: flex;
        padding: 6px 6px 10px;
        .item-comment-l{
          .van-image{
          border-radius: 50%; overflow: hidden;
          width: 40px; height: 40px; margin-right: 6px;
          }
        }
        .item-comment-r{
          flex: 1;
          .item-comment-top{
            justify-content: space-between;
            display: flex;
            align-items: center;
            margin-bottom: 7px;
          }
          .item-comment-top-l{
            display: flex;
          }
          .item-comment-top-r{
            display: flex;
            align-items: center;
            .van-image{
              width: 16px; height: 16px; margin-left: 4px;
            }
          }
          .item-name{
            font-size: 14px;
            color: #333333;
            line-height: 20px;
          }
          .item-time{
            margin-left: 10px;
            font-size: 12px;
            color: #999999;
            line-height: 17px;
          }
        }
        .item-comment-con{
          font-size: 14px;
          color: #666666;
          line-height: 20px;
        }
      }
      .item-bottom{
        border-top: 1px solid #E1E4E8;
        display: flex;
        align-items: center;
        .item-bottom-l{
          font-size: 13px;
          color: #333333;
          line-height: 18px;
        }
        .item-bottom-r{
          display: flex;
          justify-content: flex-end;
          flex: 1;
          padding: 10px 0;
          align-items: center;
          .item-clock{
              display: flex;
              justify-content: flex-end;
              font-size: 11px;
              color: #F53838;
              line-height: 16px;
              padding-right: 6px;
              .van-image{
                width: 16px; height: 16px;
                margin-right: 2px;
              }
            }
          .item-bottom-btns{
            display: flex;
            align-items: center;
            
            .item-bottom-btn{
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 2px;
              border: 1px solid #D627FA;
              font-size: 14px;
              color: #D627FA;
              line-height: 20px;
              margin-left: 8px;
              width: 80px;
              height: 30px;
              &:first-child{
                margin-left: 0;
              }
              &.btn-color{
                color: #fff;
              border: none;
                background: linear-gradient(270deg, #53C8E1 0%, #F02DFF 100%);
              }
            }
          }
        }
      }
      .item-tip{
        font-size: 11px;
        color: #999999;
        line-height: 16px;
        padding-bottom: 10px;
      }
    }

  }
</style>
<template>
<div>
  <div class="order">
    <div class="nav">
      <div class="item-nav active">全部</div>
      <div class="item-nav">待支付</div>
      <div class="item-nav">待销费</div>
      <div class="item-nav">待确认</div>
      <div class="item-nav">待评价</div>
      <div class="item-nav">已完成</div>
      <div class="item-nav">已取消</div>
    </div>
    <div class="order-list">
      <div class="item">
        <div class="item-top">
          <div class="item-top-l">
            <div class="item-de">订单编号：45342554252</div>
            <div class="item-time">预约时间：2020-10-08 10:00-12:00</div>
          </div>
          <div class="item-top-r">
            已完成
          </div>
        </div>
        <div class="item-msg">
          <div class="item-msg-l">
            <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
            <div class="item-msg-person">
              <div class="item-name">王强</div>
              <div class="item-phone">13534253456 <van-image :src="require('@/assets/image/btn_call.png')"></van-image></div>
            </div>
          </div>
          <div class="item-msg-r"><span class="item-unit">$</span> 500.00</div>
        </div>
        <div class="item-comment">
          <div class="item-comment-l">
            <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
          </div>
          <div class="item-comment-r">
            <div class="item-comment-top">
              <div class="item-comment-top-l">
                <div class="item-name">王强</div>
                <div class="item-time">2020-12-12</div>
              </div>
              <div class="item-comment-top-r">
                <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
              </div>
            </div>
            <div class="item-comment-con">不错不错，还会回购，技术很好，值得推荐，值得推荐，值得推荐…</div>
          </div>
        </div>
        <div class="item-bottom">
          <div class="item-bottom-l">2020-10-08  09:00</div>
          <div class="item-bottom-r">
            <div class="item-clock"><van-image :src="require('@/assets/image/ic_time.png')"></van-image>28:00</div>
            <div class="item-bottom-btns">
              <div class="item-bottom-btn">删除记录</div>
              <div class="item-bottom-btn btn-color">再次打赏</div>
              <!-- <div class="item-bottom-btn btn-color">立即支付</div> -->
              <!-- <div class="item-bottom-btn">取消订单</div>
              <div class="item-bottom-btn btn-color">立即确认</div>
              <div class="item-bottom-btn">立即评价</div> -->
            </div>
          </div>
        </div>
        <div class="item-tip">西湖龙井已发起确认，如30min内未确认，系统将自动确认。</div>
      </div>
    </div>
    <van-popup v-model="popShow" round>
        <div class="center-pop">
          <div class="pop-msg">
            说明：取消订单，系统将收取5%的平台服务费，请知悉！
          </div>
          <div class="bottom-pop-btn">
            <div class="item-bottom-pop-btn">确认取消</div>
            <div class="item-bottom-pop-btn">暂不取消</div>
          </div>
        </div>
    </van-popup>

  </div>

</div>
</template>
<script>

import { mapState } from "vuex";
import Order from "@/api/order";

export default {
  name: "changecity",
  data() {
    return {
      list:[],
      current: "",
      pageNo: 1,
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(){
      let params = {
        pageNo: this.pageNo,
        pageSize: 10,
        state: "0",// 0:已完成，1:待支付，2:待确认，3待消费，4:已取消，5:待评价
        type:"1"//1男用户u，2女用户
      }
      let {code,data} = await Order.list(params);
      if(code == 200){
        this.list = data;
      }
    }
    
  },
  mounted() {}
};
</script>