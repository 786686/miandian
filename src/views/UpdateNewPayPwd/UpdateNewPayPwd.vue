<template>
  <div>
    <div class="set-dec">请输入新支付密码，用于提现</div>
    <div class="pwd-inp">
      <div
        class="item"
        @click="setFocus"
        v-for="(item, index) in 6"
        :key="index"
      >
        <div class="item-dot" v-if="newPayPassWord.length > index"></div>
      </div>
    </div>

    <div class="btns">
      <div class="btn">完成</div>
    </div>
    <div class="set-tips">
      说明：支付密码用于支付及提现，非常重要，请务必记住，如您忘记了支付密码，请联系客服找回。
    </div>

    <input
      ref="passwordref"
      v-model="newPayPassWord"
      :focus="focus"
      maxlength="6"
      type="number"
      class="hidden-input"
      @input="inputVal"
      @blur="setBlur"
    />
  </div>
</template>
<script>
import User from "@/api/user";
import { Toast } from "vant";
export default {
  name: "wallet",
  data() {
    return {
      newPayPassWord: "",
      focus: false,
      isAndroid: /android/.test(window.navigator.userAgent.toLocaleLowerCase())
    };
  },
  computed: {},
  created() {
    this.payPassWord = this.$route.query.payPassWord;
  },
  methods: {
    async onSubmit() {
      let params = {
        payPassWord: this.payPassWord, //是	string	支付宝密码 （如果是更新支付密码，登录密码passWord和newPassWord要为空）
        newPayPassWord: this.newPayPassWord, //是	string	新支付宝密码
        passWord: "", //是	string	登录密码
        newPassWord: "", //是	string	新登录密码 （如果是更新登录密码，支付密码payPassWord和newPayPassWord要为空）
        type: 2 //	是	string	用户类型 1为男用户，2为女用户，这个值一定不能传错
      };
      let { code } = await User.updatePassWord(params);
      if (code == 200) {
        Toast("修改密码成功！");
      }
    },
    getFocus() {
      this.focus = true;
    },
    setBlur() {
      this.focus = false;
    },
    setFocus() {
      this.focus = true;
      if (this.isAndroid) {
        window.addEventListener("resize", function() {
          if (
            document.activeElement.tagName === "input" ||
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "textarea" ||
            document.activeElement.tagName === "TEXTAREA"
          ) {
            window.setTimeout(function() {
              document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
          }
        });
      }
      this.$refs.passwordref.focus();
    },
    inputVal() {
      if (this.newPayPassWord.length > 6) {
        this.newPayPassWord = this.newPayPassWord.substr(0, 6);
      }
      setTimeout(() => {
        this.newPayPassWord = this.newPayPassWord.replace(".", "");
      }, 0);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.set-dec {
  margin: 34px 0 30px;
  text-align: center;
  font-size: 13px;
  color: #999999;
  line-height: 18px;
}
.pwd-inp {
  display: flex;
  margin: 0 15px 40px;
  justify-content: space-between;
  .item {
    width: 49px;
    height: 49px;
    border: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-dot {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #000;
    }
  }
}

.set-tips {
  margin: 10px 30px;
  font-size: 13px;
  color: #999999;
  line-height: 18px;
}

/* 文本输入框位置: 设置到左边隐藏 */
.hidden-input {
  position: relative;
  left: -300px;
  bottom: 0;
  width: 100px;
  height: 100px;
}
</style>
