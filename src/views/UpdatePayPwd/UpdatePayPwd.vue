<template>
  <div>
    <div class="set-dec">请输入原支付密码，以验证身份</div>
    <div class="pwd-inp">
      <div
        class="item"
        @click="setFocus"
        v-for="(item, index) in 6"
        :key="index"
      >
        <div class="item-dot" v-if="payPassWord.length > index"></div>
      </div>
    </div>

    <div class="btns">
      <div class="btn" @click="next">下一步</div>
    </div>
    <div class="set-tips">
      说明：支付密码用于支付及提现，非常重要，请务必记住，如您忘记了支付密码，请联系客服找回。
    </div>

    <input
      ref="passwordref"
      v-model="payPassWord"
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
export default {
  name: "wallet",
  data() {
    return {
      payPassWord: "",
      focus: false,
      isAndroid: /android/.test(window.navigator.userAgent.toLocaleLowerCase())
    };
  },
  computed: {},
  created() {},
  methods: {
    next() {
      let param = {
        payPassWord: this.payPassWord
      };
      this.$router.push({ path: "/updateNewPayPwd", query: param });
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
      if (this.payPassWord.length > 6) {
        this.payPassWord = this.payPassWord.substr(0, 6);
      }
      setTimeout(() => {
        this.payPassWord = this.payPassWord.replace(".", "");
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
