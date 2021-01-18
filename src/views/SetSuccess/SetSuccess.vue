<style scoped lang="scss">
  .set-pwd{
    margin: 40px 70px;
    
font-size: 16px;
font-weight: bold;
color: #525050;
line-height: 22px;
text-align: center;
    .item-link{
color: #2B7FD2;
    }
  }
.set-tips{
  margin: 10px 30px; 
  
font-size: 13px;
color: #999999;
line-height: 18px;
}
</style>

<template>
  <div>
    <div class="set-pwd">
      您已设置了支付密码，<br>
      如您忘记密码，请<span class="item-link">联系客服</span>找回
    </div>
    <div class="btns">
      <div class="btn">修改密码</div>
    </div>
    <div class="set-tips">
      说明：支付密码用于支付及提现，非常重要，请务必记住，如您忘记了支付密码，请联系客服找回。
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "wallet",
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

</style>
