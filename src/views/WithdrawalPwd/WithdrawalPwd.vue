<template>
  <div>
    <div class="set-dec">请输入支付密码，用于提现</div>
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
      <div class="btn" @click="onSubmit">完成</div>
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
import User from "@/api/user";

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
    async onSubmit() {
      let param = {
        bankName: "", //	是	String	银行名称，充值时不能为空
        bankCode: "", //	是	String	银行卡号，提现时不能为空
        city: "", //	是	String	城市
        code: this.code, //	是	String	转账编号后6位
        number: this.number, //	是	double	金额
        role: localStorage.type, //	是	String	角色，1男用户，2女用户
        type: "0", //	是	String	0充值，1提现
        payPassword: "" //	是	String	支付密码，提现时不能为空
      };
      let { code } = await User.invest(param);
      if (code == 200) {
        this.popShow = true;
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
