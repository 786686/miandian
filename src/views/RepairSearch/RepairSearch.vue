<template>
  <div class="repair-search">
    <swiper :bannerList="bannerList"></swiper>
    <div class="wirte-info">
      <p class="tips">温馨提示：资料填写越完整，查询成功率越高哦</p>
      <div class="info-box">
        <van-cell-group :border="false">
          <van-field
            v-model="vin"
            clearable
            label="车架号"
            placeholder="请输入车架号"
            @input="vinInp"
          >
            <!-- <i slot="button" class="iconfont iconxiangji" @click="getCode"></i> -->
          </van-field>
          <van-field
            v-model="carNumber"
            label="车牌号"
            placeholder="输入完整车牌号"
          />
          <van-field
            v-model="engineNumber"
            label="发动机号"
            placeholder="请输入完整发动机号"
          />
          <van-field style="display: none" />
          <!-- 占位 -->
        </van-cell-group>
      </div>
      <div class="agreement-choose">
        <van-checkbox
          v-model="checked"
          checked-color="#f88706"
          icon-size="12"
          shape="square"
        ></van-checkbox>
        <p class="checked-text">
          我已阅读且同意
          <span class="agreement" @click="serviceProtocol"
            >《维保出险记录查询助手维保记录查询服务协议》</span
          >
        </p>
      </div>
      <div class="btn-groud">
        <van-button plain type="primary" @click="toDetail"
          >查看样例报告</van-button
        >
        <van-button
          plain
          type="primary"
          :class="{ 'now-check': !isEnough }"
          @click="toPayment"
          >立即查询</van-button
        >
      </div>
    </div>
    <div class="record-box">
      <record-list
        :recordList="recordList"
        :type="1"
        @loadList="getOrderList"
        :finished="finished"
        :loading="loading"
      ></record-list>
    </div>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import recordList from "@/components/recordList";
import Order from "@/api/order";
import User from "@/api/user";
import { mapState } from "vuex";
import { Toast } from "vant";
import { wxPayFn, wxPageShare } from "@/utils/wxSdk.js";

