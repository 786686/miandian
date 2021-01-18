<template>
  <div class="detailedRecord">
    <div class="title-box">
      <img src="@/assets/image/record.png" alt />
      <span class="title">详细记录</span>
    </div>
    <div class="record-item" v-for="(item, index) in detailList" :key="index">
      <p class="date-box">
        <span class="date">{{ item.dangertime }}</span>
        <!-- <span v-if="type === '2'" class="maintain tag">保养</span> -->
      </p>
      <!-- <div class="desc">
        <div class="desc-title">事故描述:</div>
        <div class="desc-content">
          <p>{{ item.claimhappen || "无" }}</p>
        </div>
      </div> -->
      <div class="desc">
        <div class="desc-title">理赔金额:</div>
        <div class="desc-content">
          <p>{{ item.repairamount }}元</p>
        </div>
      </div>
      <!-- <div class="desc">
        <div class="desc-title">材料金额:</div>
        <div class="desc-content">
          <p>{{ item.damageamount }}元</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc-title">材料详情:</div>
        <div class="desc-content">
          <p>{{ item.material || "无" }}</p>
        </div>
      </div> -->
      <div class="desc">
        <div class="desc-title">理赔详情:</div>
        <div class="desc-content">
          <p>{{ item.repairdetail || "无" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "insureRecord",
  props: {
    detailList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.detailedRecord {
  background-color: #fff;
  padding: 42px 32px;
  line-height: 34px;
  .title-box {
    display: flex;
    img {
      width: 39px;
      height: 34px;
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
  .record-item {
    padding-top: 42px;
    .date-box {
      display: flex;
      height: 50px;
      align-items: center;
      position: relative;
      padding-left: 20px;
      .date {
        font-weight: bold;
        font-size: 30px;
        color: #666;
      }
      .tag {
        background: rgba(227, 255, 218, 1);
        border: 1px solid rgba(45, 191, 1, 1);
        border-radius: 15px;
        font-weight: 300;
        color: #2dbf01;
        font-size: 22px;
        padding: 0 15px;
        margin-left: 15px;
        line-height: 30px;
      }
      .repair {
        border: 1px solid #d0392a;
        color: #d0392a;
        background-color: #ffcece;
      }
      &::after {
        content: "";
        width: 10px;
        height: 30px;
        background-color: #f88706;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
      }
    }
    // .date {
    //   border: 1px solid red;
    //   font-size: 28px;
    //   font-weight: bold;
    //   color: #666;
    //   padding-left: 20px;
    //   position: relative;
    //   margin-bottom: 10px;
    //   line-height: 50px;
    //   vertical-align: bottom;
    //   .maintain {
    //     background: rgba(227, 255, 218, 1);
    //     border: 1px solid rgba(45, 191, 1, 1);
    //     border-radius: 15px;
    //     font-weight: 300;
    //     color: #2dbf01;
    //     font-size: 22px;
    //     padding: 0 15px;
    //     margin-left: 15px;
    //   }
    //   &.repair {
    //     span {
    //       border: 1px solid #d0392a;
    //       color: #d0392a;
    //       background-color: #ffcece;
    //     }
    //   }
    //   &::after {
    //     content: "";
    //     width: 10px;
    //     height: 30px;
    //     background-color: #f88706;
    //     position: absolute;
    //     left: 0;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     border-radius: 5px;
    //   }
    // }
    .desc {
      display: flex;
      font-size: 24px;
      color: #333;
      width: 100%;
      p,
      .desc-title {
        line-height: 42px;
      }
      .desc-title {
        width: 120px;
      }
      .desc-content {
        width: 540px;
      }
    }
  }
}
</style>
