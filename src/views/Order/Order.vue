<template>
  <div>
    <div class="order">
      <div class="nav">
        <div
          class="item-nav"
          :class="{ active: state === '' }"
          @click="stateClick('')"
        >
          全部
        </div>
        <div
          class="item-nav"
          :class="{ active: state == 1 }"
          @click="stateClick(1)"
        >
          待支付
        </div>
        <div
          class="item-nav"
          :class="{ active: state == 3 }"
          @click="stateClick(3)"
        >
          待销费
        </div>
        <div
          class="item-nav"
          :class="{ active: state == 2 }"
          @click="stateClick(2)"
        >
          待确认
        </div>
        <div
          class="item-nav"
          :class="{ active: state == 5 }"
          @click="stateClick(5)"
        >
          待评价
        </div>
        <div
          class="item-nav"
          :class="{ active: state === 0 }"
          @click="stateClick(0)"
        >
          已完成
        </div>
        <div
          class="item-nav"
          :class="{ active: state == 4 }"
          @click="stateClick(4)"
        >
          已取消
        </div>
      </div>
      <div class="order-list">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="item-top">
            <div class="item-top-l">
              <div class="item-de">订单编号：{{ item.orderNumber }}</div>
              <div class="item-time">预约时间：{{ item.time }}</div>
            </div>
            <!-- // 0:已完成，1:待支付，2:待确认，3待消费，4:已取消，5:待评价  -->
            <div class="item-top-r" :class="getStateClass(item.state)">
              {{ getState(item.state) }}
            </div>
          </div>

          <div class="item-msg">
            <div class="item-msg-l">
              <van-image :src="item.userUrl"></van-image>
              <div class="item-msg-person">
                <div class="item-name">{{ item.teaName }}</div>
                <div class="item-phone">
                  {{ item.telephone }}
                  <van-image
                    :src="require('@/assets/image/btn_call.png')"
                  ></van-image>
                </div>
              </div>
            </div>
            <div class="item-msg-r">
              <span class="item-unit">$</span> {{ item.money }}
            </div>
          </div>
          <div
            class="item-comment"
            v-for="(childItem, childIndex) in item.evaluateList"
            :key="childIndex"
          >
            <div class="item-comment-l">
              <van-image :src="childItem.teaUrl"></van-image>
            </div>
            <div class="item-comment-r">
              <div class="item-comment-top">
                <div class="item-comment-top-l">
                  <div class="item-name">{{ childItem.teaName }}</div>
                  <div class="item-time">{{ childItem.createTime }}</div>
                </div>
                <div class="item-comment-top-r">
                  <van-image
                    :src="require('@/assets/image/ic_star.png')"
                  ></van-image>
                </div>
              </div>
              <div class="item-comment-con">
                {{ childItem.remark }}
              </div>
            </div>
          </div>
          <div class="item-bottom">
            <div class="item-bottom-l">{{ item.setmealTime }}</div>
            <div class="item-bottom-r">
              <div class="item-clock" v-if="item.state == 2">
                <van-image
                  :src="require('@/assets/image/ic_time.png')"
                ></van-image
                >28:00
              </div>
              <div class="item-bottom-btns">
                <div
                  class="item-bottom-btn"
                  @click="onEvaluate(item.id)"
                  v-if="item.state == 5"
                >
                  立即评价
                </div>
                <div
                  class="item-bottom-btn"
                  @click="onDelete(item.id)"
                  v-if="
                    item.state == 0 ||
                      item.state == 1 ||
                      item.state == 4 ||
                      item.state == 5
                  "
                >
                  删除记录
                </div>
                <div
                  v-if="item.state == 0 || item.state == 5"
                  class="item-bottom-btn btn-color"
                  @click="onAgain(item.teaId)"
                >
                  再次打赏
                </div>
                <div
                  class="item-bottom-btn btn-color"
                  @click="onPay(item.id)"
                  v-if="item.state == 1"
                >
                  立即支付
                </div>
                <div
                  class="item-bottom-btn"
                  @click="onCancel(item.id)"
                  v-if="item.state == 3"
                >
                  取消订单
                </div>
                <div
                  class="item-bottom-btn btn-color"
                  @click="onConfirm(item.id)"
                  v-if="item.state == 2"
                >
                  立即确认
                </div>
              </div>
            </div>
          </div>
          <div class="item-tip" v-if="item.state == 2">
            已发起确认，如30min内未确认，系统将自动确认。
          </div>
        </div>
      </div>
      <van-popup v-model="popShow" round>
        <div class="center-pop">
          <div class="pop-msg">
            {{ warnTips }}
          </div>
          <div class="bottom-pop-btn">
            <div class="item-bottom-pop-btn" @click="confirm">
              确认取消
            </div>
            <div class="item-bottom-pop-btn" @click="popShow = false">
              暂不取消
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import Order from "@/api/order";
import { Toast } from "vant";