export default {
  name: "RepairSearch",
  components: { swiper, recordList },
  data() {
    return {
      vin: "",
      engineNumber: "",
      carNumber: "",
      checked: false,
      pageNum: 1,
      pageSize: 10,
      finished: false,
      loading: false,
      recordList: [],
      isEnough: false,
      searchDisabled: false,
      bannerList: []
    };
  },
  created() {
    this.listBanner();
  },
  computed: {
    ...mapState(["userId"])
    // "bannerList",
  },
  methods: {
    async listBanner() {
      const { data, code } = await User.listBanner({ type: 2 });
      if (code === 200) {
        this.bannerList = data;
        // this.$store.commit(`SET_BANNER_LIST`, data.rows);
      }
    },
    vinInp() {
      if (this.vin.trim().length > 0) {
        this.isEnough = true;
      } else {
        this.isEnough = false;
      }
    },
    serviceProtocol() {
      this.$router.push({ path: "/protocol", query: { type: 1 } });
    },
    // 跳转支付
    toPayment() {
      this.getWBPrices();
    },
    // 获取维修记录价格
    async getWBPrices() {
      await this.verificationFn();
      const params = {
        vin: this.vin,
        // carNumber: this.carNumber,
        // engineNumber: this.engineNumber,
        id: this.userId
      };
      const { data, code } = await Order.getWBPrices(params);
      // let code = 200;
      if (code === 200) {
        const query = {
          type: 1,
          vin: this.vin,
          price: data.price,
          red_money: data.red_mony,
          // price: 0.01,//data.price,
          // red_money: 0.01,//data.red_mony,
          engineNumber: this.engineNumber,
          carNumber: this.carNumber,
          orderNumber: data.orderNumber,
          band: data.brand
        };
        this.$router.push({ path: "/payMent", query });
      }
    },
    // 校验
    verificationFn() {
      return new Promise(resolve => {
        if (!this.vin) return Toast("请输入车架号");
        if (!this.vinValid(this.vin)) {
          return Toast("请输入正确车架号（字母必须大写，长度为17位）");
        }
        if (!this.checked) return Toast("请点击同意服务协议");
        resolve();
      });
    },
    vinValid(vin) {
      if (vin.length > 0 && vin.length != 17) {
        return false;
      } else {
        let vinVal = vin;
        let charToNum = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
          E: 5,
          F: 6,
          G: 7,
          H: 8,
          J: 1,
          K: 2,
          L: 3,
          M: 4,
          N: 5,
          P: 7,
          R: 9,
          S: 2,
          T: 3,
          U: 4,
          V: 5,
          W: 6,
          X: 7,
          Y: 8,
          Z: 9
        };
        let obj = 0;
        let arr = new Array();
        for (let i = 0; i < vinVal.length; i++) {
          let temp = vinVal.charAt(i);

          if (charToNum[temp]) {
            arr[i] = charToNum[temp];
          } else {
            arr[i] = Number(temp);
          }
          if (i == 8) {
            arr[i] = vinVal.charAt(i);
          }
        }
        let a1 = 8;
        for (let i = 0; i < 7; i++) {
          obj += Number(arr[i]) * a1;
          a1--;
        }

        obj += Number(arr[7]) * 10;

        let a2 = 9;
        for (let i = 9; i < 17; i++) {
          obj += Number(arr[i]) * a2;
          a2--;
        }

        let result = Number(obj) % 11;
        if (parseInt(result) === 10) {
          result = "X";
        }
        if (result == arr[8]) {
          //成功
          return true;
        } else {
          //失败
          return false;
        }
      }
      // const myreg = /^[[0-9]+[A-Z]+]{17}$/;
      // return myreg.test(number);
    },
    // 获取记录列表
    async getOrderList() {
      this.loading = true;
      this.finished = false;
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        // type: this.orderType,
        content: this.content,
        id: this.userId,
        type: 0
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
    toDetail() {
      this.$router.push("/RepairDetail");
    },
    // 获取扫码
    async getCode() {
      const { data } = await User.getWxSign();
      // const { data, code } = await User.getWxSign();
      wxPayFn(data);
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
.btn-groud .search-btn {
  background-color: #fff;
}
.repair-search {
  background-color: #2b2121;
  .wirte-info {
    padding: 20px 28px 46px;
    background-color: #fff;
    .iconxiangji {
      font-size: 50px;
    }
    .tips {
      font-size: 22px;
      color: #f88706;
      padding-bottom: 20px;
    }
    .info-box {
      .van-cell {
        line-height: 90px;
        font-size: 30px;
        font-weight: 500;
        color: #333;
        &:first-of-type {
          /deep/.van-field__label {
            position: relative;
            width: 210px;
            &::after {
              content: "*";
              color: #f88706;
            }
          }
        }
        /deep/.van-field__label {
          position: relative;
          width: 210px;
          &::after {
            content: "(选填)";
            color: #999;
          }
        }
        /deep/ .van-field__right-icon .van-icon {
          font-size: 40px;
        }
        /deep/ .van-field__control {
          line-height: 40px;
          height: 90px;
        }
      }
    }
    .agreement-choose {
      padding: 38px 0;
      font-size: 22px;
      display: flex;
      .checked-text {
        margin-left: 10px;
        vertical-align: sub;
      }
      .van-checkbox {
        margin-top: -1px;
      }
      .agreement {
        color: #f88706;
      }
    }
    .btn-groud {
      display: flex;
      justify-content: center;
      /deep/ .van-button--normal {
        width: 280px;
        height: 90px;
        margin: 0 33px;
        border-radius: 10px;
        border: 1px solid #f88706;
        color: #f88706;
        font-size: 30px;
        font-weight: 500;
      }
      .now-check {
        border: 1px solid #f2f2f2;
        background: #f2f2f2;
        font-weight: bold;
        color: #999;
      }
    }
  }
  .record-box {
    // padding-top: 20px;
  }
}
</style>
