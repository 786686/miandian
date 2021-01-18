<template>
  <div class="repair-detail" v-if="isFinish">
    <car-info :carInfo="carInfo"></car-info>
    <div class="summary-claims">
      <div class="title-box">
        <img src="@/assets/image/star.png" alt />
        <span class="title">出险理赔摘要</span>
      </div>
      <div class="ummary-detail">
        <div class="count-box">
          <p class="desc">理赔总次数</p>
          <p class="count">
            <span>{{ detailObj.count }}</span
            >次
          </p>
        </div>
        <div class="money-box">
          <p class="desc">理赔总金额</p>
          <p class="count">
            ￥
            <span>{{ detailObj.allAcount }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="detailed-record">
      <insure-record :detailList="detailObj.chuxianJiluDOList"></insure-record>
    </div>
  </div>
</template>
<script>
import User from "@/api/user";
import carInfo from "@/components/carInfo";
import insureRecord from "@/components/insureRecord";
import Order from "@/api/order";
import { mapState } from "vuex";
import { wxPageShare } from "@/utils/wxSdk.js";

export default {
  name: "RepairDetail",
  components: { carInfo, insureRecord },
  data() {
    return {
      detailObj: {
        id: 3,
        orderid: "1220",
        vin: "WVWPR13C6AE170920",
        createtime: "2019-11-27 11:23:46",
        delStatus: 1,
        brandId: null,
        count: 2,
        model: null,
        brandName: "一汽大众A6",
        allAcount: 230000,
        chuxianJiluDOList: [
          {
            id: null,
            dangertime: "2017-09-29 00:00:00",
            claimhappen: "单方事故,行驶受损-直行-撞立柱,本车车损",
            repairamount: 30000,
            material: null,
            delStatus: 1,
            repairdetail: "左前车门整形修复(小),左后车门整形修复(小)左倒",
            renewamount: 0,
            vin: null,
            orderId: null,
            damageamount: 30000
          },
          {
            id: null,
            dangertime: "2016-04-29 00:00:00",
            claimhappen: null,
            repairamount: 94000,
            material: null,
            delStatus: 1,
            repairdetail:
              "右前叶子板(全喷)维修,前保险杠(全喷)维修,右前叶子板整形修复(大)维修,前保险杠拆装(含附件)维修,右前大灯拆装维修,前保险杠皮换件,前雾灯（右）换件,",
            renewamount: 106000,
            vin: null,
            orderId: null,
            damageamount: 200000
          }
        ]
      },
      isFinish: false
    };
  },
  computed: {
    carInfo() {
      return {
        brandName: this.detailObj.brandName,
        vin: this.detailObj.vin,
        createtime: this.detailObj.createtime
      };
    },
    ...mapState(["userId"])
  },
  created() {
    if (this.$route.query.orderNumber) {
      this.getCxlistInfo();
    } else {
      this.isFinish = true;
    }
  },
  methods: {
    // 获取出险详情
    async getCxlistInfo() {
      const { code, data } = await Order.getCxlistInfo({
        orderNumber: this.$route.query.orderNumber
        // id: this.userId
      });
      if (code === 200) {
        this.detailObj = data;
        this.isFinish = true;
      } else {
        this.$router.go(-1);
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
.repair-detail {
  background-color: #f2f2f2;
  .summary-claims {
    background-color: #fff;
    padding: 50px 32px;
    margin-top: 20px;
    .title-box {
      display: flex;
      line-height: 37px;
      img {
        width: 31px;
        height: 37px;
        display: block;
      }
      .title {
        font-size: 30px;
        padding: 0 16px;
        font-weight: bold;
      }
      .title-desc {
        font-size: 22px;
        color: #999;
        padding-top: 6px;
      }
    }
    .ummary-detail {
      display: flex;
      justify-content: space-between;
      padding-top: 50px;
      .count-box,
      .money-box {
        width: 318px;
        height: 149px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.08);
        padding: 20px 28px;
        .desc {
          color: #333;
          font-weight: 500;
          font-size: 28px;
        }
        .count {
          text-align: center;
          font-size: 30px;
          padding-top: 28px;
          font-weight: bold;
          span {
            color: #fe0000;
            font-size: 40px;
          }
        }
      }
    }
  }
  .detailed-record {
    margin-top: 20px;
  }
}
</style>
