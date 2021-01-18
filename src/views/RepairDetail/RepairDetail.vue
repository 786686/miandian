<template>
  <div class="insure-detail" v-if="isFinish">
    <car-info :carInfo="carInfo"></car-info>
    <div class="report-rules">
      <!-- <span>
        报告解读规则
        <van-icon name="arrow" />
      </span> -->
    </div>
    <div class="car-survey">
      <div class="title-box">
        <img src="@/assets/image/star.png" alt />
        <span class="title">车辆概况</span>
      </div>
      <div class="car-survey-list">
        <div class="car-survey-list-item">
          <span>最后维保时间</span>
          <span>{{ detailObj.lastrepairtime }}</span>
        </div>
        <div class="car-survey-list-item">
          <span>总里程数</span>
          <span>{{ detailObj.maxmileage }}公里</span>
        </div>
        <div class="car-survey-list-item">
          <span>异常排查</span>
          <div class="surey-list-icon">
            <div
              class="surey-list-icon-item"
              :class="detailObj.carwaterflag == 0 ? 'success' : 'fail'"
            >
              <img
                v-if="detailObj.carwaterflag == 0"
                src="@/assets/image/water.png"
                alt
              />
              <img src="@/assets/image/water-wrong.png" alt="" v-else />
              <span
                >泡水检测({{
                  detailObj.carwaterflag == 0
                    ? "正常"
                    : detailObj.carwaterflag == 1
                    ? "异常"
                    : "不确定"
                }})</span
              >
            </div>
            <div
              class="surey-list-icon-item"
              :class="detailObj.carfireflag == 0 ? 'success' : 'fail'"
            >
              <img
                v-if="detailObj.carfireflag == 0"
                src="@/assets/image/fire.png"
                alt
              />
              <img src="@/assets/image/fire-wrong.png" alt="" v-else />
              <span
                >火烧检测({{
                  detailObj.carfireflag == 0
                    ? "正常"
                    : detailObj.carfireflag == 1
                    ? "异常"
                    : "不确定"
                }})</span
              >
            </div>
            <div
              class="surey-list-icon-item"
              :class="detailObj.odometer == 1 ? 'success' : 'fail'"
            >
              <img
                v-if="detailObj.odometer == 1"
                src="@/assets/image/course-right.png"
                alt
              />
              <img src="@/assets/image/course.png" alt="" v-else />
              <span
                >里程记录({{ detailObj.odometer == 1 ? "正常" : "异常" }})</span
              >
            </div>
          </div>
        </div>
        <div class="car-survey-list-item important-parts">
          <!-- @click="importantParts = !importantParts" -->
          <span>重要部件</span>
          <div class="surey-list-icon important-parts-right">
            <img
              src="@/assets/image/axe.png"
              alt
              v-if="detailObj.carcomponentrecordsflag == 1"
            />
            <img src="@/assets/image/safe.png" alt v-else />
            <!-- <van-icon :name="importantParts ? 'arrow-down' : 'arrow'" /> -->
          </div>
        </div>
        <transition name="slide">
          <div class="important-parts-content" v-if="importantParts">
            <div class="important-parts-item">
              <img src="@/assets/image/axe.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
        <div class="car-survey-list-item important-parts">
          <!-- @click="carStructure = !carStructure" -->
          <span>车型结构排查</span>
          <div class="surey-list-icon important-parts-right">
            <img
              src="@/assets/image/axe.png"
              alt
              v-if="detailObj.structure == 1"
            />
            <img src="@/assets/image/safe.png" alt v-else />
            <!-- <van-icon :name="carStructure ? 'arrow-down' : 'arrow'" /> -->
          </div>
        </div>
        <transition name="slide">
          <div class="important-parts-content" v-if="carStructure">
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
        <div class="car-survey-list-item important-parts">
          <!-- @click="carAppearance = !carAppearance" -->
          <span>外观覆盖件排查</span>
          <div class="surey-list-icon important-parts-right">
            <img
              src="@/assets/image/axe.png"
              alt
              v-if="detailObj.caroutsiderecordsflag == 1"
            />
            <img src="@/assets/image/safe.png" alt v-else />
            <!-- <van-icon :name="carAppearance ? 'arrow-down' : 'arrow'" /> -->
          </div>
        </div>
        <transition name="draw">
          <div class="important-parts-content" v-if="carAppearance">
            <div class="important-parts-item">
              <img src="@/assets/image/course.png" alt />
              <p>发动机</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="detailed-record">
      <repair-record :detailList="detailObj.weibaoJiluDOList"></repair-record>
    </div>
  </div>
