<template>
  <div>
    <div class="detail-top">
      <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
    </div>
    <div class="detail-msg">
      <div class="item">
        <div class="item-l">TA的标签：</div>
        <div class="item-r">
          <div class="item-tags">
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-l">TA的评分：</div>
        <div class="item-r">
          <div class="item-sorce">
            <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
            <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
            <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
            <van-image :src="require('@/assets/image/ic_star.png')"></van-image>
            4分
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-l">TA的介绍：</div>
        <div class="item-r">
          详细介绍详细介绍详细介绍
        </div>
      </div>
    </div>
    <van-tabs
      v-model="tabsActive"
      animated
      swipeable
      title-active-color="#D627FA"
      color="#D627FA"
      title-inactive-color="#999"
      @change="onChangeTab"
    >
      <van-tab title="基本信息">
        <template>
          <div class="base-msg">
            <div class="item">身高：160cm</div>
            <div class="item">体重：50kg</div>
            <div class="item">常驻城市：广州</div>
            <div class="item item-phone">
              电话：134****1234
              <van-image
                :src="require('@/assets/image/btn_call.png')"
              ></van-image>
            </div>
            <div class="item">服务套餐</div>
            <div class="item-service-list">
              <div class="item-service">
                <div class="item-service-l">
                  <div class="item-service-top">
                    <van-radio
                      name="1"
                      v-model="radio"
                      checked-color="#D627FA"
                    ></van-radio
                    >套餐二/2小时
                  </div>
                  <div class="item-service-msg">套餐说明</div>
                </div>
                <van-image
                  class="icon-price"
                  :src="require('@/assets/image/ic_jin.png')"
                ></van-image>
                <div class="item-price">$ 100.00</div>
              </div>
            </div>
            <div class="btns">
              <div class="btn">立即打赏</div>
            </div>
          </div>
        </template>
      </van-tab>
      <van-tab title="评论信息">
        <template>
          <div class="comment-msg">
            <div class="item">
              <van-image
                class="item-cover"
                :src="require('@/assets/image/pic.jpg')"
              ></van-image>
              <div class="item-r">
                <div class="item-r-top">
                  <div class="item-top-l">
                    <div class="item-name">姓名</div>
                    <div class="item-time">2020-12-12</div>
                  </div>
                  <div class="item-r-sorce">
                    <van-image
                      :src="require('@/assets/image/ic_star.png')"
                    ></van-image>
                    <van-image
                      :src="require('@/assets/image/ic_star.png')"
                    ></van-image>
                    <van-image
                      :src="require('@/assets/image/ic_star.png')"
                    ></van-image>
                    <van-image
                      :src="require('@/assets/image/ic_star.png')"
                    ></van-image>
                    <van-image
                      :src="require('@/assets/image/ic_star.png')"
                    ></van-image>
                  </div>
                </div>
                <div class="item-r-con">
                  <div class="item-r-con-in">这是评论</div>
                  <div class="item-look">查看全部</div>
                </div>
              </div>
            </div>
            <div class="item-all">查看全部评论</div>
            <div class="btns">
              <div class="btn">立即打赏</div>
            </div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      radio: "1",
      tabsActive: ["基本信息"]
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
.detail-top {
  .van-image {
    display: block;
    width: 100%;
    height: auto;
  }
}
.detail-msg {
  margin: 20px 16px;
  .item {
    display: flex;
    margin-bottom: 22px;
    &:last-child {
      margin-bottom: 5px;
    }
    .item-l {
      font-size: 15px;
      color: #999999;
      line-height: 21px;
    }
    .item-r {
      flex: 1;

      font-size: 15px;
      color: #333333;
      line-height: 22px;

      .item-tags {
        display: flex;
        flex-wrap: wrap;
        .item-tag {
          margin-right: 4px;
          height: 28px;
          line-height: 28px;
          background: #f8f9fb;
          border-radius: 2px;
          font-size: 14px;
          color: #333;
          padding: 0 6px;
        }
      }
      .item-sorce {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #999999;
        line-height: 18px;

        .van-image {
          width: 16px;
          height: 16px;
          margin-right: 4px;
          &:last-child {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
::v-deep .van-tab {
  font-size: 15px;
}
::v-deep .van-tab--active {
  font-weight: bold;
}
.base-msg {
  margin: 20px 16px;
  .item {
    font-size: 15px;
    color: #333333;
    line-height: 21px;

    margin-bottom: 10px;
    &.item-phone {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      .van-image {
        width: 28px;
        height: 28px;
        margin-left: 10px;
      }
    }
  }
  .item-service-list {
    margin-bottom: 30px;
  }
  .item-service {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .item-service-l {
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid #d627fa;
      padding: 8px 8px 5px;
      flex: 1;
      .item-service-top {
        display: flex;
        align-items: center;

        font-size: 15px;
        color: #333333;
        line-height: 21px;
        .van-radio {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
      .item-service-msg {
        margin-top: 10px;
        font-size: 13px;
        color: #999999;
        line-height: 18px;
      }
    }
    .icon-price {
      width: 30px;
      height: 30px;
      margin: 0 6px;
    }
    .item-price {
      padding: 0 9px;
      font-size: 15px;
      color: #333333;
      width: 126px;
      height: 44px;
      line-height: 42px;
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid #d627fa;
    }
  }
}
.comment-msg {
  margin: 10px 16px;
  .item {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #e1e4e8;
    .item-cover {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }
    .item-r {
      flex: 1;
      .item-r-top {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item-top-l {
          display: flex;
          align-items: center;
          .item-name {
            font-size: 14px;
            color: #333333;
            line-height: 20px;
            margin-right: 10px;
          }
          .item-time {
            font-size: 12px;
            color: #999999;
            line-height: 17px;
          }
        }
        .item-r-sorce {
          .van-image {
            width: 16px;
            height: 16px;
            margin-left: 4px;
          }
        }
      }
      .item-r-con {
        position: relative;
        font-size: 14px;
        color: #666666;
        line-height: 20px;
        padding-bottom: 20px;

        .item-look {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: 14px;
          color: #2b7fd2;
          line-height: 20px;
        }
      }
    }
  }
  .item-all {
    text-align: center;

    font-size: 14px;
    color: #999999;
    line-height: 20px;
    margin: 7px 0 30px;
  }
}
</style>
