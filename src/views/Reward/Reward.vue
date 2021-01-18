<template>
  <div>
    <div class="reward">
      <div class="reward-top">
        <van-image :src="require('@/assets/image/ic_xiala.png')"></van-image>
      </div>
      <div class="item-title">选择套餐：</div>
      <div class="meal-list">
        <div class="item">
          <div class="item-top">
            <div class="item-l">套餐一：怡宝龙井的</div>
            <div class="item-r">
              <van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image
              >500/1小时
            </div>
          </div>
          <div class="item-con">说明：这是套餐说明</div>
        </div>
      </div>
      <div class="item-title">选择时间：</div>
      <div class="sel-time">
        <div class="item">
          <span class="item-t">今天12/18</span>
          <span class="item-b">可约</span>
        </div>
        <div class="item">
          <span class="item-t">周日12/19</span>
          <span class="item-b">可约</span>
        </div>
      </div>
      <div class="reward-tips">
        <span class="item-star">*</span
        >说明：请选择开始时间，系统将根据您选择的套餐自动计算结束时间。
      </div>
      <div class="time-list">
        <div class="item">00:00</div>
        <div class="item">01:00</div>
        <div class="item">02:00</div>
        <div class="item">03:00</div>
        <div class="item">04:00</div>
        <div class="item">05:00</div>
        <div class="item">06:00</div>
        <div class="item">07:00</div>
        <div class="item">08:00</div>
        <div class="item">09:00</div>
        <div class="item">10:00</div>
        <div class="item">11:00</div>
        <div class="item">12:00</div>
        <div class="item">13:00</div>
        <div class="item">14:00</div>
        <div class="item">15:00</div>
        <div class="item">16:00</div>
        <div class="item">17:00</div>
        <div class="item">18:00</div>
        <div class="item">19:00</div>
        <div class="item">20:00</div>
        <div class="item">21:00</div>
        <div class="item">22:00</div>
        <div class="item">23:00</div>
      </div>
      <div class="reward-tips">
        下单须知：下单须知下单须知下单须知
      </div>
    </div>
    <div class="reward-bottom-replace"></div>
    <div class="reward-bottom">
      <div class="item-l"><span class="item-dec">合计金币：</span>500</div>
      <div class="item-r">立即支付</div>
    </div>

    <van-popup v-model="popShow" closeable>
      <div class="center-pop">
        <van-image
          :src="require('@/assets/image/tan_ic_success.png')"
        ></van-image>
        <div class="pop-msg">支付成功</div>
        <div class="pop-dec">支付成功，尽快电话联系哦</div>
        <div class="pop-phone">
          12312312312<van-image
            :src="require('@/assets/image/tan_ic_success.png')"
          ></van-image>
        </div>
        <div class="bottom-pop-btn">确认</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "reward",
  data() {
    return {
      tabsActive: ["1"]
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {},
  methods: {
    onChangeTab() {}
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.reward {
  .reward-top {
    .van-image {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .item-title {
    margin: 0 20px;
    font-size: 14px;
  }
  .meal-list {
    margin: 0 20px 40px;
    .item {
      border: 1px solid #eee;
      padding: 0 10px;
      margin-bottom: 10px;
      .item-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #333;
        .item-r {
          display: flex;
          align-items: center;
          .van-image {
            width: 20px;
            height: 20px;
          }
        }
      }
      .item-con {
        color: #999;
      }
    }
  }
}
.sel-list {
  display: flex;
  .item {
    flex: 1;
  }
}
.reward-tips {
  font-size: 12px;
  color: #999;
  .item-star {
    color: #f00;
  }
}
.reward-bottom-replace {
  height: 100px;
}
.reward-bottom {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  align-items: center;
  height: 100px;
  .item-l {
    color: #f00;
    .item-dec {
      color: #999;
    }
  }
  .item-r {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
