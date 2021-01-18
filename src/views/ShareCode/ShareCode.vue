<template>
  <div class="share-code">
    <div class="share-code-top"></div>
    <div class="share-code-bottom">
      <div class="share-code-bottom-in">
        <div class="item-name">维保出险查询助手</div>
        <div class="item-code">
          <img
            :src="'http://www.baidu.com/shareMoney/getCode?id=' + id"
            alt
          />
        </div>
        <div class="item-dec">长按二维码，关注可领取红包查询维保出险记录</div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "@/api/user";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "'ShareCode'",
  data() {
    return {
      id: this.$route.query.id
    };
  },
  methods: {
    async sharePage() {
      const { data } = await User.getWxSign({
        url: window.location.href
      });
      wxPageShare(data);
    }
  },
  mounted() {
    //this.sharePage();
  }
};
</script>
<style lang="scss" scoped>
.share-code {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  .share-code-top {
    height: 223px;
    background: url("../../assets/image/bag-top.png") no-repeat;
    background-size: 750px 223px;
  }
  .share-code-bottom {
    padding-top: 223px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    .share-code-bottom-in {
      width: 100%;
      height: 100%;
      background: url("../../assets/image/bag-bottom.png") no-repeat;
      background-size: cover;
      padding-top: 97px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .item-name {
        font-size: 60px;
        font-family: AliHYAiHei;
        font-weight: bold;
        color: #ffc74b;
      }
      .item-code {
        width: 550px;
        height: 550px;
        background-color: #fff;
        border-radius: 15px;
        padding: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px 0 13px;
        img {
          width: 460px;
          height: 460px;
        }
      }
      .item-dec {
        font-size: 24px;
        font-family: AliHYAiHei;
        font-weight: bold;
        color: #ce3e35;
      }
    }
  }
}
</style>
