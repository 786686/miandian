<template>
  <div class="record-list">
    <div class="record-list-box">
      <van-list
        :loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="load()"
      >
        <div
          class="record-list-item van-hairline--bottom"
          v-for="(item, index) in recordList"
          :key="index"
          @click="toDetail(item.orderNumber, item.type, item.status)"
        >
          <p class="repail">
            <span>{{ item.type === 0 ? "维保记录" : "出险记录" }}</span>
            <span>{{ item.date }}</span>
          </p>
          <p class="frame-number">
            <span>vin：{{ item.vin }}</span>
            <span :class="[clssObj[item.status]]">
              {{ tagObj[item.status] }}
            </span>
          </p>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "record-list",
  data() {
    return {
      tagObj: {
        "0": "查询中",
        "-1": "查询失败",
        "1": "查询成功",
        "2": "查询失败"
      },
      clssObj: {
        "0": "nowing",
        "-1": "fail",
        "1": "success",
        "2": "fail"
      }
    };
  },
  props: {
    recordList: {
      type: Array,
      // 列表数据
      defaultL: () => []
    },
    finished: {
      // 加载是否结束
      type: Boolean,
      default: false
    },
    loading: {
      // 加载中
      type: Boolean,
      default: false
    }
  },
  methods: {
    load() {
      this.$emit("loadList");
    },
    //  判断跳转详情页
    toDetail(orderNumber, type, status) {
      if (Number(status) !== 1) {
        return Toast.fail("该状态不可查看");
      }
      //  && Number(status) !== 2
      const path = type === 1 ? "/InsureDetail" : "/RepairDetail";
      this.$router.push({ path, query: { orderNumber } });
    }
  }
};
</script>
<style lang="scss" scoped>
.record-list {
  padding: 0 32px 0 46px;
  background-color: #fff;
  .record-list-box {
    // padding-top: 10px;
    .record-list-item {
      font-size: 26px;
      padding-top: 30px;
      p {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
      }
      .success {
        color: #2aa146 !important;
      }
      .fail {
        color: #f80000 !important;
      }
      .nowing {
        color: #f88706 !important;
      }
      .repail,
      .frame-number {
        span {
          &:last-child {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
