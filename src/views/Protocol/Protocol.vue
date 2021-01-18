<template>
  <div class="protocol" v-html="content"></div>
</template>
<script>
import User from "@/api/user";
import { Toast } from "vant";

import { wxPageShare } from "@/utils/wxSdk.js";
export default {
  name: "Protocol",
  data() {
    return {
      content: "",
      type: this.$route.query.type
    };
  },
  mounted() {
    this.getProtocol();
  },
  methods: {
    // 获取服务协议
    async getProtocol() {
      const { data } = await User.getProtocol({});
      if (this.type == 1) {
        this.content = data.wbVinAgree;
      } else {
        this.content = data.cxVinAgree;
      }
    },
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
.protocol {
  font-size: 36px;
  line-height: 52px;
  padding: 30px;
}
</style>
