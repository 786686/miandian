<template>
<div>
  
  <div class="my">
    <div class="my-top-bg">
      <van-image :src="require('@/assets/image/pic.jpg')"></van-image>
      王强
    </div>
    <div class="set-list">
      <div class="item" @click="personMsg">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_info.png')"></van-image>个人信息
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
      <div class="item" @click="timeManage">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_guanli.png')"></van-image>时间管理
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
      <div class="item" @click="order">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_order.png')"></van-image>我的订单
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
      <div class="item" @click="settings">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_safe.png')"></van-image>账户安全
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
      <div class="item" @click="selectLanguage">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_yuyan.png')"></van-image>切换语言
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
      <div class="item" @click="about">
        <div class="item-l">
          <van-image :src="require('@/assets/image/me_ic_about.png')"></van-image>关于我们
        </div>
        <div class="item-r"><van-image :src="require('@/assets/image/ic_forward.png')"></van-image></div>
      </div>
    </div>
    <div class="my-btns btns">
      <div class="btn">退出登录</div>
    </div>
  </div>
</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "My",
  data() {
    return {};
  },
  created() {
  },
  computed: {
  },
  methods: {
    personMsg(){
      this.$router.push("/personMsg");      
      
    },
    timeManage(){
      this.$router.push("/timeManage");      
      
    },
    order(){
      this.$router.push("/order");      
      
    },
    settings(){
      this.$router.push("/settings");      
      
    },
    selectLanguage(){
      this.$router.push("/selectLanguage");      
      
    },
    about(){
      this.$router.push("/about");      
      
    },
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.my-top-bg{
  height: 162px;
  background: url("../../assets/image/me_bg.png") no-repeat;
  background-size: 100%;
  padding: 26px 0 16px;
  margin-bottom: 20px;
  .van-image{
    width: 80px;
    height: 80px;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    margin-bottom: 12px;
    overflow: hidden;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  line-height: 28px;
}
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
.my-btns{
  margin-top: 60px;
}
</style>