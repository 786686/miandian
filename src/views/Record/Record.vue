<template>
  <div class="record">
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
            :class="['tabs-item', { active: index === active }]"
            v-for="(item, index) in tabList"
            :key="index"
            @click="active = index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="recordList" v-if="recordList.length">
      <recordList
        :recordList="recordList"
        :type="1"
        @loadList="getOrderList"
        :finished="finished"
        :loading="loading"
      ></recordList>
    </div>
    <no-order v-if="!recordList.length && !loading" :isBar="true"></no-order>
  </div>
</template>
<script>
import recordList from "@/components/recordList";
import noOrder from "@/components/noOrder";
import Order from "@/api/order";
import User from "@/api/user";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "record",
  components: { recordList, noOrder },
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "全部"
        },
        {
          name: "维修记录"
        },
        {
          name: "出险记录"
        }
      ],
      recordList: [],
      pageNum: 1,
      pageSize: 10,
      totalCount: 0,
      finished: false,
      loading: true,
      orderType: "",
      content: ""
    };
  },
  watch: {
    active: {
      immediate: true,
      handler(type) {
        console.log(type);
        this.recordList = [];
        this.pageNum = 1;
        this.orderType = type ? type - 1 : "";

        // if(type == 2){
        //   this.orderType = 0;
        // }
        this.getOrderList();
      }
    }
  },
  methods: {
    // 获取记录列表
    async getOrderList() {
      this.loading = true;
      this.finished = false;
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        type: this.orderType,
        content: this.content,
        id: this.$store.state.userId
      };
      const { data, code } = await Order.orderList(params);
      data ? (this.loading = false) : "";
      if (code === 200) {
        this.recordList = [...this.recordList, ...data.list];
        this.pageNum++;
        if (this.recordList.length >= data.Total) {
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
        this.recordList = [];
        this.getOrderList();
        this.$refs["serchInput"].blur(); // 键盘失去焦点
      }
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
.record {
  .header {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
    .input-area {
      padding: 30px;
      position: relative;
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
      .tabs {
        display: flex;
        box-shadow: 0px 15px 15px -15px rgba(0, 0, 0, 0.08);
        line-height: 90px;
        .tabs-item {
          width: 33.333%;
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
  .recordList {
    margin-top: 10px;
  }
}
</style>