</template>
<script>
import carInfo from "@/components/carInfo";
import repairRecord from "@/components/repairRecord";
import Order from "@/api/order";
import { mapState } from "vuex";
import User from "@/api/user";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "InsureDetail",
  components: { carInfo, repairRecord },
  data() {
    return {
      haode: false,
      activeName: ["0"],
      importantParts: false,
      carStructure: false,
      carAppearance: false,
      detailObj: {
        id: 1,
        orderid: "fg123",
        vin: "LSGUD82C07E015434",
        model: null,
        brand: null,
        structure: 0,
        gasbag: 1,
        maxmileage: "2000",
        carfireflag: 0,
        carcomponentrecordsflag: 1,
        caroutsiderecordsflag: -1,
        carwaterflag: 0,
        createtime: "2019-11-15 10:44:42",
        delStatus: 1,
        lastrepairtime: "2019-11-21 00:00:00",
        odometer: 0,
        webUrl: null,
        mobileUrl: null,
        brandName: "一汽大众",
        weibaoJiluDOList: [
          {
            id: null,
            content:
              "维修项目：免费保养;一次免费换机油.机滤.添加剂;;使用材料：;备注：",
            type: "免费保养",
            material: "使用材料：",
            repairdate: "2007-01-22 00:00:00",
            delStatus: 1,
            vin: null,
            orderId: null
          },
          {
            id: null,
            content:
              "维修项目：小修保养;SGM免费检测; 检查油表不准。;小修保养;编程油表不准;小修保养;检查100KM时，踩刹车方向盘抖动。;;使用材料：;备注：",
            type: "小修保养",
            material: "使用材料：",
            repairdate: "2007-01-27 00:00:00",
            delStatus: 1,
            vin: null,
            orderId: null
          }
        ]
      },
      isFinish: false
    };
  },
  computed: {
    ...mapState(["userId"]),
    carInfo() {
      return {
        brandName: this.detailObj.brandName,
        vin: this.detailObj.vin,
        createtime: this.detailObj.createtime,
        image:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1158873959,778733211&fm=26&gp=0.jpg"
      };
    }
  },
  created() {
    if (this.$route.query.orderNumber) {
      this.getWblistInfo();
    } else {
      this.isFinish = true;
    }
  },
  methods: {
    // 获取出险详情
    async getWblistInfo() {
      const { code, data } = await Order.getWblistInfo({
        orderNumber: this.$route.query.orderNumber,
        id: this.userId
      });
      if (code === 200) {
        this.detailObj = data;
        console.log(this.detailObj);
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
.insure-detail {
  background-color: #f2f2f2;
  .detailed-record {
    margin-top: 20px;
  }
  .report-rules {
    padding: 19px 0;
    color: #666666;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    color: #f88706;
    span {
      .van-icon-arrow:before {
        vertical-align: -4px;
      }
    }
  }
  .car-survey {
    background-color: #fff;
    padding: 42px 0 10px;
    .title-box {
      display: flex;
      padding: 0 28px;
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
    .car-survey-list {
      padding-top: 10px;
      .car-survey-list-item {
        // border-top: 1px solid #f2f2f2;
        border-top: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
        font-size: 28px;
        font-weight: 500;
        padding: 0 28px;
        line-height: 86px;
        &:first-child {
          border-top: none;
        }
        .surey-list-icon {
          display: flex;
          .surey-list-icon-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 18px;
            height: 86px;
            line-height: 24px;
            margin-left: 30px;
            &.fail {
              color: #d0392a;
            }
            &.success {
              color: #2dbf01;
              img {
                width: 33px !important;
                height: 35px !important;
                margin: 10px 0 7px 0 !important;
              }
            }
            img {
              width: 32px;
              height: 32px;
              display: block;
              margin: 15px 0 5px 0;
            }
          }
        }
        &.important-parts {
          font-weight: bold;
          line-height: 110px;
          position: relative;
          padding-left: 50px;
          &::after {
            content: "";
            width: 10px;
            height: 31px;
            background-color: #f88706;
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 5px;
          }
          .important-parts-right {
            display: flex;
            align-items: center;
            font-weight: 30px;
            img {
              display: block;
              width: 33px;
              height: 35px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .important-parts-content {
      padding: 40px 30px;
      display: flex;
      flex-flow: wrap;
      -o-transition: height 0.6s;
      .important-parts-item {
        width: 214px;
        height: 100px;
        border: 1px solid rgba(242, 242, 242, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: #333;
        font-weight: 500;
        margin-bottom: 10px;
        &:nth-child(3n-1) {
          margin: 0 20px;
        }
        img {
          display: block;
          width: 35px;
          height: 35px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
