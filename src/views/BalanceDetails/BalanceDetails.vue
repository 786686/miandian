<template>
  <div>
    <div class="details-top">
      <div class="item-top">
        {{ year }}年{{ month }}月
        <van-icon name="arrow-down" size="14"></van-icon>
      </div>
      <div class="item-bottom">
        <div class="item-dec">支出&nbsp;&nbsp;{{ detailItem.totalPay }}</div>
        <div class="item-dec">充值&nbsp;&nbsp;{{ detailItem.totalIn }}</div>
      </div>
    </div>
    <div class="details-list">
      <div
        class="item"
        v-for="(item, index) in detailItem.finances"
        :key="index"
      >
        <div class="item-l">
          <van-image
            :src="
              item.bank == 0
                ? require('@/assets/image/mingxi_ic_ti.png')
                : item.url
            "
          ></van-image>
          <div class="item-l-msg">
            <div class="item-name">{{ item.name }}</div>
            <div class="item-time">{{ item.startTime }}</div>
          </div>
        </div>
        <div class="item-r" :class="{ 'item-red': item.number >= 0 }">
          {{ item.number >= 0 ? "+" : "-" }}{{ item.number }}
        </div>
        <div class="item-status" v-if="item.type == 1">审核中…</div>
      </div>
    </div>
  </div>
</template>
<script>
import Order from "@/api/order";

export default {
  name: "BalanceDetails",
  data() {
    return {
      year: new Date().getFullYear(),
      month:
        new Date().getMonth() + 1 > 10
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1),
      detailItem: {}
    };
  },
  computed: {},
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      let param = {
        month: this.month,
        type: localStorage.type,
        year: this.year
      };
      let { code, data } = await Order.financeDetail(param);
      if (code == 200) {
        this.detailItem = data;
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.details-top {
  padding-left: 16px;
  height: 60px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .item-top {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #333333;
    line-height: 21px;
  }
  .item-bottom {
    margin-top: 5px;
    font-size: 13px;
    color: #999999;
    line-height: 18px;
    display: flex;
    .item-dec {
      margin-right: 20px;
    }
  }
}
.details-list {
  .item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin: 0 16px;
    border-bottom: 1px solid #e1e4e8;
    .van-image {
      width: 44px;
      height: 44px;
      margin-right: 12px;
      border-radius: 50%;
    }
    .item-l {
      display: flex;
      .item-l-msg {
        display: flex;
        flex-direction: column;
      }
    }
    .item-name {
      font-size: 14px;
      color: #333333;
      line-height: 20px;
      margin-bottom: 4px;
    }
    .item-time {
      font-size: 14px;
      color: #999999;
      line-height: 20px;
    }
    .item-r {
      &.item-red {
        color: #f53838;
      }
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      line-height: 22px;
    }
    .item-status {
      font-size: 12px;
      color: #f53838;
      line-height: 17px;

      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }
}
</style>
