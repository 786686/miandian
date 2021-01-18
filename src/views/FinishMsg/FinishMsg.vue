<template>
  <div>
      <van-popup v-model="popShow" closeable>
          <div class="center-pop">
            <van-image :src="require('@/assets/image/tan_ic_success.png')"></van-image>
            <div class="pop-msg">恭喜，您与注册成功，<br>
              请耐心等待平台审核，<br>
              平台审核通过后可进行登录
            </div>
            <div class="bottom-pop-btn">去登录</div>
          </div>
      </van-popup>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      popShow: true,
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.item-title{
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #525050;
  line-height: 22px;
}
.item-num-list{
  .item{
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #999;
    line-height: 21px;
    margin-bottom: 20px;
    justify-content: center;
    .btn{
      border-radius: 2px;
      margin-left: 10px;
      width: 67px;
      height: 28px;
      background: linear-gradient(270deg, #53C8E1 0%, #F02DFF 100%);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      color: #FFF;
    }
  }
}
</style>
