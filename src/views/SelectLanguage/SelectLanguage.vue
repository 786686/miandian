<template>
  <div class="sel-language">
    <div class="sel-language-pop">
      <div class="item-top">请选择您的语言</div>
      <div class="lang-list">
        <div class="item">
          <van-image :src="require('@/assets/image/ic_radio_s.png')"></van-image>English
        </div>
        <div class="item">
          <van-image :src="require('@/assets/image/ic_choose_n.png')"></van-image>简体中文
        </div>
      </div>
      <div class="lang-tips">后续您可在“我的”-“语言设置中进行更改”</div>
      <div class="bottom-pop-btn">保存</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "language",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["userInfo"])
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
.sel-language {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .sel-language-pop{
    width: 280px;
    border-radius: 7px;
    overflow: hidden;
    background-color: #F7F7F7;
    .item-top{
      background: #EFEFEF;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 16px;
      font-weight: 600;
    }
    .lang-list{
      margin: 20px 0;
      .item{
        display: flex;
        font-size: 16px;
        align-items: center;
        padding-left: 84px;
        margin-bottom: 32px;
        &:last-child{
          margin-bottom: 0;
        }
        .van-image{
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
    .lang-tips{
      line-height: 17px;
      font-size: 12px;
      color: #999999;
      margin-bottom: 18px;
      text-align: center;
    }
  }
}
</style>
