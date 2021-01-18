<template>
  <div>
    <div class="detail-top">
      <van-image :src="require('@/assets/image/ic_xiala.png')"></van-image>
    </div>
    <div class="detail-msg">
      <div class="item">
        <div class="item-l">TA的标签</div>
        <div class="item-r">
          <div class="item-tags">
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-l">TA的评分</div>
        <div class="item-r">
          <div class="item-sorce">
            <van-image
              :src="require('@/assets/image/ic_xiala.png')"
            ></van-image>
            <van-image
              :src="require('@/assets/image/ic_xiala.png')"
            ></van-image>
            <van-image
              :src="require('@/assets/image/ic_xiala.png')"
            ></van-image>
            <van-image
              :src="require('@/assets/image/ic_xiala.png')"
            ></van-image>
            4分
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-l">TA的介绍</div>
        <div class="item-r">
          详细介绍详细介绍详细介绍
        </div>
      </div>
    </div>
    <van-tabs
      v-model="tabsActive"
      animated
      swipeable
      title-active-color="#3b97ff"
      color="#3b97ff"
      @change="onChangeTab"
    >
      <van-tab name="基本信息">
        <template #title>
          <div class="base-msg">
            <div class="item">身高：160cm</div>
            <div class="item">体重：50kg</div>
            <div class="item">常驻城市：广州</div>
            <div class="item">
              电话：134****1234
              <van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image>
            </div>
            <div class="item">服务套餐</div>
            <div class="item-service">
              <div class="item-service-l">
                <div class="item-service-top">
                  <van-radio name="1"></van-radio>套餐二/2小时
                </div>
                <div class="item-service-msg">套餐说明</div>
              </div>
              <van-image class="icon-price"></van-image>
              <div class="item-price">$ 100.00</div>
            </div>
            <div class="btns">
              <div class="btn">立即打赏</div>
            </div>
          </div>
        </template>
      </van-tab>
      <van-tab name="评论信息">
        <template #title>
          <div class="comment-msg">
            <div class="item">
              <van-image
                class="item-cover"
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image>
              <div class="item-r">
                <div class="item-r-top">
                  <div class="item-top-l">
                    <div class="item-name">姓名</div>
                    <div class="item-time">2020-12-12</div>
                  </div>
                  <div class="item-r-sorce">
                    <van-image
                      :src="require('@/assets/image/ic_xiala.png')"
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
      tabsActive: ["1"]
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
  .item {
    display: flex;
    margin-bottom: 20px;
    .item-l {
      color: #999;
      font-size: 14px;
    }
    .item-r {
      flex: 1;
      .item-tags {
        display: flex;
        flex-wrap: wrap;
        .item-tag {
          margin-right: 3px;
          color: #333;
          background-color: #eee;
        }
      }
      .item-sorce {
        display: flex;
        color: #999;
        font-size: 12px;
        .van-image {
          width: 20px;
          height: 20px;
          margin-right: 3px;
        }
      }
    }
  }
}
.base-msg {
  .item {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
  .item-service {
    .item-service-l {
      border: 1px solid #f00;
      padding: 4px;
      flex: 1;
      .item-service-top {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #333;
        .van-radio {
          width: 15px;
          height: 15px;
        }
      }
      .item-service-msg {
        color: #999;
        font-size: 14px;
      }
    }
    .icon-price {
      width: 24px;
      height: 24px;
    }
    .item-price {
      border: 1px solid #f00;
      padding: 8px;
      color: #333;
      font-size: 14px;
    }
  }
}
.comment-msg {
  .item {
    margin: 0 10px;
    border-bottom: 1px solid #eee;
    .item-cover {
      width: 50px;
      height: 50px;
    }
    .item-r {
      flex: 1;
      .item-r-top {
        display: flex;
        align-items: center;
        .item-top-l {
          display: flex;
          align-items: center;
          .item-name {
            font-size: 14px;
            color: #333;
          }
          .item-time {
            font-size: 12px;
            color: 3999;
          }
        }
        .item-r-sorce {
          .van-image {
            width: 15px;
            height: 15px;
          }
        }
      }
      .item-r-con {
        position: relative;
        color: #999;
        .item-look {
          position: absolute;
          right: 0;
          bottom: 0;
          color: blue;
        }
      }
    }
  }
  .item-all {
    text-align: center;
    font-size: 14px;
    color: #999;
  }
}
</style>
