<template>
  <div>
      <div class="item-title">忘记密码，请联系客服找回</div>
      <div class="item-num-list">
        <div class="item">客服1：020-3242455<div class="btn">一键拨号</div></div>
        <div class="item">客服1：020-3242455<div class="btn">一键拨号</div></div>
        <div class="item">客服1：020-3242455<div class="btn">一键拨号</div></div>
      </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      
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
