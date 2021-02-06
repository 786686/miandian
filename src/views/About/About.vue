<template>
  <div>
    <div class="about">
      <div class="logo">
        <van-image :src="detailItem.logoUrl"></van-image>
      </div>
      <div class="acticle-content">{{ detailItem.remark }}</div>
    </div>
  </div>
</template>
<script>
import Goods from "@/api/goods";
export default {
  name: "about",
  data() {
    return {
      detailItem: {}
    };
  },
  computed: {},
  created() {},
  methods: {
    async getContent() {
      let params = {};
      let { code, data } = await Goods.relevantList(params);
      if (code == 200) {
        this.detailItem = data;
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.about .logo {
  margin: 30px auto;
  width: 100px;
  height: 100px;
  background: #fafafa;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
}
.acticle-content {
  padding: 0 16px;
  text-indent: 2em;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
}
</style>