export default {
  name: "order",
  data() {
    return {
      warnTips: "", //说明：取消订单，系统将收取5%的平台服务费，请知悉！    你确定要删除该订单吗？
      list: [],
      current: "",
      pageNo: 1,
      id: "",
      state: "",
      popShow: false,
      payPop: ""
    };
  },
  computed: {},
  created() {
    this.getList();
  },
  methods: {
    getState(state) {
      switch (state) {
        case "0":
          return "已完成";
        case "1":
          return "待支付";
        case "2":
          return "待确认";
        case "3":
          return "待消费";
        case "4":
          return "已取消";
        case "5":
          return "待评价";
      }
    },
    getStateClass(state) {
      if (state == 0) {
        return "item-normal";
      } else if (state === 4) {
        return "item-gray";
      }
    },
    async confirm() {
      let params = {};
      if (this.isDelete) {
        params.id = this.id;
      } else {
        params = {
          id: this.id,
          state: 4 //	是	String	4：取消订单，2：待确认 ，5：待评价
        };
      }
      if (this.isDelete) {
        let { code } = await Order.delete(params);
        if (code == 200) {
          Toast("删除订单成功");
          this.stateClick();
        }
      } else {
        let { code } = await Order.update(params);
        if (code == 200) {
          Toast("取消订单成功");
          this.stateClick();
        }
      }
    },
    async onConfirm(id) {
      let params = {
        id: id,
        state: 5
      };
      let { code } = await Order.update(params);
      if (code == 200) {
        Toast("确认订单成功");
        this.stateClick();
      }
    },
    onDelete(id) {
      this.id = id;
      this.warnTips = "你确定删除该订单吗？";
      this.popShow = true;
    },
    onAgain(id) {
      this.$router.push({ path: "/reward", query: { id } });
    },
    onPay(id) {
      this.id = id;
      this.payPop = true;
    },
    onCancel(id) {
      this.id = id;
      this.warnTips = "说明：取消订单，系统将收取5%的平台服务费，请知悉！";
      this.popShow = false;
    },
    onEvaluate(id) {
      let param = {
        id: id
      };
      this.$router.push({ path: "/Evaluate", query: param });
    },
    stateClick(state) {
      this.state = state;
      this.pageNo = 1;
      this.list = [];
      this.getList();
    },
    async getList() {
      let params = {
        pageNo: this.pageNo,
        pageSize: 10,
        state: this.state, // 0:已完成，1:待支付，2:待确认，3待消费，4:已取消，5:待评价
        type: "1" //1男用户u，2女用户
      };
      let { code, data } = await Order.list(params);
      if (code == 200) {
        this.list = data.orderList;
        this.pageNo++;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.order {
  .nav {
    border-bottom: 1px solid #e1e4e8;
    height: 48px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    .item-nav {
      // flex: 1;
      margin: 0 7px;
      color: #666;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      &.active {
        color: #d627fa;
        border-bottom: 4px solid #d627fa;
      }
      font-size: 13px;
      line-height: 18px;
    }
  }
}
.order-list {
  .item {
    padding: 0 16px;
    border-bottom: 10px solid #f1f1f1;
    .item-top {
      border-bottom: 1px solid #e1e4e8;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
      .item-top-l {
        font-size: 12px;
        color: #999999;
        line-height: 18px;
      }
      .item-top-r {
        font-size: 14px;
        color: #f53838;
        line-height: 20px;
        &.item-gray {
          color: #999;
        }
        &.item-normal {
          color: #333;
        }
      }
    }

    .item-msg {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;

      .item-msg-l {
        display: flex;
        align-items: center;
        .van-image {
          border-radius: 50%;
          overflow: hidden;
          width: 44px;
          height: 44px;
          margin-right: 6px;
        }
      }
      .item-msg-r {
        font-weight: bold;
        font-size: 20px;
        color: #333333;
        line-height: 28px;
        .item-unit {
          line-height: 22px;
          font-size: 16px;
        }
      }
      .item-name {
        font-size: 16px;
        color: #333333;
        line-height: 22px;
      }
      .item-phone {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #999999;
        line-height: 18px;
        .van-image {
          border-radius: 50%;
          overflow: hidden;
          margin-left: 6px;
          width: 28px;
          height: 28px;
        }
      }
    }
    .item-comment {
      background: #fdf6ff;
      border-radius: 4px;
      display: flex;
      padding: 6px 6px 10px;
      .item-comment-l {
        .van-image {
          border-radius: 50%;
          overflow: hidden;
          width: 40px;
          height: 40px;
          margin-right: 6px;
        }
      }
      .item-comment-r {
        flex: 1;
        .item-comment-top {
          justify-content: space-between;
          display: flex;
          align-items: center;
          margin-bottom: 7px;
        }
        .item-comment-top-l {
          display: flex;
        }
        .item-comment-top-r {
          display: flex;
          align-items: center;
          .van-image {
            width: 16px;
            height: 16px;
            margin-left: 4px;
          }
        }
        .item-name {
          font-size: 14px;
          color: #333333;
          line-height: 20px;
        }
        .item-time {
          margin-left: 10px;
          font-size: 12px;
          color: #999999;
          line-height: 17px;
        }
      }
      .item-comment-con {
        font-size: 14px;
        color: #666666;
        line-height: 20px;
      }
    }
    .item-bottom {
      border-top: 1px solid #e1e4e8;
      display: flex;
      align-items: center;
      .item-bottom-l {
        font-size: 13px;
        color: #333333;
        line-height: 18px;
      }
      .item-bottom-r {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        padding: 10px 0;
        align-items: center;
        .item-clock {
          display: flex;
          justify-content: flex-end;
          font-size: 11px;
          color: #f53838;
          line-height: 16px;
          padding-right: 6px;
          .van-image {
            width: 16px;
            height: 16px;
            margin-right: 2px;
          }
        }
        .item-bottom-btns {
          display: flex;
          align-items: center;

          .item-bottom-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            border: 1px solid #d627fa;
            font-size: 14px;
            color: #d627fa;
            line-height: 20px;
            margin-left: 8px;
            width: 80px;
            height: 30px;
            &:first-child {
              margin-left: 0;
            }
            &.btn-color {
              color: #fff;
              border: none;
              background: linear-gradient(270deg, #53c8e1 0%, #f02dff 100%);
            }
          }
        }
      }
    }
    .item-tip {
      font-size: 11px;
      color: #999999;
      line-height: 16px;
      padding-bottom: 10px;
    }
  }
}
</style>
