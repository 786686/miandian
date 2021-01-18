<template>
  <div class="layout-container">
    <div :class="['content-container', { 'have-bar': isBar }]">
      <slot></slot>
    </div>
    <TabBar v-show="isBar" />
  </div>
</template>

<script>
import TabBar from "./tabBar";
import User from "@/api/user";

export default {
  name: "Layout",
  components: {
    TabBar
  },
  data() {
    return {};
  },
  computed: {
    isBar() {
      const whiteNameList = ["home", "wallet", "phone", "my"];
      return whiteNameList.includes(this.$route.name);
    }
  },
  created() {
    // this.listBanner();
  },
  methods: {
    // async listBanner() {
    //   const { data, code } = await User.listBanner({type:1});
    //   if (code === 200) {
    //     console.log(data)
    //     // this.$store.commit(`SET_BANNER_LIST`, data.rows);
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.layout-container {
  z-index: 33;
  height: 100vh;
  .content-container {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    height: 100vh;
  }
  .have-bar {
    height: calc(100vh - 100px);
  }
}
</style>
