<style scoped lang="scss">
.comment-top {
  margin: 0 16px;
  padding: 16px 0 38px;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  .item-l {
    .van-image {
      overflow: hidden;
      border-radius: 50%;
      width: 110px;
      height: 110px;
      border-radius: 6px;
      margin-right: 12px;
    }
  }
  .item-r {
    flex: 1;
    .item-name {
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      margin-bottom: 6px;
    }
    .item-tags {
      display: flex;
      .item-tag {
        padding: 2px 5px;
        background: #f8f9fb;
        border-radius: 2px;
        margin-right: 4px;
        margin-bottom: 4px;
        font-size: 12px;
        color: #b3b5ba;
        line-height: 17px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    .item-intro {
      margin-top: 8px;
      font-size: 13px;
      color: #999999;
      line-height: 16px;
    }
  }
}
.item-comment-bottom {
  border-top: 10px solid #f9f9f9;
  padding: 16px;
  .item-comment-bottom-top {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #525050;
    line-height: 20px;
    .van-image {
      &:first-child {
        margin-left: 10px;
      }
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }
  .van-field {
    margin-top: 18px;
    height: 238px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
  }
}
.comment-fixed-replace {
  height: 44px;
}
.comment-fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  .btns {
    margin: 0;
    .btn {
      border-radius: 0;
      margin-bottom: 0;
    }
  }
}
</style>

<template>
  <div>
    <div class="comment">
      <div class="comment-top">
        <div class="item-l">
          <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
        </div>
        <div class="item-r">
          <div class="item-name">王强</div>
          <div class="item-tags">
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
            <div class="item-tag">风雨无阻</div>
          </div>
          <div class="item-intro">
            简介：服务用心，态度认真，专业服务，准时到达准时到达准时到达准时到达准时到达…
          </div>
        </div>
      </div>
      <div class="item-comment-bottom">
        <div class="item-comment-bottom-top">
          服务评分
          <van-image
            :src="require('@/assets/image/ic_grade_big_s.png')"
          ></van-image>
          <van-image
            :src="require('@/assets/image/ic_grade_big_s.png')"
          ></van-image>
          <van-image
            :src="require('@/assets/image/ic_grade_big_s.png')"
          ></van-image>
          <van-image
            :src="require('@/assets/image/ic_grade_big_s.png')"
          ></van-image>
          <van-image
            :src="require('@/assets/image/ic_grade_big_s.png')"
          ></van-image>
        </div>
        <van-field
          type="textarea"
          placeholder="请写下您的评价，以便为您更好的服务......"
        ></van-field>
      </div>
      <div class="comment-fixed-replace"></div>
      <div class="comment-fixed">
        <div class="btns">
          <div class="btn">发布评论</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
