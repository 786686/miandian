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
        <div class="item-dot" v-if="pwdVal.length > index"></div>
      </div>
    </div>

    <div class="btns">
      <div class="btn">修改密码</div>
    </div>
    <div class="set-tips">
      说明：支付密码用于支付及提现，非常重要，请务必记住，如您忘记了支付密码，请联系客服找回。
    </div>

    <input
      ref="passwordref"
      v-model="pwdVal"
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
      pwdVal: "",
      focus: false,
      isAndroid: /android/.test(window.navigator.userAgent.toLocaleLowerCase())
    };
  },
  computed: {},
  created() {},
  methods: {
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
      if (this.pwdVal.length > 6) {
        this.pwdVal = this.pwdVal.substr(0, 6);
      }
      setTimeout(() => {
        this.pwdVal = this.pwdVal.replace(".", "");
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
