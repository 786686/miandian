<template>
<div>
  <div class="set-list">
    <div class="item">
      <div class="item-l">
        修改登录密码
      </div>
      <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
    </div>
    <div class="item">
      <div class="item-l">
        忘记登录密码
      </div>
      <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
    </div>
    <div class="item">
      <div class="item-l">
        修改支付密码
      </div>
      <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
    </div>
    <div class="item">
      <div class="item-l">
        忘记支付密码
      </div>
      <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
    </div>
  </div>
</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "settings",
  data() {
    return {};
  },
  created() {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.set-list{
  .item{
    margin: 0 16px;
    border-bottom: 1px solid #E1E4E8;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-l{
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      .van-image{
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
    .item-r{
      .van-image{
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>