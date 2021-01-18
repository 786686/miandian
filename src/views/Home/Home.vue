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
              :src="require('@/assets/image/pic.jpg')"
            ></van-image>
          </div>
          <div class="item-l-bottom">
            <van-image :src="require('@/assets/image/pic_number.png')"></van-image
            ><div class="item-num">5</div>
          </div>
        </div>
        <div class="item-r">
          <div class="item-r-top">
            <div class="item-name">姓名</div>
            <div class="item-score">
              <van-image
                :src="require('@/assets/image/ic_star.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_star.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_star.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_star.png')"
              ></van-image
              ><van-image
                :src="require('@/assets/image/ic_star.png')"
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
  height: 48px;
  .item {
    
    font-size: 15px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    .van-image {
      width: 14px; height: 14px; margin-left: 2px;
    }
    &.active {
      color: #D627FA;
      font-weight: bold;
    }
  }
}
.index-list {
  margin-left: 16px;
  .item {
    display: flex;
    padding: 10px 0;
    .item-l {
      overflow: hidden;
      width: 110px;
      height: 110px;
      border-radius: 6px;
        margin-right: 12px; 
      .item-cover .van-image {
        width: 110px;
        height: 110px; 
        border-radius: 6px;
      }
      position: relative;
      .item-l-bottom {
        position: absolute;
        right: 0; bottom: 0;
        color: #fff;
        font-size: 13px;
        z-index: 2;
        text-align: right;
        line-height: 24px;
        padding-right: 4px;
        .item-num{position: relative; z-index: 2;}
        .van-image {
          z-index: 1;
          position: absolute;
          right: 0; bottom: 0;
          width: 36px;
          height: 24px;
        }
      }
    }
    .item-r {
      padding-right: 16px;
      flex: 1;
      .item-r-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .item-name {
          font-size: 16px;
          color: #333333;
          line-height: 22px;
        }
        .item-score {
          
        display: flex;
        align-items: center;
font-size: 13px;
color: #999999;
line-height: 18px;
          .van-image {
            width: 16px;
            height: 16px;
            margin-right: 4px;
            &:last-child{
              margin-right: 8px;
            }
          }
        }
      }
      .item-tags {
        display: flex;
        flex-wrap: nowrap;
        .item-tag {
          margin-right: 4px;
          font-size: 12px;
          color: #B3B5BA;
          height: 22px;
          line-height: 22px;
          background: #F8F9FB;
          border-radius: 2px;
          padding: 0 5px;
        }
      }
      .item-price {
        font-size: 17px;
        font-weight: bold;
        color: #F53838;
        line-height: 24px;
        margin: 6px 0;
      }
      .item-intro {
        
        font-size: 13px;
        color: #999999;
        line-height: 16px;
        margin-bottom: 10px;
      }
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
