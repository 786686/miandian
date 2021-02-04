<template>
  <div id="app">
    <Layout>
      <!-- <transition :name="silder"> -->
      <router-view />
      <!-- </transition> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "@/layouts";
import { getParams } from "@/utils/util";
export default {
  name: "App",
  components: {
    Layout
  },
  computed: {
    silder() {
      return this.$store.state.silderDirection;
    }
  },
  created() {
    // return;
    // if (!localStorage.isLogin) {
    //   this.$store.dispatch(`GET_WX_REDIRECT`);
    // }
    // if (location.href.includes("token")) {
    //   localStorage.setItem("token", getParams("token"));
    //   this.$store.commit("SET_USER_ID", getParams("memberId"));
    //   this.$store.dispatch("GET_USER_INFO");
    // }
    // if (localStorage.token && !location.href.includes("token")) {
    //   this.$store.dispatch("GET_USER_INFO");
    // }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/reset.scss";
@import "@/assets/style/common.scss";
@import "@/assets/style/iconfont.scss";
</style>
