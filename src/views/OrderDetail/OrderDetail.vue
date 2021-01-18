<template>
  <div class="order-detail">
    <div class="header">
      <div class="input-area">
        <form action=".">
          <input
            ref="serchInput"
            type="search"
            class="input"
            placeholder="输入搜索的车牌号/品牌/查询人手机号"
            v-model="content"
            @keypress="searchFn"
          />
          <!-- 为防止手机键盘点击搜索页面刷新 -->
          <input type="text" style="display:none;" />
        </form>
        <van-icon name="search" />
      </div>
      <div class="tabs-box">
        <div class="tabs">
          <div
            :class="['tabs-item', { active: item.status === active }]"
            v-for="(item, index) in tabList"
            :key="index"
            @click="active = item.status"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="order-list-box van-clearfix" v-if="orderList.length">
      <van-list
        :finished="finished"
        finished-text="没有更多了"
        v-model="loading"
        @load="load"
        :immediate-check="false"
      >
        <div
          class="list-item"
          v-for="(item, index) in orderList"
          :key="index"
          @click="toDetail(item.orderNumber, item.type, item.status)"
        >
          <!-- orderNumber, type, status -->
          <!-- item.orderId,  -->
          <div class="car-explain">
            <p>车&nbsp;&nbsp;&nbsp;型：{{ item.brandName }}</p>
            <p>车架号：{{ item.vin }}</p>
          </div>
          <div class="car-status van-hairline--top">
            <p>
              状&nbsp;&nbsp;&nbsp;&nbsp;态：
              <span :class="[getStatus(item.status, true)]">{{
                getStatus(item.status)
              }}</span>
            </p>
            <p>{{ item.createtime }}</p>
          </div>
        </div>
      </van-list>
    </div>

    <no-order v-if="!orderList.length && !loading"></no-order>
  </div>
</template>
<script>
import noOrder from "@/components/noOrder";
import Order from "@/api/order";
import { Toast } from "vant";
import { wxPageShare } from "@/utils/wxSdk.js";
import User from "@/api/user";

export default {
  name: "OrderDetail",
  components: { noOrder },
  data() {
    return {
      active: "",
      tabList: [
        {
          name: "全部",
          status: ""
        },
        {
          name: "查询中",
          status: 0
        },
        {
          name: "已完成",
          status: 1
        },
        {
          name: "退款",
          status: -1
        }
      ],
      orderList: [],
      pageNum: 1,
      pageSize: 10,
      loading: false,
      finished: false,
      orderStatus: "",
      content: ""
    };
  },
  watch: {
    active: {
      immediate: true,
      handler(status) {
        console.log(status);
        this.orderList = [];
        this.pageNum = 1;
        this.orderStatus = status; // ? status : "";

        this.getorderList();
      }
    }
  },
  methods: {
    // 获取对应的状态
    getStatus(status, style = false) {
      if (typeof status === "object") return;
      // if ([0, 1].includes(status)) {
      if (status === 0) {
        if (style) {
          return "unfinish";
        } else {
          return "查询中";
        }
      } else if (status === 1) {
        if (style) {
          return "finish";
        } else {
          return "已完成";
        }
      } else if (status === -1) {
        if (style) {
          return "refund";
        } else {
          return "退款";
        }
      } else if (status === 2) {
        if (style) {
          return "finish";
        } else {
          return "已完成";
        }
      }
    },
    // 获取订单列表
    async getorderList() {
      this.finished = false;
      this.loading = true;
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        status: this.orderStatus,
        content: this.content,
        id: this.$store.state.userId
      };
      const { data, code } = await Order.orderList(params);
      data ? (this.loading = false) : "";
      if (code === 200) {
        this.orderList = [...this.orderList, ...data.list];
        this.pageNum++;
        if (this.orderList.length >= data.Total) {
          this.finished = true;
        }
      }
    },
    // 搜索方法
    searchFn(event) {
      if (event.keyCode == 13) {
        event.preventDefault(); //禁止默认事件（默认是换行）
        this.content = event.target.value;
        this.pageNum = 1;
        this.orderList = [];
        this.getorderList();
        this.$refs["serchInput"].blur(); // 键盘失去焦点
      }
    },
    // 加载更多
    load() {
      this.getorderList();
    },
    //  判断跳转详情页
    toDetail(orderNumber, type, status) {
      if (Number(status) !== 1) return Toast.fail("该状态不可查看");
      const path = type === 0 ? "/RepairDetail" : "InsureDetail";
      this.$router.push({ path, query: { orderNumber } });
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
.order-detail {
  background-color: #f2f2f2;
  min-height: 100%;
  .header {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    .input-area {
      padding: 30px;
      position: relative;
      background-color: #fff;
      .input {
        width: 100%;
        height: 80px;
        background: rgba(242, 242, 242, 1);
        border: 1px solid rgba(153, 153, 153, 1);
        border-radius: 40px;
        padding: 0 65px;
        font-size: 26px;
        line-height: 40px;
      }
      .van-icon-search {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 50px;
        width: 30px;
        height: 30px;
      }
    }
    .tabs-box {
      background-color: #fff;
      .tabs {
        display: flex;
        box-shadow: 0px 15px 15px -15px rgba(0, 0, 0, 0.08);
        line-height: 90px;
        .tabs-item {
          width: 25%;
          text-align: center;
          font-size: 30px;
          &.active {
            color: #f88706;
            font-weight: bold;
          }
        }
      }
    }
  }
  .order-list-box {
    font-size: 28px;
    font-weight: 500;
    margin-top: 20px;
    p {
      line-height: 80px;
    }
    .list-item {
      background-color: #fff;
      margin-bottom: 20px;
      padding: 0 36px;
      .car-status {
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        .unfinsh {
          color: #d7010b;
        }
        .finish {
          color: #2aa146;
        }
        .refund {
          color: #999;
        }
      }
    }
  }
}
</style>
