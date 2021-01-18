<template>
  <div>
    <div class="index-nav">
      <div class="item">
        广州<van-image
          :src="require('@/assets/image/ic_xiala.png')"
        ></van-image>
      </div>
      <div class="item active">好评</div>
      <div class="item">上新</div>
      <div class="item">好物</div>
    </div>
    <div class="index-list">
      <div class="item">
        <div class="item-l">
          <div class="item-cover">
            <van-image
              :src="require('@/assets/image/ic_xiala.png')"
            ></van-image>
          </div>
          <div class="item-l-bottom">
            <van-image :src="require('@/assets/image/ic_xiala.png')"></van-image
            >5
          </div>
        </div>
        <div class="item-r">
          <div class="item-r-top">
            <div class="item-name">姓名</div>
            <div class="item-score">
              <van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_xiala.png')"
              ></van-image>
              4分
            </div>
          </div>
          <div class="item-tags">
            <div class="item-tag">风雨五组</div>
            <div class="item-tag">风雨五组</div>
            <div class="item-tag">风雨五组</div>
          </div>
          <div class="item-price">$ 69</div>
          <div class="item-intro">简介</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.index-nav {
  width: 100;
  border-bottom: 1px solid #eee;
  display: flex;
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    .van-image {
    }
    &.active {
      color: #333;
    }
  }
}
.index-list {
  margin-left: 10px;
  .item {
    display: flex;
    padding: 10px 0;
    .item-l {
      .item-cover {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-right: 10px;
      }
      position: relative;
      .item-l-bottom {
        color: #fff;
        font-size: 14px;
        .van-image {
          width: 10px;
          height: 10px;
        }
      }
    }
    .item-r {
      flex: 1;
      .item-r-top {
        display: flex;
        justify-content: space-between;
        .item-name {
        }
        .item-sorce {
          font-size: 14px;
          color: #999;
          .van-image {
            width: 10px;
            height: 10px;
            margin-right: 5px;
          }
        }
      }
      .item-tags {
        display: flex;
        .item-tag {
          margin-right: 5px;
          background-color: #f4f4f4;
          color: #f4f4f4;
          border-radius: 2px;
        }
      }
      .item-price {
        font-size: 24px;
        color: #f00;
      }
      .item-intro {
        color: #999;
        font-size: 12px;
        margin-bottom: 10px;
      }
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
